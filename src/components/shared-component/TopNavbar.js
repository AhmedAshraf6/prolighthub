'use client';
import Image from 'next/image';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { HiMiniBars3 } from 'react-icons/hi2';
import { BiSearch } from 'react-icons/bi';

import CartButton from './CartButton';
import { useMainContext } from '@/contexts/MainContext';
export default function TopNavbar() {
  const { detectNavbar, navbar, amount } = useMainContext();

  return (
    <nav className='flex justify-between items-center py-5 lg:py-10 px-5 lg:px-8'>
      <div className='hidden lg:flex items-center gap-5'>
        <FaFacebook className='cursor-pointer hover:text-primary smooth text-lg' />
        <AiOutlineTwitter className='cursor-pointer hover:text-primary smooth text-lg' />
        <AiFillInstagram className='cursor-pointer hover:text-primary smooth text-lg' />
      </div>
      <HiMiniBars3
        className='text-2xl smooth cursor-pointer hover:text-primary block lg:hidden'
        onClick={() => detectNavbar(true)}
      />

      <div>
        <Image
          src='/log.png'
          width={60}
          height={60}
          alt='logo-prolighthub'
          className='max-w-full h-auto object-contain'
        />
      </div>

      <div className='flex items-center gap-5  '>
        <BiSearch className='hidden lg:block cursor-pointer hover:text-primary smooth text-2xl' />
        <CgProfile className='hidden lg:block cursor-pointer hover:text-primary smooth text-2xl' />
        <CartButton count='1' />
      </div>
    </nav>
  );
}
