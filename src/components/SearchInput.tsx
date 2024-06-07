import searchIcon from '../images/search.svg';
import { twMerge } from 'tailwind-merge';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  className,
}) => (
  <div
    className={twMerge('flex gap-3 border-b-2 border-gray-700 p-3', className)}
  >
    <img className="aspect-square w-5" src={searchIcon} alt="Search" />
    <input
      type="search"
      placeholder="Search..."
      className="w-full text-white [background:_none]"
      value={value}
      onChange={onChange}
    />
  </div>
);
