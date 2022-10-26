import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const UserProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);
  const [photo, setPhoto] = useState(user?.photoURL);
  console.log(photo);

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentName = name;
    const photoURL = photoURLRef.current.value;
    setPhoto(photoURL);
    console.log(currentName, photoURL);
    handleUpdateUserProfile(currentName, photoURL);
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="w-9/12 mx-auto h-[57vh]">
      <div className="mb-5">
        <h2 className="text-3xl">
          Hey, <span className="text-amber-500">{name}</span>
        </h2>
      </div>
      <section className="p-6 bg-slate-200 dark:text-gray-50">
        <form
          onSubmit={handleSubmit}
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <input
                  onChange={handleNameChange}
                  defaultValue={name}
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Email
                </label>
                <input
                  defaultValue={user?.email}
                  readOnly
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="photoURL" className="text-sm">
                  Photo URL
                </label>
                <input
                  ref={photoURLRef}
                  defaultValue={user?.photoURL}
                  id="photoURL"
                  type="text"
                  placeholder="photoURL"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                ></input>
              </div>
              <div className="col-span-full">
                <label
                  type="submit"
                  htmlFor="my-modal"
                  className="btn  modal-button text-black hover:text-white"
                >
                  Update
                </label>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
      {/* modal section here */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <img className="py-4" src={photo} alt="" />

          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
