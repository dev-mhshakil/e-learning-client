import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  console.log(course);
  const { title } = course;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-6xl">
        {" "}
        Check Out for <span className="text-amber-500">{title}</span>
      </h1>
    </div>
  );
};

export default CheckOut;
