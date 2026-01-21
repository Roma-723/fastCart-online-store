import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">

        <p className="text-5xl font-semibold mb-6">
          404 Not Found
        </p>

        <p className="text-gray-500 mb-8">
          Your visited page not found. You may go home page.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 transition text-white px-6 h-11 rounded-md">
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default Error;
