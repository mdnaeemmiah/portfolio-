"use client";

import { useGetAllMessagesQuery } from "@/redux/features/message/messageApi";

interface Message {
  name: string;
  email: string;
  message: string;
}

const MessageTable = () => {
  const { data, isLoading, error } = useGetAllMessagesQuery(undefined);

  if (isLoading) return <p>Loading messages...</p>;
  if (error) return <p className="text-red-500">Error loading messages</p>;

  const messages = Array.isArray(data?.data) ? data?.data : data?.data?.messages || [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.length > 0 ? (
            messages.map((msg:Message, index:any) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{msg.name}</td>
                <td className="px-4 py-2 border">{msg.email}</td>
                <td className="px-4 py-2 border">{msg.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4">
                No messages found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MessageTable;
