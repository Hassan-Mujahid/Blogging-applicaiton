import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const DashboardProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="text-center my-7 font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-36 h-36 self-center cursor-pointer rounded-full shadow">
          <img
            src={currentUser.profilePhoto}
            className="rounded-full object-cover w-full h-full border-8 border-gray-300 dark:border-gray-200"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          defaultValue={currentUser.email}
          placeholder="email"
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button
          outline
          gradientDuoTone="purpleToBlue"
          className="relative before:absolute before:inset-0 cursor-pointer before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 overflow-hidden hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-0"
        >
          <span className="z-10">Update</span>
        </Button>
      </form>
      <div className="flex justify-between mt-4">
        <Button
          className="relative bg-gradient-to-r
         from-red-400 to-red-600 cursor-pointer
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-600 before:to-red-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-0 overflow-hidden"
        >
          <span className="z-10">Delete Account</span>
        </Button>
        <Button
          className="relative bg-gradient-to-r
         from-red-400 to-red-600 cursor-pointer
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-600 before:to-red-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-0 overflow-hidden"
        >
          <span className="z-10">Sign Out</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardProfile;
