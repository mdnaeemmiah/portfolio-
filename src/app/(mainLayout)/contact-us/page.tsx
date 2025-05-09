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
    <section className="min-h-screen bg-slate-50 px-5 max-w-6xl mx-auto pt-9">
      <section className=" ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold underline text-center mb-8 rancho-regular text-[#3C4064]">
            Contact Me
          </h2>

          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 flex flex-col justify-center ">
              <h3 className="text-2xl text-[#3C4064] font-semibold mb-4 rancho-regular">
                Get in Touch
              </h3>
              <p className="mb-4 text-xl text-[#3C4064] my-5 ">
                We&apos;d love to hear from you! Whether you have a question
                about our services, need assistance, or just want to talk about
                your idea, feel free to reach out.
              </p>
              <ul className="mb-4 text-[#3C4064]">
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

            <div className="w-full md:w-1/2 px-6 text-[#3C4064]">
              <h3 className="text-2xl font-semibold mb-4 rancho-regular text-[#3C4064]">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <div className="border-[1.5px] rounded-lg">
                    <input
                      className="w-full px-4 bg-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <div className="border-[1.5px] rounded-lg">
                    <input
                      className="w-full px-4 bg-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <div className="border-[1.5px] rounded-lg">
                    <input
                      className="w-full px-4 bg-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                      type="text"
                      id="subject"
                      name="subject"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" ml-5 text-white py-2 px-4 rounded-md font-semibold bg-[#C51963] hover:scale-105 transform transition duration-300"
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
