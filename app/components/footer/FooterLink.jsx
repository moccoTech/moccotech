import Link from 'next/link';

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="footer-link hover:text-indigo-500 duration-300 font-body"
    >
      {children}
    </Link>
  );
}

export default FooterLink;
