"use client";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/message/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 px-5 max-w-6xl mx-auto pt-9 mt-20 pb-10">
      <div>
        <h1 className="text-5xl text-[rgb(60,0,64)] mt-10 font-bold my-5">
          Everything for pets & pet parents in one place.
        </h1>
        <p className="text-xl text-teal-600 my-5">
          Our platform brings together everything you need for your pet’s well-being...
        </p>
      </div>

      <section>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold underline text-center mb-8 rancho-regular text-[rgb(60,0,64)]">
            Contact Us
          </h2>

          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-1/2 px-6">
              <h3 className="text-2xl font-semibold mb-4 text-[rgb(60,0,64)]">Send Us a Message</h3>
              {success && <p className="text-green-600">Message sent successfully!</p>}
              {error && <p className="text-red-600">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C51963]"
                    type="text" id="name" required value={formData.name} onChange={handleChange} />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C51963]"
                    type="email" id="email" required value={formData.email} onChange={handleChange} />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C51963]"
                    type="text" id="subject" required value={formData.subject} onChange={handleChange} />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C51963]"
                    id="message" required value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C51963] hover:scale-105 transition duration-300"
                  disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
