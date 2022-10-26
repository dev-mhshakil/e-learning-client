import React from "react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

const LeftSide = ({ course }) => {
  const { id, title } = course;
  return (
    <div data-aos="zoom-in">
      <Link rel="noopener noreferrer" to={`/courses/${id}`}>
        <button className="btn btn-outline btn-success w-64 py-4">
          {title}
        </button>
      </Link>
    </div>
  );
};

export default LeftSide;
