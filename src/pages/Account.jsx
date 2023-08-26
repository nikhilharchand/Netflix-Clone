import React from 'react';
import SavedShows from '../components/SavedShows';
const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className=" w-full h-[400px] object-cover"
    src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""
    />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='test-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
    </div>
    <SavedShows/>
    </>
  );
};

export default Account;