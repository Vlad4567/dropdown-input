import Fuse from 'fuse.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocalStorage, useOnClickOutside } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import searchIcon from '../images/search.svg';
import { Coin } from '../types/coin';
import { SearchInput } from './SearchInput';
import { TabCoins } from '../types/enum';
import { TabList } from './TabList';
import { CoinList } from './CoinList';

const ITEM_HEIGHT = 35;

interface Props {
  coins: Coin[];
  visibleCount?: number;
  coinOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DropdownInput: React.FC<Props> = ({
  coins,
  visibleCount = 5,
  coinOnClick,
}) => {
  const [query, setQuery] = useState('');
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [isOpen, setIsOpen] = useState(false);
  const [favoriteCoins, setFavoriteCoins] = useLocalStorage<Coin[]>(
    'favoriteCoins',
    [],
  );
  const [activeTab, setActiveTab] = useState<TabCoins>(TabCoins.ALL_COINS);
  const dropdownButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  const fuseCoins = useMemo(
    () =>
      new Fuse(coins, {
        keys: ['name'],
        threshold: 0.3,
      }),
    [coins],
  );

  const setOfFavoriteCoins = useMemo(
    () => new Set(favoriteCoins.map(coin => coin.id)),
    [favoriteCoins],
  );

  const [visibleRange, setVisibleRange] = useState({
    start: 0,
    end: visibleCount,
  });

  useOnClickOutside([dropdownButtonRef, dropdownRef], () => setIsOpen(false));

  useEffect(() => {
    if (query) {
      const result = fuseCoins.search(query).map(({ item }) => item);

      setFilteredCoins(result);
    } else {
      setFilteredCoins(coins);
    }
  }, [query, coins, fuseCoins]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleItems = useMemo(() => {
    if (TabCoins.ALL_COINS === activeTab) {
      return filteredCoins.slice(visibleRange.start, visibleRange.end);
    }

    return favoriteCoins.filter(coin =>
      coin.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [
    activeTab,
    favoriteCoins,
    filteredCoins,
    query,
    visibleRange.end,
    visibleRange.start,
  ]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollTop = event.currentTarget.scrollTop;
    const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
    const endIndex = startIndex + visibleCount;

    setVisibleRange({ start: startIndex, end: endIndex });
  };

  const handleTabChange = useCallback((tab: TabCoins) => {
    setActiveTab(tab);
  }, []);

  const handleFavoriteCoin = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>, coin: Coin) => {
      e.stopPropagation();
      const isFavorite = setOfFavoriteCoins.has(coin.id);

      if (isFavorite) {
        setFavoriteCoins(prevCoins =>
          prevCoins.filter(favoriteCoin => favoriteCoin.id !== coin.id),
        );
      } else {
        setFavoriteCoins([...favoriteCoins, coin]);
      }
    },
    [favoriteCoins, setFavoriteCoins, setOfFavoriteCoins],
  );

  return (
    <div className="relative">
      <button
        ref={dropdownButtonRef}
        onClick={() => setIsOpen(prev => !prev)}
        className={twMerge(
          `font-600 flex items-center justify-center gap-3 rounded-xl p-3 uppercase text-white hover:bg-gray-500`,
          isOpen && 'border-2 border-gray-400 bg-gray-500',
        )}
      >
        <img className="aspect-square w-5" src={searchIcon} alt="Search" />
        Search
      </button>
      {isOpen && (
        <div
          className={`absolute top-full w-max cursor-default flex-col rounded-lg border-2 border-gray-700 bg-primary`}
          ref={dropdownRef}
        >
          <SearchInput value={query} onChange={handleInputChange} />

          <TabList activeTab={activeTab} handleTabChange={handleTabChange} />

          <CoinList
            visibleItems={visibleItems}
            visibleRange={visibleRange}
            setOfFavoriteCoins={setOfFavoriteCoins}
            handleFavoriteCoin={handleFavoriteCoin}
            coinOnClick={coinOnClick}
            handleScroll={handleScroll}
            visibleCount={visibleCount}
            itemHeight={ITEM_HEIGHT}
            favoriteCoins={favoriteCoins}
            filteredCoins={filteredCoins}
            activeTab={activeTab}
          />
        </div>
      )}
    </div>
  );
};
