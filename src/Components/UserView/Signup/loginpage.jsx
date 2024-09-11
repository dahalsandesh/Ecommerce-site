import React, { useState } from "react";
import Header from ".././Header&Footer/Header";
import Footer from ".././Header&Footer/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    // Email validation
    if (!email) {
      formErrors.email = "Gmail is required";
    } else if (!/\S+@gmail+\.\S+/.test(email)) {
      formErrors.email = "Gmail is invalid";
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(formErrors);

    // If no errors, form is valid
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submitting form data
      console.log("Form submitted successfully", { email, password });
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Login Page */}
      <div className="bg-gray-200 h-20 my-0  display flex justify-center items-center">
        <h2 className=" text-center text-3xl font-bold text-gray-900 ">
          Customer Login
        </h2>
      </div>
      <div className="h-auto flex flex-col justify-center items-center bg-gray- my-4 ">
        <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-600 mb-0">
            Registered Customers
          </h3>
          <p className="text-gray-400  ">
            If you have an account, sign in with your email address.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot Your Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign In
              </button>
            </div>

            {/* Create Account Button */}
            <div>
              <button
                onClick={() => navigate("/signup")}
                type="button"
                className="group relative w-full flex
                justify-center py-2 px-4 border border-transparent text-sm
                font-medium rounded-md text-white bg-black hover:bg-gray-800
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500">
                {" "}
                Create an Account
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          * Required Fields
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LoginPage;
