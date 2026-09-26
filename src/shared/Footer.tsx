import logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="border-t border-t-[#2d2d2d] py-8 px-10 mt-5">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 max-w-7xl mx-auto">
        <div className="flex gap-1 items-center">
          <Image src={logo} alt="footer-logo" />
          <h2 className="uppercase text-2xl">fitlog</h2>
        </div>
        <p className="text-[#9c9c9c] text-center sm:text-start">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </div>
  );
};

export default Footer;
