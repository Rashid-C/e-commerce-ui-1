"use client";
import { CartItemsType } from "@/types";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
const steps = [
    {
        id: 1,
        title: "Shopping Cart",
    },
    {
        id: 2,
        title: "Shipping Address",
    },
    {
        id: 3,
        title: "Payment Method",
    },
];

//temp

const cartItems: CartItemsType = [
    {
        id: 1,
        name: "Product1",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },
        quantity: 1,
        selectedSize: "s",
        selectedColor: "red",
    },
    {
        id: 2,
        name: "Product2",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },
        quantity: 1,
        selectedSize: "xl",
        selectedColor: "green",
    },
    {
        id: 3,
        name: "Product3",
        shortDescription: "This is the dummy product for development purpose",
        description: "product number 1",
        price: 59.6,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["red", "black", "blue"],
        images: { gray: "/product/6a.png", white: "/product/6w.png" },
        quantity: 1,
        selectedSize: "m",
        selectedColor: "gray",
    },
];

const CartPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const activeStep = parseInt(searchParams.get("step") || "1");

    return (
        <div className="flex flex-col gap-8 items-center justify-center mt-12">
            {/* title */}
            <h1 className="text-2xl font-medium ">Your Shopping Cart</h1>
            {/* steps */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {steps.map((step) => (
                    <div
                        className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}
                        key={step.id}
                    >
                        <div
                            className={`w-5 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-200"}`}
                        >
                            {step.id}
                        </div>
                        <p
                            className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}
                        >
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>
            {/* steps and details */}
            <div className="w-full flex flex-col lg:flex-row gap-16">
                {/* step */}.
                <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    1
                </div>
                {/* deatils */}
                <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    <h2 className="font-semibold">Cart Details</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Subtotal</p>
                            <p className="font-medium">
                                $ {cartItems
                                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </p>
                        </div>

                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Discount (10%)</p>
                            <p className="font-medium">$ 10</p>
                        </div>

                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Shipping Fee</p>
                            <p className="font-medium">$10</p>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between">
                            <p className="text-gray-800 font-semibold">Total</p>
                            <p className="font-medium">${cartItems
                                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                .toFixed(2)}</p>
                        </div>


                    </div>
             {  activeStep===1 &&    ( <button onClick={()=>router.push("/cart?step=2",{scroll:false})} className="w-full hover:bg-gray-900 transition-all duration-300 flex gap-2 items-center justify-center text-white bg-gray-800 p-2 rounded-lg cursor-pointer">
                        Continue
                        <ArrowRight className="w-3 h-3" />
                    </button>)}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
