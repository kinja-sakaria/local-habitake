/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

// Compoments of the elements folder
import Text from '@/components/elements/Text';
import Button from '@/components/elements/Button';
import TextField from '@/components/elements/TextField'

export default function ForgetPasswordView() {

  const router = useRouter(); 

  return (
    <>
      <div className='text-2xl font-medium text-primaryBlack leading-[100%]'>
        <Text
          size='large'
          weight='medium'
          className="text-primaryBlack leading-[100%]">
          Forgot Password
        </Text>
      </div>
     {/* Form for Forget Password */}
      <div className='pt-10'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push('/reset-password');
          }}
        >
          <TextField
            label="Email"
            placeholder="Email"
          />
         
          <div className='lg:pt-80 tablet:pt-52 mobile:pt-44'>
            <Button
              color="primary"
              rounded='full'
              size='large'
              className="w-full cursor-pointer"
              variant="contained"
              type='submit'           
            >
             Continue
            </Button>
          </div>
          <div>
            <Text
              size="lg"
              weight="normal"
              textAlign='center'
              className="text-primaryLight pt-4 leading-extra-tight mobile:text-base"
            >
              Remember your Password ? 
              <a href='/sign-in' className='text-green font-semibold mobile:font-medium cursor-pointer'> Login Instead</a>
            </Text>
          </div>
        
        </form>
      </div>
    </>
  )
}
