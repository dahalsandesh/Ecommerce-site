import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Replace with your API URL
    fetch("https://api.example.com/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <a href="/">
            <img
              src="https://via.placeholder.com/100x50?text=SanSam+STORE"
              alt="Logo"
            />{" "}
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg py-2 px-4"
            />
            <button className="absolute right-0 top-0 mt-2 mr-4">🔍</button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/signin" className="hover:underline">
            Sign In
          </Link>{" "}
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>{" "}
          <Link to="/create-account" className="hover:underline">
            Create an Account
          </Link>{" "}
          <Link to="/warranty" className="hover:underline">
            Extended Warranty
          </Link>{" "}
          <Link to="/wishlist" className="hover:underline">
            ❤️
          </Link>{" "}
          {/* Link to Wishlist */}
          <Link to="/cart" className="hover:underline">
            🛒
          </Link>{" "}
          {/* Link to Cart */}
        </div>
      </div>
      <nav className="bg-gray-100">
        <div className="container mx-auto py-4 px-6 flex justify-between">
          {categories.map((category) => (
            <div key={category.id} className="space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                {category.name}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
