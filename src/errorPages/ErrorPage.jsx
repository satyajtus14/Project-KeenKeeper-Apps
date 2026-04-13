import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";


const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2 className="font-bold text-3xl">Page Not Found</h2>
      <p>
        Looks like this friendship link is broken. The page <br />
        you're looking for doesn't exist or has been removed.
      </p>
      <Link to="/" className="home-button flex justify-center items-center gap-2">
      <FiHome /> Back to Home
      </Link>
      {/* <button
        className="back-button"
        onClick={() => window.history.back()}
      >
        Go Back
      </button> */}
    </div>
  );
};

export default ErrorPage;