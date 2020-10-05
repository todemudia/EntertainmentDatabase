import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h2>Oops! Page not found.</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </>
  );
}
