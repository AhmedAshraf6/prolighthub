import HeroLanding from '@/components/profile/HeroLanding';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroLanding title='My Account' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'></div>
      </div>
    </>
  );
}
