import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import NavLinks from '@/components/NavLinks';

const Navber = () => {
  return (
    <div className="navbar bg-[#0a0a0a] shadow-sm shadow-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link href={'/'} className="flex items-center">
          <Image src={logo} alt="nav logo" width={30} height={30} />
          <span className="btn btn-ghost text-xl">FitLog</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end text-sm">
        <div className="flex items-center gap-1 hover:bg-[#14181d] px-3 py-2 rounded-xl">
          <button>Plan</button>
          <span className=" px-2.5 text-black bg-[#c4f000] rounded-2xl">0</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-[#14181d] px-3 py-2 rounded-xl">
          <button>Save</button>
          <span className=" px-2.5 border border-[#ededed]  rounded-2xl">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navber;
