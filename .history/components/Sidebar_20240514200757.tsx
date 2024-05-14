import Image from 'next/image';
import Link from 'next/link';

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-12 cursor-pointer items-center gap-2'>
          <Image
            src='/icons/lines.png'
            width={34}
            height={34}
            alt='CityBank logo'
            className='size-[24px]'
          />
        </Link>
      </nav>
    </section>
  );
};

export default Sidebar;
