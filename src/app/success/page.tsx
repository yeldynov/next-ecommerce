"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Confetti from "react-confetti";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // const orderId = searchParams.get("orderId");
  const orderId = 123;

  useEffect(() => {
    if (!orderId) return;

    const timer = setTimeout(() => {
      router.push("/orders/" + orderId);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-6">
      <Confetti width={2000} height={1000} />
      <h1 className="text-6xl text-green-700">Successful</h1>
      <h2 className="text-xl font-medium">We sent the invoice to your email</h2>
      <h3 className="">You are being redirected to the order page...</h3>
    </div>
  );
};

export default SuccessPage;
