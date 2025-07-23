/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

// Components of the elements folder
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import TextField from "@/components/elements/TextField";
import RoleDropdown from "@/components/elements/DropDown";

// Assets
import { EyeIcon, EyeIconInvisible } from '@/components/assets';


export default function SignUpView() {
    const [showPassword, setshowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setshowPassword(!showPassword);
    };

    return (
        <>
            <div className="text-2xl font-medium text-primaryBlack leading-[100%]">
                Create an account
            </div>
            <p className="font-normal text-lg mobile:text-base leading-[100%] text-primaryLight pt-4 ">
                Lorem ipsum dolor sit amet
            </p>
            <div className="pt-10">
                <form>
                    <TextField label="Full Name" placeholder="Enter Name" />
                    <div className="pt-6">
                        <TextField label="Email" placeholder="Enter Email" />
                    </div>

                    <div className="pt-6">
                        <RoleDropdown
                            label="Role"
                            options={["Seller", "Normal Agent", "Agency", "Buyer"]}
                            defaultValue="Seller"
                            onChange={(val) => console.log("Selected:", val)}
                        />
                    </div>

                    <div className="pt-6 flex gap-3 lg:w-full  md:flex-row flex-col">
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            rightIcon={
                                showPassword ? (
                                    <EyeIcon
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeIconInvisible
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                )
                            }
                            className=" md:w-full w-full"
                        />
                        {/* <div> */}
                        <TextField
                            label="Confirm Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            rightIcon={
                                showPassword ? (
                                    <EyeIcon
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeIconInvisible
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                )
                            }
                            className="w-full md:w-full"
                        />
                        {/* </div> */}
                    </div>
                    <div className='pt-5 flex justify-start items-center gap-3'>
                        <input
                            type="checkbox"
                            required
                            className="w-4 h-4 h-appearance-none border-[2px] rounded border-primaryLight flex items-center justify-center 
                                       checked:bg-primaryBlue  checked:flex checked:items-center checked:justify-center
                                        checked:before:content-['✔'] checked:before:text-white checked:before:text-lg checked:before:font-medium"
                        />
                        <label htmlFor="terms" className=" text-base text-primaryLight font-medium leading-extra-tight">
                            Agree to the Terms & Condition
                        </label>
                    </div>
                    <div className="pt-9">
                        <Button
                            color="primary"
                            rounded="full"
                            variant="contained"
                            size="large"
                            className="w-full cursor-pointer"
                            disabled={true}
                        >
                            Next
                        </Button>
                    </div>
                    <div>

                        <Text
                            size="lg"
                            weight="normal"
                            textAlign='center'
                            className="text-primaryLight pt-4 leading-extra-tight"
                        >
                            Already have an account ?
                            <a href='/sign-in' className='text-green font-semibold cursor-pointer'>  Login</a>
                        </Text>
                    </div>
                    <div className="flex items-center w-full py-7">
                        <div className="flex-grow h-px bg-lightGray" />
                        <span className="mx-[10px] text-primaryLight text-lg self-center mobile:text-base">
                            or continue with
                        </span>
                        <div className="flex-grow h-px bg-lightGray" />
                    </div>

                    {/* Social login buttons */}
                    <div className="flex gap-[21px] mobile:gap-3 w-full justify-center">
                        <button className="flex items-center h-[56px] border  border-borderGray rounded-xl px-4 py-4 w-full justify-center ">
                            {/* Google Icon */}
                            <img src='assets/social-icon/google-icon.svg' className='w-6 h-6 mobile:h-[18px] mobile:w-[18px]' />
                        </button>
                        <button className="flex items-center h-[56px] border  border-borderGray rounded-xl px-4 py-4 w-full justify-center ">
                            {/* ISO Icon */}
                            <img src='assets/social-icon/ios-icon.svg' className='w-6 h-6 mobile:h-[18px] mobile:w-[18px]' />
                        </button>
                        <button className="flex items-center h-[56px] border  border-borderGray rounded-xl px-4 py-4 w-full justify-center ">
                            {/* Fb Icon */}
                            <img src='assets/social-icon/fb-icon.svg' className='w-6 h-6 mobile:h-[18px] mobile:w-[18px]' />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
{
    /* hover:bg-gray-50 transition */
}
