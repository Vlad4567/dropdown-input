import Fuse from 'fuse.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocalStorage, useOnClickOutside, useWindowSize } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import searchIcon from '../images/search.svg';
import { Coin } from '../types/coin';
import { SearchInput } from './SearchInput';
import { TabCoins } from '../types/enum';
import { TabList } from './TabList';
import { CoinList } from './CoinList';
import { createPortal } from 'react-dom';

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
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [activeTab, setActiveTab] = useState<TabCoins>(TabCoins.ALL_COINS);
  const [position, setPosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
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

  useEffect(() => {
    setVisibleRange({ start: 0, end: visibleCount });
  }, [isOpen, visibleCount]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleItems = useMemo(() => {
    if (TabCoins.ALL_COINS === activeTab) {
      return filteredCoins.slice(visibleRange.start, visibleRange.end + 1);
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

  useEffect(() => {
    if (dropdownRef.current && dropdownButtonRef.current) {
      const {
        top: topParent,
        left: leftParent,
        bottom: bottomParent,
        right: rightParent,
      } = (dropdownButtonRef.current as HTMLElement).getBoundingClientRect();
      const height = (dropdownRef.current as HTMLElement).offsetHeight;
      const width = (dropdownRef.current as HTMLElement).offsetWidth;
      let x = null;
      let y = null;

      if (windowWidth - leftParent >= width) {
        x = leftParent;
      } else if (rightParent >= width) {
        x = rightParent - width;
      }

      if (windowHeight - bottomParent >= height) {
        y = bottomParent;
      } else if (topParent >= height) {
        y = topParent - height;
      }

      setPosition({ x, y });
    }
  }, [isOpen, dropdownRef, windowWidth, windowHeight]);

  return (
    <>
      <button
        ref={dropdownButtonRef}
        onClick={() => setIsOpen(prev => !prev)}
        className={twMerge(
          `font-600 flex h-fit w-fit items-center justify-center gap-3 rounded-xl p-3 uppercase text-white hover:bg-gray-500`,
          isOpen && 'border-2 border-gray-400 bg-gray-500',
        )}
      >
        <img className="aspect-square w-5" src={searchIcon} alt="Search" />
        Search
      </button>
      {isOpen &&
        createPortal(
          <div
            className={`absolute top-full w-max cursor-default flex-col rounded-lg border-2 border-gray-700`}
            style={{
              left: `${position.x ?? windowWidth / 2}px`,
              top: `${position.y ?? windowHeight / 2}px`,
              transform: `translate(${position.x !== null ? '-0%' : '-50%'}, ${position.y !== null ? '-0%' : '-50%'})`,
            }}
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
          </div>,
          document.body,
        )}
    </>
  );
};
