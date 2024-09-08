import { Link } from 'react-router-dom';
interface Props {
  children?: React.ReactNode;
  to?: string;
  type?: 'primary' | 'small' | 'round' | 'secondary' | 'delete' | 'cate';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
function Button({ children, type, onClick, to }: Props) {
  const base =
    'inline-block text-sm rounded-md bg-green-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' text-xs px-1 py-2 sm:px-5 sm:py-2.5',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm rounded-md px-2 py-2.5 sm:px-3 sm:py-3.5 border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed',
    delete:
      'inline-block text-xs rounded-md bg-red-500  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed px-1 py-2 sm:px-5 sm:py-2.5',
    cate: 'inline-block rounded-md text-xs bg-stone-200 px-1 py-2 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-500 focus:bg-stone-500 focus:outline-none focus:ring focus:ring-stone-500 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-5 sm:py-2.5',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
