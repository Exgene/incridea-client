import { NextPage } from "next";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import { titleFont } from "../utils/fonts";
import Navbar from "../components/navbar";
import Button from "../components/button";
import { makePayment } from "../utils/razorpay";
import Spinner from "../components/spinner";

type Props = {};

const Register: NextPage = (props: Props) => {
	
	// const { error, user, loading } = useAuth();
  // const router = useRouter();
	// if(!user) router.push("/login");
  // if (user?.role !== "USER") router.push("/");
	const [loading, setLoading] = useState(false)

  return (
    <div className="px-4 md:px-6 py-10 min-h-screen text-white bg-gradient-to-b from-[#46aacf]  via-[#075985] to-[#2d6aa6]">
      <h2 className={`${titleFont.className} text-white text-center text-4xl md:text-5xl`}>Register</h2>
			<h5 className="text-center mt-5 md:mt-7 text-base md:text-xl max-w-7xl mx-auto">Before you dive in, read through the list of T&C, and register yourself for the fest by clicking the button below.</h5>
			<div className="md:px-10 px-5 md:mt-8 mt-6 max-w-7xl mx-auto bg-white/20 rounded-sm md:py-7 py-4">
				<h2 className="font-semibold md:text-2xl text-base">Terms and Conditions</h2>
				<ol className="mt-4 md:text-xl list-disc list-inside">
					<li>List</li>
					<li>Of</li>
					<li>Rules</li>
				</ol>
				<Button disabled={loading} onClick={() => makePayment(setLoading)} className="flex gap-2 mt-8">Pay and Register {loading && <Spinner className="w-fit" size={'small'} intent={'white'} />} </Button>
				<h1 className="text-xs md:text-sm mt-2 text-gray-100">By clicking the above button, you agree to the mentioned terms and conditions</h1>
			</div>
    </div>
  );
};

export default Register;