import useMobileDeviceDetection from 'hooks/useMobileDetection';
import Link from 'next/link';
import React from 'react';

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection();
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="w-fit h-fit text-white text-2xl">
            {/*  <Image
              src={'/images/4.png'}
              width="50px"
              height={30}
              alt="company brand"
              loading="lazy"
            /> */}
            AUDIO 4 DESIGN
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBrand;
