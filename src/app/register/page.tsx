"use client";
import Welcome from "@/components/Welcome";
import RegisterForm from "@/components/RegisterForm";
import React, { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-gradient-to-b from-Primary/40 to-Backgroundb w-full h-screen px-4 flex items-center justify-center">
      {step === 1 ? (
        <Welcome setStep={setStep} />
      ) : (
        <RegisterForm setStep={setStep} />
      )}
    </div>
  );
};

export default Register;
