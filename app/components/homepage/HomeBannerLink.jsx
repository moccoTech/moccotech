import Link from 'next/link';

function HomeBannerLink({ href, children, onClick, scroll }) {
  if (onClick)
    return (
      <button
        onClick={onClick}
        className="font-heading block p-2 hover:px-6 text-gray-700 duration-300 cursor-pointer hover:bg-indigo-500 hover:text-indigo-50 rounded-lg text-2xl font-semibold"
      >
        {children}
      </button>
    );

  return (
    <Link
      href={href}
      scroll={scroll}
      className="font-heading block p-2 hover:px-6 text-gray-700 duration-300 cursor-pointer hover:bg-indigo-500 hover:text-indigo-50 rounded-lg text-2xl font-semibold"
    >
      {children}
    </Link>
  );
}

export default HomeBannerLink;