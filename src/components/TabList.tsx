import { twJoin, twMerge } from 'tailwind-merge';
import { TabCoins } from '../types/enum';
import starFilledIcon from '../images/star.svg';

interface Props {
  activeTab: TabCoins;
  handleTabChange: (tab: TabCoins) => void;
  className?: string;
}

export const TabList: React.FC<Props> = ({
  activeTab,
  handleTabChange,
  className,
}) => (
  <ul
    className={twMerge(
      'flex justify-between gap-1 bg-primary p-1 text-white *:cursor-pointer',
      className,
    )}
  >
    <li
      className={twJoin(
        'font-600 flex gap-2 rounded-lg p-1 px-2 hover:bg-gray-500',
        TabCoins.FAVORITES === activeTab && 'font-bold',
      )}
      onClick={() => handleTabChange(TabCoins.FAVORITES)}
    >
      <img className="w-5" src={starFilledIcon} alt="Favorite" />
      <button className="text-nowrap">{TabCoins.FAVORITES}</button>
    </li>
    <li
      className={twJoin(
        'font-600 rounded-lg p-1 px-2 hover:bg-gray-500',
        TabCoins.ALL_COINS === activeTab && 'font-bold',
      )}
      onClick={() => handleTabChange(TabCoins.ALL_COINS)}
    >
      <button className="text-nowrap">{TabCoins.ALL_COINS}</button>
    </li>
  </ul>
);
