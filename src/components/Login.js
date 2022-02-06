import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

// Icons
import google from "../assets/google.svg";


const Login = () => {
  return (
    <div className="w-full h-screen bg-neutral-100 flex justify-center items-center">
      <div className="bg-white border-slate-300 border py-5 px-8 w-fit rounded-lg shadow-slate-400 shadow-lg">
        <h2 className="text-lg text-center font-bold text-gray-500">
          Welcome to Matinogram!
        </h2>
        <div
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
          className="bg-green-700 rounded-md flex items-center text-white p-3 mt-10 cursor-pointer shadow-slate-400 shadow-md hover:bg-green-800 transition-all"
        >
          <img className="w-7 mr-2" src={google} alt="google" /> Sign in with
          Google
        </div>
      </div>
    </div>
  );
};

export default Login;
