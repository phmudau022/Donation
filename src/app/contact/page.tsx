import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 text-black py-16 ">
      <div className="w-4/5 mx-auto flex flex-col items-center justify-center relative gap-5 z-50">
        <h1 className="text-5xl font-bold mb-2 text-center">
          <span className="underline decoration-red-500">Contact</span> Us
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          We’re here to connect with you! If you have any questions about our programs, are interested in getting involved, or simply want to drop a friendly message, don’t hesitate to reach out. We’d love to hear from you!
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                // rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Details</h2>
          <p className="text-lg mb-2">Hope Horizons</p>
          <p className="text-lg mb-2">1234 Charity Lane, Suite 100</p>
          <p className="text-lg mb-2">City, State, ZIP Code</p>
          <p className="text-lg mb-2">Email: contact@hopehorizons.org , phumulamudau259@gmail.com</p>
          <p className="text-lg mb-2">Phone: (+27) 82 559 8615</p>
        </div>
      </div>
    </div>
  );
};

export default page;
