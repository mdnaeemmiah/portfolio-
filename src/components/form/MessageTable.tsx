'use client';

import { useState } from 'react';
import { useGetAllMessagesQuery } from '@/redux/features/message/messageApi';

interface Message {
  name: string;
  email: string;
  message: string;
}

const MessageTable = () => {
  const { data, isLoading, error } = useGetAllMessagesQuery(undefined);
  const messages = Array.isArray(data?.data) ? data?.data : data?.data?.messages || [];

  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10;

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

  if (isLoading) return <p>Loading messages...</p>;
  if (error) return <p className="text-red-500">Error loading messages</p>;

  return (
    <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 border border-gray-200 rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {currentMessages.length > 0 ? (
              currentMessages.map((msg: Message, index: number) => (
                <tr key={index} className="hover:bg-gray-700 text-white text-center">
                  <td className="px-4 py-2 border">{msg.name}</td>
                  <td className="px-4 py-2 border">{msg.email}</td>
                  <td className="px-4 py-2 border">{msg.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4 text-white">
                  No messages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
  
        <div className="flex justify-center mt-8">
          <nav className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-md">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md text-sm font-medium transition 
                ${currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition 
                  ${currentPage === number
                    ? "bg-[#C51963] text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
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
                  : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
            >
              Next
            </button>
          </nav>
        </div>

    </div>
  );
};

export default MessageTable;
