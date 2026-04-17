import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <div className="text-center">
        
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold drop-shadow-lg">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found 
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm md:text-base opacity-80">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          ⬅ Go Back Home
        </Link>

        {/* Decorative Glow */}
        <div className="mt-10 flex justify-center">
          <div className="w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;