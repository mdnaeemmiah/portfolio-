

export default function ContactUsPage() {
    return (
      <section className="min-h-screen bg-slate-50 px-5 max-w-6xl mx-auto pt-9 mt-20 pb-10">
        <div className="">    
          <h1 className="text-5xl text-[rgb(60,0,64)] mt-10 font-bold my-5">
            Everything for pets & pet parents in one place.
          </h1>  
        
          <p className="text-xl text-teal-600  my-5 ">
          Revolutionize your communication of product updates with our platform. We provide real-time notifications, tailored in-app messages, and effective feedback tools to keep your users engaged and informed. Simplify your communication process, improve user experience, and drive product adoption with our intuitive solution. Whether you’re introducing new features or collecting valuable insights, our platform ensures your users remain informed and enthusiastic about what’s coming next.    
          </p>
          <p className="text-xl text-teal-600  my-5 ">
            We know how happy, healthy, and busy your pets keep you, so with all
            the resources, videos, articles, services, products, advice, opinions,
            and ideas out there, we thought you could use a good place to start.
          </p>
          <p className="text-xl text-teal-600 my-5 ">
            You’ll find sound advice, trusted providers, and indispensable
            services here, all in one place.
          </p>
          <p className="text-xl text-teal-600 my-5 ">
            Because every pet deserves to be well cared for, by companions who
            return their love and dedication.
          </p>
        </div>
  
        <section className=" ">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold underline text-center mb-8 rancho-regular text-[rgb(60,0,64)]">
              Contact Me
            </h2>
  
            <div className="flex flex-wrap -mx-6">
              <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 flex flex-col justify-center ">
                <h3 className="text-2xl font-semibold text-[rgb(60,0,64)] mb-4 rancho-regular">
                  Get in Touch
                </h3>
                <p className=" text-xl text-teal-600 my-5 mb-8">
                  We&apos;d love to hear from you! Whether you have a question
                  about our services, need assistance, or just want to talk about
                  your idea, feel free to reach out.
                </p>
                <ul className="mb-4 text-teal-600">
                  <li className="mb-2">
                    <strong className="text-[rgb(60,0,64)]">Address:</strong> 123 bekar street, PC 12345
                  </li>
                  <li className="mb-2">
                    <strong className="text-[rgb(60,0,64)]">Phone:</strong> (123) 456-7890
                  </li>
                  <li className="mb-2">
                    <strong className="text-[rgb(60,0,64)]">Email:</strong>{" "}
                    <a
                      href="mailto:info@beamer.com"  
                      className="text-[#EF1F76] font-semibold hover:underline"
                    >
                      info@beamer.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong className="text-[rgb(60,0,64)]">Hours:</strong> Mon - Fri, 9am - 5pm
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
                        id="name"
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
                        id="name"
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
                      // rows="4"
                      required
                    ></textarea>
                  </div>
            
                  <button   type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C51963] hover:scale-105 transform transition duration-300">
                    send massage
                  </button>
                 
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
  