import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label, Button, TextInput, Alert, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("All fields are required!"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (errorMessage) {}
  };

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
            Sign in with your email and password or with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label>Your email</Label>
              <TextInput
                type="email"
                placeholder="name@Company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Your password</Label>
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white  rounded-lg transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:z-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 cursor-pointer"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Spinner size="sm" />
                  <span className="z-10">Loading ...</span>
                </div>
              ) : (
                <span className="z-10">Sign In</span>
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 justify-center">
            <span>Don't have an account?</span>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign Up
            </Link>
          </div>

          {errorMessage && (
            <Alert className="mt-3" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
