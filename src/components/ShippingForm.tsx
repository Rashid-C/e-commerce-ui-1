import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ShippingForm = ({ setShippingForm }: {
    setShippingForm: (data: ShippingFormInputs) => void;

}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ShippingFormInputs>({
        resolver: zodResolver(shippingFormSchema),
    });

    const router = useRouter()

    const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data)
        router.push("/cart?step=3", { scroll: false })
    }
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xs text-gray-500 font-medium ">
                    Name
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm "
                    type="text"
                    id="name"
                    placeholder="Your name ..."
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-gray-500 font-medium ">
                    Email
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm "
                    type="email"
                    id="email"
                    placeholder="example@email.com"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-xs text-gray-500 font-medium ">
                    Phone
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm "
                    type="text"
                    id="phone"
                    placeholder="xxxxxxx+++"
                    {...register("phone")}
                />
                {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-xs text-gray-500 font-medium ">
                    Address
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm "
                    type="text"
                    id="address"
                    placeholder="123, Main st, USA"
                    {...register("address")}
                />
                {errors.address && (
                    <p className="text-xs text-red-500">{errors.address.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-xs text-gray-500 font-medium ">
                    City
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm "
                    type="text"
                    id="city"
                    placeholder="Your city name"
                    {...register("city")}
                />
                {errors.city && (
                    <p className="text-xs text-red-500">{errors.city.message}</p>
                )}
            </div>
            <button type="submit" className="w-full hover:bg-gray-900 transition-all duration-300 flex gap-2 items-center justify-center text-white bg-gray-800 p-2 rounded-lg cursor-pointer">
                Continue
                <ArrowRight className="w-3 h-3" />
            </button>
        </form>
    );
};

export default ShippingForm;
