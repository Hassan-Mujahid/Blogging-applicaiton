import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OAuth = () => {
  const auth = getAuth(app);
  const { error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else if (data.success === false) {
        dispatch(signInFailure(data.message));
        console.log("errorMessage:", errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      outline
      gradientDuoTone="pinkToOrange"
      className="relative before:absolute before:inset-0 cursor-pointer before:bg-gradient-to-r before:from-orange-500 before:to-pink-500 before:opacity-0 overflow-hidden hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-0"
      onClick={handleGoogleSignIn}
    >
      <span className="z-10 flex items-center">
        <AiFillGoogleCircle className="w-6 h-6" />
        <span className="ml-2">Continue with Google</span>
      </span>
    </Button>
  );
};

export default OAuth;
