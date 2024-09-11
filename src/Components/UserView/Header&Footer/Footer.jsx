import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
          <p>Oliz Store, Babarmahal</p>
          <p>Phone: +977 9801021297</p>
          <p>Email: info@olizstore.com</p>
          <p>Working Hours: Sun - Fri / 10AM - 6PM</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Locations</a>
            </li>
            <li>
              <a href="#">EMI</a>
            </li>
            <li>
              <a href="#">Samsung EMI Service</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">iPhone Warranty and Policy</a>
            </li>
            <li>
              <a href="#">How to Buy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">POPULAR CATEGORIES</h3>
          <ul className="flex flex-wrap">
            <li className="mr-4 mb-2">
              <a href="#">iPhone 15</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">MacBook Air</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">MacBook Pro</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">iMac 24"</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">Mac Mini</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">Drones</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">Action Cameras</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">Gimbal/Stabilizer</a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#">AV Surround Receivers</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">SUBSCRIBE NEWSLETTER</h3>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 mb-4 rounded-lg"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
