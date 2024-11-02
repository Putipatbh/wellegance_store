"use client"

import useCart from "@/lib/hooks/useCart";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
    const cart = useCart();

    useEffect(() => {
        cart.clearCart();
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-3 bg-white-cream">
            <div className="mb-10">
                <CircleCheck
                    width="150"
                    height="150"
                    stroke="#B27474"  
                    strokeWidth="1"
                    fill="#F7C6C7"
                />
            </div>
            <p className="text-heading4-bold text-red-1">Successful Payment</p>
            <p>Thank you for your purchase</p>
            <Link
                href="/"
                className="p-4 border text-base-bold hover:bg-pink-brown hover:text-white"
            >
                CONTINUE TO SHOPPING
            </Link>

        </div>
    );
};

export default SuccessfulPayment;