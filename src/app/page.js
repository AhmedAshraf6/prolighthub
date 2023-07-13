import Slider from '@/components/home/Slider';
import Link from 'next/link';
import img2 from '../../public/image-2.png';
import React from 'react';
import Image from 'next/image';
import { StarRating } from '@/components/shared-component/StarRating';
import { FaStar } from 'react-icons/fa';
import Sale from '@/components/home/Sale';

export default function Home() {
  return (
    <div>
      <Slider />
      {/* Featured Product */}
      <div className='mt-8 sm:mt-24'>
        <div className='container '>
          <h1 className='head mb-3 sm:mb-4'>Featured Product</h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet consectetur.</p>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-3 mt-3 sm:mt-6'>
            <div className='cursor-pointer  sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-gray-200 transition-shadow duration-200 group flex flex-col items-start '>
              <Link href={`/shop/asdasd`} aria-label='redirect to shop page'>
                <Image
                  src='/image-2.png'
                  width={500}
                  height={500}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                  className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200 w-100'
                  placeholder='blur'
                  blurDataURL='/spinner.svg'
                  alt='image not avalible'
                  priority
                ></Image>
                <div className='p-2 flex flex-col gap-y-2'>
                  <div className='flex'>
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                  </div>
                  <h3 className='text-lg font-semibold'>light</h3>
                  <div className='flex gap-1'>
                    <span className='text-base font-semibold'>70Egp</span>
                    <span className='text-gray-400 line-through'>90Egp</span>
                  </div>
                </div>
              </Link>
              <button className=' btn-primary mx-2 mb-5'>Add to cart</button>
            </div>
            <div className='cursor-pointer  sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-gray-200 transition-shadow duration-200 group flex flex-col items-start '>
              <Link href={`/shop/asdasd`} aria-label='redirect to shop page'>
                <Image
                  src='/image-2.png'
                  width={500}
                  height={500}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                  className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200 w-100'
                  placeholder='blur'
                  blurDataURL='/spinner.svg'
                  alt='image not avalible'
                  priority
                ></Image>
                <div className='p-2 flex flex-col gap-y-2'>
                  <div className='flex'>
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                  </div>
                  <h3 className='text-lg font-semibold'>light</h3>
                  <div className='flex gap-1'>
                    <span className='text-base font-semibold'>70Egp</span>
                    <span className='text-gray-400 line-through'>90Egp</span>
                  </div>
                </div>
              </Link>
              <button className=' btn-primary mx-2 mb-5'>Add to cart</button>
            </div>
            <div className='cursor-pointer  sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-gray-200 transition-shadow duration-200 group flex flex-col items-start '>
              <Link href={`/shop/asdasd`} aria-label='redirect to shop page'>
                <Image
                  src='/image-2.png'
                  width={500}
                  height={500}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                  className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200 w-100'
                  placeholder='blur'
                  blurDataURL='/spinner.svg'
                  alt='image not avalible'
                  priority
                ></Image>
                <div className='p-2 flex flex-col gap-y-2'>
                  <div className='flex'>
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                  </div>
                  <h3 className='text-lg font-semibold'>light</h3>
                  <div className='flex gap-1'>
                    <span className='text-base font-semibold'>70Egp</span>
                    <span className='text-gray-400 line-through'>90Egp</span>
                  </div>
                </div>
              </Link>
              <button className=' btn-primary mx-2 mb-5'>Add to cart</button>
            </div>
            <div className='cursor-pointer  sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-gray-200 transition-shadow duration-200 group flex flex-col items-start '>
              <Link href={`/shop/asdasd`} aria-label='redirect to shop page'>
                <Image
                  src='/image-2.png'
                  width={500}
                  height={500}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                  className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200 w-100'
                  placeholder='blur'
                  blurDataURL='/spinner.svg'
                  alt='image not avalible'
                  priority
                ></Image>
                <div className='p-2 flex flex-col gap-y-2'>
                  <div className='flex'>
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                    <FaStar className='text-[#e4e5e9]' />
                  </div>
                  <h3 className='text-lg font-semibold'>light</h3>
                  <div className='flex gap-1'>
                    <span className='text-base font-semibold'>70Egp</span>
                    <span className='text-gray-400 line-through'>90Egp</span>
                  </div>
                </div>
              </Link>
              <button className=' btn-primary mx-2 mb-5'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      {/* Sale */}
      <Sale />
    </div>
  );
}
