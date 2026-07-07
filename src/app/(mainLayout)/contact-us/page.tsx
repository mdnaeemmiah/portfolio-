"use client"
import { useCreateMessageMutation } from "@/redux/features/message/messageApi";
import { toast } from "react-hot-toast";

export default function ContactUsPage() {
  const [createMessage, { isLoading }] = useCreateMessageMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await createMessage(data).unwrap();
      toast.success("Message sent successfully!");
      e.target.reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };


  return (
    <section className="section">
      <div className="text-center">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title mt-3">Let&apos;s build something purposeful.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
          Share your idea, timeline, or collaboration request. I&apos;ll get back
          to you within 24 hours.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">Get in touch</h3>
          <p className="mt-3 text-sm text-slate-600">
            Whether you need a product redesign, a new landing page, or a full
            stack build, let&apos;s talk.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>
              <strong className="text-slate-900">Address:</strong> Tolarbag,
              Mirpur-01, Dhaka
            </li>
            <li>
              <strong className="text-slate-900">Phone:</strong> +01892927131
            </li>
            <li>
              <strong className="text-slate-900">Email:</strong> mdnaeemmiah48@gmail.com
            </li>
            <li>
              <strong className="text-slate-900">Hours:</strong> Mon - Fri, 9am - 6pm
            </li>
          </ul>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">Send a message</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#c27a52]"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#c27a52]"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#c27a52]"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#c27a52]"
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

