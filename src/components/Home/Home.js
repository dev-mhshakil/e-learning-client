import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://s3.envato.com/files/1be4eebe-bc4d-467f-9804-8860ef55b0d0/inline_image_preview.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold text-success">
              Welcome to E-Learning
            </h1>
            <p className="mb-5 ">
              This is a online education platfrom where you can learn new
              skills, knowledge. Now a days skills is very important for your
              future. It will help you to get a good job. Take this learning as
              a fun project. You will learn a lot.
            </p>
            <Link to="/courses">
              <button className="btn btn-outline btn-success">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
