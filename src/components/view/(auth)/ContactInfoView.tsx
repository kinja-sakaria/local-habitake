/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';
import React, { useState, useRef } from 'react';

// Components of the elements folder
import Text from '@/components/elements/Text';
import Button from '@/components/elements/Button';
import TextField from '@/components/elements/TextField';

// Assets
import { PencilIcon, PhoneIcon } from '@/components/assets';

// Modal
import SuccessModal from '@/components/modal/SuccessModal';

export default function ContactInfoView() {

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with file:', file);
    setShowSuccessModal(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className='text-2xl font-medium text-primaryBlack leading-[100%] mobile:leading-8'>
        Fill your Information below
      </div>

      <Text
        size="lg"
        weight="normal"
        className="pt-4 text-primaryLight leading-[100%] mobile:text-base mobile:leading-6"
      >
        You can edit this later on your account setting.
      </Text>

      <div className='pt-[76px] flex flex-col items-center justify-center'>
        <div className="relative w-[110px] h-[110px]">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#E6E6EA]">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <Text
                  size="normal"
                  weight="bold"
                  className="text-primaryGray leading-extra-tight"
                >
                  Upload photo
                </Text>
              </div>
            )}
          </div>

          {/* Pencil Icon Trigger */}
          <div
            className="absolute bottom-0 right-0 w-[33px] h-[33px] bg-green-500 rounded-full flex items-center justify-center z-20 bg-green cursor-pointer "
            onClick={handleIconClick}
          >
            <PencilIcon className="w-4 h-4" />
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="pt-10">
        <TextField
          label=""
          type="text"
          placeholder="Phone number"
          numericOnly={true}
          // inputProps={{
          //   maxLength: 10, 
          // }}
          className="!h-[60px] !bg-primaryGrayDark !rounded-[10px] !border-none"
          LeftIcon={
            <PhoneIcon className="w-5 h-5 text-primaryBlue" />
          }
        />
      </div>
      <div className="pt-40">
        <Text size="normal" weight="medium" textAlign="center">
          <a
            href="/sign-up"
            className="text-primaryBlack leading-extra-tight cursor-pointer"
          >
            Skip
          </a>
        </Text>
      </div>
      <div className="pt-7">
        <Button
          color="primary"
          rounded="full"
          variant="contained"
          size="large"
          className="w-full cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

      {showSuccessModal && (
        <SuccessModal
          isOpen={showSuccessModal}
          title={
            <>
              Account <span className="font-extrabold lg:text-[32px] mobile:text-2xl mobile:font-bold leading-10">successfully</span> created
            </>
          }
          content='Lorem ipsum dolor sit amet, consectetur.'
          onConfirm={() => setShowSuccessModal(false)}
        />
      )}
    </>
  );
}
