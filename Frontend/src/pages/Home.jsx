import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEmailVerification = async () => {
    if (!auth.currentUser.emailVerified) {
      await sendEmailVerification(auth.currentUser);
    } else {
      alert("Email already verified");
    }
  };
  const handleProfile = () => {
    console.log(profile);
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <button onClick={handleEmailVerification}>Verify Email</button>
      <hr />
      <button onClick={() => navigate("/profile")}>Profile</button>
    </div>
  );
};

export default Home;
