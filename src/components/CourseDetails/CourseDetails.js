import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const course = useLoaderData();

  const { id, imgURL, title, fees, details, author, courseTime, modules } =
    course;
  console.log(course);
  return (
    <div className="w-9/12 mx-auto mt-10">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div>
          <img className="h-[500px] w-full" src={imgURL} alt="" />
        </div>
        <div className="text-start">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-xl mt-5">
            Author:{" "}
            <span className="text-green-700 font-semibold">{author.name}</span>
          </p>
          <p className="mt-5">Details: {details}</p>
          <div className="flex justify-between mt-5 text-xl font-semibold">
            <p>
              Lessons: <span className="text-red-500">{modules}</span>
            </p>
            <p>
              Course Time: <span className="text-green-600">{courseTime}</span>
            </p>
          </div>
          <p className="text-5xl mt-5">
            Price: <span className="text-amber-500">{fees}</span>
          </p>
          <Link to={`/checkout/courses/${id}`}>
            <button className="btn btn-warning mt-10 w-full">
              Get Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
