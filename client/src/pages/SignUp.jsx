import React from "react";
import { Link } from "react-router-dom";
import { Label, Button, TextInput } from "flowbite-react";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
              Hassan's
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            Sign up with your email and password or with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label>Your username</Label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label>Your email</Label>
              <TextInput
                type="email"
                placeholder="name@Company.com"
                id="email"
              />
            </div>
            <div>
              <Label>Your password</Label>
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white  rounded-lg transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:z-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 cursor-pointer">
              <span className="z-10">Sign Up</span>
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 justify-center">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
