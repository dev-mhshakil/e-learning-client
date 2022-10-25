import React from "react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

const LeftSide = ({ course }) => {
  const { id, title } = course;
  return (
    <div className="mb-10">
      <Link to={`/courses/${id}`} className="course-title">
        {title}
      </Link>
    </div>
  );
};

export default LeftSide;
