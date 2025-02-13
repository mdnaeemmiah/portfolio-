export default function ContactUsPage() {
  return (
    <section className="min-h-screen bg-slate-50 px-5 max-w-6xl mx-auto pt-9 mt-20 pb-10">
      <div className="">    
        <h1 className="text-5xl text-[rgb(60,0,64)] mt-10 font-bold my-5">
          Everything for pets & pet parents in one place.
        </h1>  
      
        <p className="text-xl text-teal-600  my-5 ">
          Our platform brings together everything you need for your pet’s well-being. From trusted services to expert advice, we provide pet parents with a seamless experience to keep their pets healthy and happy. Whether you're looking for products, articles, or local providers, we have everything you need to care for your furry friends.
        </p>
        <p className="text-xl text-teal-600  my-5 ">
          With our platform, you can access resources, expert opinions, and services to simplify your pet care journey. Whether you’re a new pet owner or a seasoned pro, we aim to provide the best tools and advice to help you navigate through the world of pet care.
        </p>
        <p className="text-xl text-teal-600 my-5 ">
          We’re dedicated to ensuring your pet gets the care and love they deserve, with everything you need in one place.
        </p>
      </div>

      <section className=" ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold underline text-center mb-8 rancho-regular text-[rgb(60,0,64)]">
            Contact Us
          </h2>

          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 flex flex-col justify-center ">
              <h3 className="text-2xl font-semibold text-[rgb(60,0,64)] mb-4 rancho-regular">
                Get in Touch
              </h3>
              <p className="text-xl text-teal-600 my-5 mb-8">
                We'd love to hear from you! Whether you have a question about our pet care services, need advice, or just want to chat about your pet's needs, feel free to reach out.
              </p>
              <ul className="mb-4 text-teal-600">
                <li className="mb-2">
                  <strong className="text-[rgb(60,0,64)]">Address:</strong> 123 Pet Care Avenue, Pet City, PC 12345
                </li>
                <li className="mb-2">
                  <strong className="text-[rgb(60,0,64)]">Phone:</strong> (123) 456-7890
                </li>
                <li className="mb-2">
                  <strong className="text-[rgb(60,0,64)]">Email:</strong>{" "}
                  <a
                    href="mailto:info@petcare.com"  
                    className="text-[#EF1F76] font-semibold hover:underline"
                  >
                    info@petcare.com
                  </a>
                </li>
                <li className="mb-2">
                  <strong className="text-[rgb(60,0,64)]">Hours:</strong> Mon - Fri, 9am - 6pm
                </li>
              </ul>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-6">
              <h3 className="text-2xl font-semibold mb-4 rancho-regular text-[rgb(60,0,64)]">
                Send Us a Message
              </h3>
              <form className="">
                <div className="mb-4  ">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <div className="border-[1.5px] rounded-lg ">
                    <input
                      className="w-full px-4 bg-white  py-2  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <div className="border-[1.5px] rounded-lg ">
                    <input
                      className="w-full px-4 bg-white  py-2  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                      type="text"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <div className="border-[1.5px] rounded-lg ">
                    <input
                      className="w-full px-4 bg-white  py-2  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#C51963]"
                      type="text"
                      id="subject"
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
                    required
                  ></textarea>
                </div>
          
                <button   type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C51963] hover:scale-105 transform transition duration-300">
                  Send Message
                </button>
               
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
