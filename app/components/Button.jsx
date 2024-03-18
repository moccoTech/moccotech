import Link from 'next/link';

function Button({ children, type, to, onClick, scrollTo, external }) {
  const base =
    'font-body w-fit px-6 py-1 duration-200 rounded-lg border hover:bg-transparent';
  const styles = {
    primary:
      base +
      ' bg-indigo-500 border-indigo-500 text-indigo-50 hover:text-indigo-500 font-medium',
    secondary:
      base +
      ' bg-indigo-50 text-indigo-500 font-semibold py-2 hover:text-indigo-50',
    bold:
      base +
      ' bg-indigo-500 border-indigo-500 text-indigo-50 hover:text-indigo-500 font-medium uppercase tracking-wide py-2',
    plane:
      base +
      'bg-transparent border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-indigo-50 ',
    inverse:
      base +
      ' bg-white border-indigo-500 text-indigo-500 font-medium hover:text-indigo-50 hover:bg-indigo-400 hover:border-indigo-400',
  };

  if (to)
    return (
      <Link href={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  if (external)
    return (
      <a href={external} className={styles[type]} target="_blank">
        {children}
      </a>
    );

  if (scrollTo)
    return (
      <Link href={scrollTo} className={styles[type]}>
        {children}
      </Link>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
