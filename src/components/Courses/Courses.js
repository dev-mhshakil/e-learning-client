import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSide from "../LeftSideCourseMenu/LeftSide";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-10 ">
      <div className=" w-9/12 mx-auto">
        {courses.map((course) => (
          <LeftSide key={course.id} course={course}></LeftSide>
        ))}
      </div>
      <div className="col-span-2 grid lg:grid-cols-3 sm:grid-cols-1  gap-4">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
