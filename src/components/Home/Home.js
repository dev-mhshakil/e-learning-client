import React from "react";
import "./Home.css";
import e2 from "../../assets/images/e2.png";

const Home = () => {
  return (
    <div className="top-banner">
      <div className=" min-h-screen bg-base-200 banner">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img
            src={e2}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="banner-img"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to E-Learning</h1>
            <p className="py-6">
              E-Learning is an education site where you get to learn a lot of
              things.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
