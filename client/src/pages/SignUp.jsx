import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label, Button, TextInput, Alert, Spinner } from "flowbite-react";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setErrorMessage(null);
    if (!formData.username || !formData.email || !formData.password) {
      setLoading(false);
      return setErrorMessage("All fields are required!");
    }
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        navigate("/sign-in");
      }
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
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
            Sign up with your email and password or with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label>Your username</Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
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
                placeholder="Password"
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
                <span className="z-10">Sign Up</span>
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 justify-center">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
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

export default SignUp;
