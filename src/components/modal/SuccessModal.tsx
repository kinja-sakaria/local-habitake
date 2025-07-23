/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import Text from '../elements/Text';
import Button from '../elements/Button';

import { AlertSuccessIcon } from '../assets';

interface SuccessModalProps {
  content: string;
  isOpen: boolean;
  onConfirm: () => void;
  title: string | ReactNode;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  title,
  isOpen,
  content,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (    
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out"
      style={{ backdropFilter: 'blur(3px)' }}
    >
      <div
        className={`
          bg-white px-[100px] py-10 tablet:p-8 mobile:p-5 w-[650px] tablet:w-auto mobile:w-auto rounded-[20px] flex flex-col items-center
          transform transition-all duration-300 ease-out
          opacity-0 scale-95 animate-fadeInScale
        `}
        style={{
          boxShadow: '0px 12px 20px 4px rgba(0, 0, 0, 0.08)',
        }}
      >        
        {/* Glowing Circle with Checkmark */}
        {/* <div className='w-40 h-40 flex items-center justify-center'>

          <div
            className="w-[80px] h-[80px] rounded-full flex items-center justify-center"
            style={{
              // background: 'radial-gradient(circle at center, #1F4C6B 0%, #01A669 100%)',
              boxShadow: `
              0 0 20px 10px rgba(1, 166, 105, 0.2),
              0 0 40px 20px rgba(1, 166, 105, 0.15)
            `,
              background: 'radial-gradient(116.28% 116.28% at 0% -16.28%, #234F68 4.69%, #01A669 98.31%)'
            }}
          >
            <span className="text-white text-2xl font-bold">✓</span>
          </div>
        </div> */}
        
        <AlertSuccessIcon className='mobile:w-28 mobile:h-28'/>

        {/* Title and Content */}
        <p
          className="text-center lg:text-[32px] font-medium  lg:pb-5 tablet:pb-4 mobile:pb-2 text-[#333A54] leading-10 tablet:text-3xl !mobile:text-2xl !mobile:leading-8"
        >
          {title}
        </p>
        <Text size="large" weight='normal' className="text-center text-darkGray leading-extra-tight mobile:text-lg mobile:leading-6">
          {content}
        </Text>

        {/* Buttons */}
        {/* <button
            onClick={onClose}
            className="h-[48px] w-[140px] border font-semibold border-black rounded-md text-sm"
          >
            Cancel
          </button> */}
        <div className='lg:pt-[70px] tablet:pt-14 mobile:pt-7 w-full'>

          <Button
            color="primary"
            rounded='full'
            size='large'
            className="w-full cursor-pointer "
            variant="contained"
            type='submit'
            onClick={onConfirm}
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
