import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="front-page">
      <h1>Welcome to the Front Page</h1>
      <Link to="/user-list">
        <button>View User List</button>
      </Link>
    </div>
  );
};

export default FrontPage;
