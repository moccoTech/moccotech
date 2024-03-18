import Link from 'next/link';

function StyledNavLink({ href, children, setIsMenuActive }) {
  if (setIsMenuActive && href) {
    return (
      <Link
        href={href}
        onClick={(e) => {
          e.preventDefault;
          setIsMenuActive(!e);
        }}
        className="font-heading block p-2 hover:px-6 text-gray-700 duration-300 cursor-pointer hover:bg-indigo-500 hover:text-indigo-50 rounded-lg text-2xl font-semibold"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="font-heading block p-2 hover:px-6 text-gray-700 duration-300 cursor-pointer hover:bg-indigo-500 hover:text-indigo-50 rounded-lg text-2xl font-semibold"
    >
      {children}
    </Link>
  );
}

export default StyledNavLink;
