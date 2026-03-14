"use client";
import { Bike, ShoppingBasket, ShoppingCart } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

type propType = {
  setStep: (step: number) => void;
};
const Welcome = ({ setStep }: propType) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-[300px] text-center p-5 mx-4">
      <motion.div
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-Primary bg-Secondary/30 p-2 rounded-full"
      >
        <ShoppingBasket size={30} className="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-Primary text-3xl font-bold">
          <span className="text-Text">Quick</span> Basket
        </h1>
      </motion.div>
      <motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="text-Text my-3 "
        >
          Welcome to Quick Basket — your easy way to shop fresh groceries and
          daily essentials with fast home delivery.
        </motion.p>
        <div className="flex justify-between items-center mt-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center justify-center gap-1 "
          >
            <ShoppingCart
              size={40}
              className="bg-Secondary/10 text-Primary rounded-full p-2"
            />
            <h3 className="text-Text font-semibold">Fresh Produce</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: +30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center justify-center gap-1 "
          >
            <Bike
              size={40}
              className="bg-Accent/10 text-Accent rounded-full p-2"
            />
            <h3 className="text-Text font-semibold">Fresh Produce</h3>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: +30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className=" mt-5"
      >
        <button
          onClick={() => setStep(2)}
          className="bg-Primary text-white px-30 py-3 rounded-full font-medium hover:bg-Primary/90 transition pointer-coarse "
        >
          Next
        </button>
        <p className="text-Text">
          alraedy have an acount?{" "}
          <Link href={"/login"} className=" text-Primary underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Welcome;
