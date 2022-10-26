import React from "react";
import { IoIosTimer } from "react-icons/io";
import { HiOutlineBookOpen, HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { id, title, imgURL, author, fees, rating, courseTime, modules } =
    course;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={imgURL} alt="Shoes" className="rounded-xl h-64" />
        </figure>
        <div className="card-body ">
          <div className="flex items-center">
            <img className="author-img w-10" src={author.image} alt="" />
            <p className="flex justify-start ml-4">{author.name}</p>
          </div>
          <h2 className="card-title">{title}</h2>
          <div className="flex">
            <p className="text-start flex items-center text-lg">
              <IoIosTimer></IoIosTimer>
              {courseTime}
            </p>
            <p className=" text-lg flex items-center ml-32">
              <HiOutlineBookOpen className="text-end"></HiOutlineBookOpen>
              {modules}
            </p>
          </div>
          <div className="flex">
            <p className="text-start text-lg font-semibold">${fees}</p>
            <p className="ml-[190px] text-lg flex items-center">
              <HiStar></HiStar>
              {rating}
            </p>
          </div>
          <div className="">
            <Link to={`/courses/${id}`}>
              <button className="btn btn-outline btn-success w-full">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
