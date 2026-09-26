'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <li
        className={`${pathname === '/' ? 'text-[#c4f000] bg-[#1d232a] rounded hover:bg-[#1d232a]' : ''}`}
      >
        <Link href={'/'}>Workouts</Link>
      </li>
      <li
        className={`${pathname === '/my-plan' ? 'text-[#c4f000] bg-[#1d232a] rounded hover:bg-[#1d232a]' : ''}`}
      >
        <Link href={'/my-plan'}>My Plan</Link>
      </li>
    </>
  );
};

export default NavLinks;
