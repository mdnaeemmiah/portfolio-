'use client';

import { useState } from 'react';
import { useDeleteMessageMutation, useGetAllMessagesQuery } from '@/redux/features/message/messageApi';
import toast from 'react-hot-toast';
import { toast as sonnerToast } from 'sonner';
import { Eye, Trash2 } from 'lucide-react';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MessageTable = () => {
  const { data, isLoading, error, refetch } = useGetAllMessagesQuery(undefined);
  const [deleteMessage] = useDeleteMessageMutation();
  const messages = Array.isArray(data?.data) ? data?.data : data?.data?.messages || [];

  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10;

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [viewMessage, setViewMessage] = useState<Message | null>(null);

  const totalPages = Math.ceil(messages.length / messagesPerPage);
  const currentMessages = messages.slice(
    (currentPage - 1) * messagesPerPage,
    currentPage * messagesPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openViewModal = (msg: Message) => {
    setViewMessage(msg);
    setIsViewOpen(true);
  };

  const closeViewModal = () => {
    setIsViewOpen(false);
    setViewMessage(null);
  };

  const confirmDelete = (message: string) =>
    new Promise<boolean>((resolve) => {
      sonnerToast(message, {
        className: "sonner-toast",
        style: {
          marginTop: "28vh",
          minWidth: "420px",
          maxWidth: "520px",
          padding: "20px 24px",
          borderRadius: "22px",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gap: "14px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(249,245,240,0.98))",
          boxShadow: "0 30px 60px -40px rgba(15,23,42,0.55)",
        },
        action: {
          label: "Delete",
          onClick: () => resolve(true),
        },
        cancel: {
          label: "Cancel",
          onClick: () => resolve(false),
        },
        actionButtonStyle: {
          backgroundColor: "#22c55e",
          color: "#ffffff",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        },
        cancelButtonStyle: {
          backgroundColor: "#ef4444",
          color: "#ffffff",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        },
      });
    });

  const handleDelete = async (id: string) => {
    const accepted = await confirmDelete('Delete this message?');
    if (!accepted) return;

    try {
      await deleteMessage(id).unwrap();
      toast.success('Message deleted successfully!');
      refetch();
    } catch (deleteError: any) {
      console.error('Error deleting message:', deleteError);
      toast.error(deleteError?.data?.message || 'Error deleting message');
    }
  };

  if (isLoading) return <p>Loading messages...</p>;
  if (error) return <p className="text-red-500">Error loading messages</p>;

  const truncateMessage = (text: string, limit: number = 60) => {
    if (text.length <= limit) return text;
    return `${text.slice(0, limit)}...`;
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex flex-col gap-2 border-b border-slate-200/70 pb-4">
          <p className="section-kicker">Messages</p>
          <h2 className="text-2xl font-semibold text-slate-900">Inbox</h2>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th className="dashboard-th">Name</th>
                <th className="dashboard-th">Email</th>
                <th className="dashboard-th">Subject</th>
                <th className="dashboard-th">Message</th>
                <th className="dashboard-th">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentMessages.length > 0 ? (
                currentMessages.map((msg: Message) => (
                  <tr key={msg._id} className="hover:bg-slate-50/80">
                    <td className="dashboard-td font-semibold text-slate-900">{msg.name}</td>
                    <td className="dashboard-td">{msg.email}</td>
                    <td className="dashboard-td">{msg.subject}</td>
                    <td className="dashboard-td text-slate-600">
                      {truncateMessage(msg.message)}{" "}
                      {msg.message.length > 60 && (
                        <button
                          type="button"
                          onClick={() => openViewModal(msg)}
                          className="ml-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c27a52]"
                        >
                          See more
                        </button>
                      )}
                    </td>
                    <td className="dashboard-td">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openViewModal(msg)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                          title="View"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(msg._id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 text-rose-500 transition hover:border-rose-300 hover:text-rose-600"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="dashboard-td text-center text-slate-500">
                    No messages found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
  
        <div className="flex justify-center">
          <nav className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md text-sm font-medium transition 
                ${currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#c27a52] text-white hover:bg-[#b86f47]"}`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition 
                  ${currentPage === number
                    ? "bg-[#c27a52] text-white"
                    : "bg-white text-slate-500 hover:bg-slate-100"}`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md text-sm font-medium transition 
                ${currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#c27a52] text-white hover:bg-[#b86f47]"}`}
            >
              Next
            </button>
          </nav>
        </div>

      {isViewOpen && viewMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] w-full max-w-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">Message</p>
                <h3 className="text-2xl font-semibold text-slate-900">Message Details</h3>
              </div>
              <button
                type="button"
                onClick={closeViewModal}
                className="rounded-full border border-slate-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 hover:border-slate-300"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div>
                <p className="dashboard-label">Name</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{viewMessage.name}</p>
              </div>
              <div>
                <p className="dashboard-label">Email</p>
                <p className="mt-1 text-base text-slate-700">{viewMessage.email}</p>
              </div>
              <div>
                <p className="dashboard-label">Subject</p>
                <p className="mt-1 text-base text-slate-700">{viewMessage.subject}</p>
              </div>
              <div>
                <p className="dashboard-label">Message</p>
                <p className="mt-1 text-base text-slate-700">{viewMessage.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageTable;
