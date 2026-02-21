"use client";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { CartItemsType } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
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
    const [shippingForm, setShippingForm] = useState(null);

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
                    {activeStep === 1 ? (
                        cartItems.map((item) => (
                            // single cart item
                            <div className="flex items-center justify-between" key={item.id}>
                                {/*image and details  */}
                                <div className="flex gap-8">
                                    {/* image */}
                                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.images[item.selectedColor]}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    {/*item details  */}
                                    <div className="flex flex-col justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium ">{item.name}</p>
                                            <p className="text-xs text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Size: {item.selectedSize}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Color: {item.selectedColor}
                                            </p>
                                        </div>
                                        <p className="font-medium">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                {/* delete but */}
                                <button className="w-8 hover:bg-red-200 transition-all duration-300 h-8 rounded-full bg-red-100 text-red-400 flex items-center justify-center cursor-pointer ">
                                    <Trash2 className="w-3 h-3" />
                                </button>
                            </div>
                        ))
                    ) : activeStep === 2 ? (
                        <ShippingForm />
                    ) : activeStep === 3 && shippingForm ? (
                        <PaymentForm />
                    ) : (
                        <p className="text-sm text-gray-500">
                            Please fill in the shipping form to continue.
                        </p>
                    )}
                </div>
                {/* deatils */}
                <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
                    <h2 className="font-semibold">Cart Details</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Subtotal</p>
                            <p className="font-medium">
                                ${" "}
                                {cartItems
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
                            <p className="font-medium">
                                $
                                {cartItems
                                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </p>
                        </div>
                    </div>
                    {activeStep === 1 && (
                        <button
                            onClick={() => router.push("/cart?step=2", { scroll: false })}
                            className="w-full hover:bg-gray-900 transition-all duration-300 flex gap-2 items-center justify-center text-white bg-gray-800 p-2 rounded-lg cursor-pointer"
                        >
                            Continue
                            <ArrowRight className="w-3 h-3" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
