import { FaPaperPlane } from "react-icons/fa";
import contact from "../assets/contact/contact.svg";

export default function Contact() {
  return (
    <section className="w-full py-16 px-4 bg-[#FFFFFF]" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <p className="text-xs tracking-widest uppercase text-gray-600 font-bold mb-1 font-nunito">
            Get In Touch
          </p>
          <h2 className="font-nunito text-3xl md:text-4xl font-extrabold text-[#111111]">
            Contact <span style={{ color: "#0873B9" }}>Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start w-full">
            <img
              src={contact}
              alt="Contact Illustration"
              className="w-full max-w-sm md:max-w-md object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500 ease-in-out"
            />
          </div>

          <div className="p-1">
            <form
              action="https://formspree.io/f/xvgakajn"
              method="POST"
              className="flex flex-col gap-5 bg-[#FFFFFF] p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#111111] font-nunito mb-2">
                Send a Message
              </h3>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-gray-700 font-nunito"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded  bg-gray-50 border border-gray-200 text-[#111111] text-sm font-medium focus:outline-none transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-gray-700 font-nunito"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded  bg-gray-50 border border-gray-200 text-[#111111] text-sm font-medium focus:outline-none transition-all "
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-700 font-nunito"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="massage"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded  bg-gray-50 border border-gray-200 text-[#111111] text-sm font-medium focus:outline-none transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 w-full text-white font-bold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2"
                style={{ backgroundColor: "#0873B9" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#091841")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#0873B9")
                }
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
