import React, { useState } from "react";
import Header from ".././Header&Footer/Header";
import Footer from ".././Header&Footer/Footer";

const CreateAccountPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    // First Name validation
    if (!firstName) {
      formErrors.firstName = "First Name is required";
    }

    // Last Name validation
    if (!lastName) {
      formErrors.lastName = "Last Name is required";
    }

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

    // Confirm Password validation
    if (!confirmPassword) {
      formErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);

    // If no errors, form is valid
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submitting form data
      console.log("Form submitted successfully", {
        firstName,
        lastName,
        email,
        password,
        newsletter,
      });
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Create Account Page */}
      <div className="bg-gray-200 h-20 my-0  display flex justify-center items-center">
        <h2 className=" text-center text-2xl font-bold text-gray-600 ">
          Create New Customer Account
        </h2>
      </div>
      <div className="h-auto my-12 flex flex-col justify-center items-center bg-gray-50 ">
        <div className="w-full max-w-5xl p-8 space-y-8 bg-white shadow-xl rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Personal Information
                </h3>

                {/* First Name Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full px-3 py-2 border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full px-3 py-2 border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 block text-sm text-gray-900">
                    Sign up for Newsletter
                  </label>
                </div>
              </div>

              {/* Sign-in Information */}
              <div>
                <h3 className="text-xl mb-4 font-semibold text-gray-800">
                  Sign-in Information
                </h3>

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

                {/* Confirm Password Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700">
                    Confirm Password *
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-3 py-2 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-1/2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

export default CreateAccountPage;
