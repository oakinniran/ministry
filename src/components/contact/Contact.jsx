import React from "react";
import logo from "../Image/8.png";

const Contact = () => {
  return (
    <div>
      <section className="py-16 bg-gray-800 text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold pb-10">Get in touch</h1>

            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>(+234) 8054292778, (+234) 8030560481</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>Godunlimitedsuccessoutreach@gmail.com</span>
              </p>
              <p className="flex items-center">
               For Donation:  Please reach out to our bank<br/>
                <span>God Unlimited Success outreach, 1229069841, Zenith Bank</span>
              </p>
            </div>
          </div>

          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation or call us
            </p>
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Fullname"
                className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800 outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="E.g@mail.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800 outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                placeholder="Message"
                className="block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-800 outline-none"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-violet-400 text-white focus:ri hover:ri"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
