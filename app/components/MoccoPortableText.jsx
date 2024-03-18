import Link from 'next/link';
import { HiCheck } from 'react-icons/hi2';

const { PortableText } = require('next-sanity');

const myPortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl font-heading font-medium text-gray-800">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-heading text-gray-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h2 className="text-lg font-heading font-semibold text-gray-800">
        {children}
      </h2>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-heading text-gray-800">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-md font-body text-gray-600">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-md font-body text-gray-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-none text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-number text-gray-700 ml-5">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li>
        <span className="flex gap-2 items-center">
          <HiCheck className="text-indigo-500 font-bold" />
          {children}
        </span>
      </li>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      return (
        <Link href={value.href} className="duration-100 hover:text-indigo-500">
          {children}
        </Link>
      );
    },
  },
};

export default function MoccoPortableText(props) {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
}
