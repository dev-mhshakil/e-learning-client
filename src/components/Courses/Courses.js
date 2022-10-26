import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import LeftSide from "../LeftSideCourseMenu/LeftSide";
import SingleCourse from "../SingleCourse/SingleCourse";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-4 mt-10 ">
      <div className=" w-9/12 mx-auto ">
        <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2 border-1 border-amber-400">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
                Courses
              </h2>
              <div className="flex flex-col gap-5">
                {courses.map((course) => (
                  <LeftSide key={course.id} course={course}></LeftSide>
                ))}
              </div>
            </div>
          </nav>
        </aside>
      </div>
      <div className="col-span-4 grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
