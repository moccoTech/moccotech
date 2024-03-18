import Link from 'next/link';

import FooterLink from './FooterLink';
import Logo from '../Logo';

function FooterBottom() {
  let date = new Date().getFullYear();
  return (
    <div className="py-5 px-4 md:px-12 bg-gray-50">
      <div className="flex flex-col gap-4 md:grid sm:grid-cols-2 mb-5">
        <ul className="flex flex-col gap-2 sm:flex-row sm:gap-5 items-center text-gray-600">
          <li>
            <FooterLink href="/about">About us</FooterLink>
          </li>
          <li>
            <FooterLink href="/projects">Latest Projects</FooterLink>
          </li>
          <li>
            <FooterLink href="/services">Services</FooterLink>
          </li>
          <li>
            <FooterLink href="/contact">Contact us</FooterLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 sm:flex-row sm:gap-5 items-center md:justify-end text-gray-600">
          <li>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
          </li>
        </ul>
      </div>
      <div className="font-body flex flex-col-reverse items-center gap-3 sm:grid sm:grid-cols-2 sm:items-center">
        <Logo />
        <p className="justify-self-end text-gray-600">© Copyright {date}</p>
      </div>
    </div>
  );
}

export default FooterBottom;
