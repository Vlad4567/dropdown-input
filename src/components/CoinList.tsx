import starFilledIcon from '../images/star.svg';
import starIcon from '../images/star-filled.svg';
import { Coin } from '../types/coin';
import { TabCoins } from '../types/enum';

interface Props {
  visibleItems: Coin[];
  visibleRange: { start: number; end: number };
  setOfFavoriteCoins: Set<string>;
  visibleCount: number;
  itemHeight: number;
  activeTab: TabCoins;
  filteredCoins: Coin[];
  favoriteCoins: Coin[];
  handleFavoriteCoin?: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    coin: Coin,
  ) => void;
  coinOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}

export const CoinList: React.FC<Props> = ({
  visibleItems,
  visibleRange,
  setOfFavoriteCoins,
  handleFavoriteCoin = () => {},
  coinOnClick = () => {},
  handleScroll = () => {},
  visibleCount,
  itemHeight,
  activeTab,
  filteredCoins,
  favoriteCoins,
}) => (
  <div
    className="overflow-y-auto bg-primary bg-opacity-50 p-1 backdrop-blur-lg"
    style={{
      height: `${visibleCount * itemHeight}px`,
    }}
    onScroll={handleScroll}
  >
    <div
      className="relative"
      style={{
        height: `${
          (TabCoins.ALL_COINS === activeTab
            ? filteredCoins.length
            : favoriteCoins.length) * itemHeight
        }px`,
      }}
    >
      {visibleItems.map((coin, index) => (
        <button
          key={coin.id}
          onClick={coinOnClick}
          className={`absolute flex w-full items-center gap-2 rounded-md px-2 text-left text-white hover:bg-gray-500`}
          style={{
            top: `${(visibleRange.start + index) * itemHeight}px`,
            height: `${itemHeight}px`,
          }}
        >
          <img
            className="w-5"
            onClick={e => handleFavoriteCoin(e, coin)}
            src={setOfFavoriteCoins.has(coin.id) ? starFilledIcon : starIcon}
            alt="Favorite"
          />
          {coin.name}
        </button>
      ))}
    </div>
  </div>
);
