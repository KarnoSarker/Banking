import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Image
          src='/icons/logo.svg'
          width={34}
          height={34}
          alt='CityBank logo'
          className='size-[24px]'
        />
        <Link
          href='/'
          className='mb-12 cursor-pointer items-center gap-2'
        ></Link>
      </nav>
    </section>
  );
};

export default Sidebar;
