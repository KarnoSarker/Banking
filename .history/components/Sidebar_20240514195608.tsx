import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className='sidebar'>
      <Image
        src='/icons/logo.svg'
        width={34}
        height={34}
        alt='CityBank logo'
        className='size-[24px]'
      />
    </section>
  );
};

export default Sidebar;
