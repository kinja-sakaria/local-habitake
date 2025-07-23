/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

// Compoments of the elements folder
import Text from '@/components/elements/Text';
import Button from '@/components/elements/Button';
import TextField from '@/components/elements/TextField'

// Assets
import { EyeIcon, EyeIconInvisible } from '@/components/assets';


export default function SignInView() {

  const router = useRouter();

  const [showPassword, setshowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  return (
    <>
      <div className='text-2xl font-medium text-primaryBlack leading-[100%]'>
        Get Started
      </div>
      <Text
        size="lg"
        weight="normal"
        className="pt-4 text-primaryLight leading-[100%] mobile:text-base"
      >
        Welcome! We&lsquo;re thrilled to have you
      </Text>
      <div className='pt-10'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push('/identity-verification');
          }}
        >
          <TextField
            label="Email"
            placeholder="Email"
          />
          <div className='pt-6'>
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
            />
          </div>
          <Text
            size="normal"
            weight="medium"
            textAlign='right'
            className="pt-4 text-green leading-extra-tight"
          >
            <a href='/forget-password' className='cursor-pointer'>
              Forgot  password ?
            </a>
          </Text>
          <div className='pt-[76px]'>
            <Button
              color="primary"
              rounded='full'
              size='large'
              className="w-full cursor-pointer "
              variant="contained"
              type='submit'
            >
              Sign in
            </Button>
          </div>
          <div>
            <Text
              size="lg"
              weight="normal"
              textAlign='center'
              className="text-primaryLight pt-4 leading-extra-tight mobile:text-base"
            >
              Don&lsquo;t have an account yet ?
              <a href='/sign-up' className='text-green font-semibold cursor-pointer'> Sign up</a>
            </Text>
          </div>
          <div className="flex items-center w-full py-7">
            <div className="flex-grow h-px bg-lightGray" />
            <span className="mx-[10px] text-primaryLight text-lg self-center mobile:text-base">or continue with</span>
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
  )
}
{/* hover:bg-gray-50 transition */ }
