"use client";
import Welcome from "@/components/Welcome";
import RegisterForm from "@/components/RegisterForm";
import React, { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-gradient-to-b from-green-100 to-Background h-screen px-4 flex items-center justify-center">
      {step === 1 ? <Welcome setStep={setStep} /> : <RegisterForm />}
    </div>
  );
};

export default Register;
