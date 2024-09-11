import React from "react";
import Header from "./Header&Footer/Header";
import Footer from "./Header&Footer/Footer";
const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <iframe
              title="Google Maps"
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.668555093292!2d85.31988581501893!3d27.69948998279681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198feb9989f3%3A0xdac926b749e8ed07!2sPutalisadak%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1694119950221!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Write Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  What's on your mind? <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Message"
                  required></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                📞 <span className="ml-2">9801021297</span>
              </li>
              <li className="flex items-center">
                📞 <span className="ml-2">9861060000</span>
              </li>
              <li className="flex items-center">
                📧 <span className="ml-2">support@olizstore.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
