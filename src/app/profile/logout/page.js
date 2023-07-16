'use client';
import HeroLanding from '@/components/profile/HeroLanding';
import ProfileLinksContainer from '@/components/profile/ProfileLinksContainer';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroLanding title='My Account' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          <div className='grid md:grid-cols-3 gap-x-8 gap-y-5'>
            <div className='col-span-3 md:col-span-1'>
              <ProfileLinksContainer />
            </div>
            <div className='col-span-3 md:col-span-2'>lOG OUT</div>
          </div>
        </div>
      </div>
    </>
  );
}
