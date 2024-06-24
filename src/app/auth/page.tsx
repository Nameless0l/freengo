"use client"
import SignupForm from "@/components/auth/signup-form";
import React from "react";

// BackgroundImage component
const BackgroundImage = () => (
  <div
    className="p-5 bg-image"
    style={{
      backgroundImage:
        "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
      height: "300px",
    }}
  />
);

// AuthUI component
const AuthUI = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="text-center row justify-content-center">
      <div className="col-md-8 mt-2">
        <BackgroundImage />
        <SignupForm handleSubmit={(e) => handleSubmit(e)} />
      </div>
    </section>
  );
};

export default AuthUI;
