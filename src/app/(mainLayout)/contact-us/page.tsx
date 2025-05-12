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
    <section className="min-h-screen dark:bg-gray-900 px-5 max-w-6xl mx-auto pt-9 mt-36">
      <section className=" ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold underline text-center mb-8 rancho-regular">
            Contact Me
          </h2>

          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 flex flex-col justify-center ">
              <h3 className="text-2xl  font-semibold mb-4 rancho-regular">
                Get in Touch
              </h3>
              <p className="mb-4 text-xl  my-5 ">
                We&apos;d love to hear from you! Whether you have a question
                about our services, need assistance, or just want to talk about
                your idea, feel free to reach out.
              </p>
              <ul className="mb-4 ">
                <li className="mb-2">
                  <strong>Address:</strong> 123 bekar street, PC 12345
                </li>
                <li className="mb-2">
                  <strong>Phone:</strong> (123) 456-7890
                </li>
                <li className="mb-2">
                  <strong>Email:</strong>{" "}
                  <button className="text-[#EF1F76] font-semibold hover:underline">
                    mdnaeemmiah48@gmail.com
                  </button>
                </li>
                <li className="mb-2">
                  <strong>Hours:</strong> Mon - Fri, 9am - 5pm
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 px-6 ">
              <h3 className="text-2xl font-semibold mb-4 rancho-regular ">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">
                  Name
                </label>
                <div className="border-[1.5px] rounded-lg">
                  <input
                    className="w-full px-4 bg-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <div className="border-[1.5px] rounded-lg">
                  <input
                    className="w-full px-4 bg-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="subject">
                  Subject
                </label>
                <div className="border-[1.5px] rounded-lg">
                  <input
                    className="w-full px-4 bg-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

