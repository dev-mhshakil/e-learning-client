import React from "react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

const LeftSide = ({ course }) => {
  const { title } = course;
  return (
    <div className="mb-10">
      <Link className="course-title">{title}</Link>
    </div>
  );
};

export default LeftSide;
