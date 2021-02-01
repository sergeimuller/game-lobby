import { useContext, useState } from 'react';
import { ModalContext } from '../context/modalContext';
import { GameModal } from './GameModal';

export function FeatureList({ featuredGames }) {
  const [activeGame, setActiveGame] = useState(0);
  const { handleModal } = useContext(ModalContext);
  if (!featuredGames) return null;
  const { name: gameTitle, thumb5, thumb4, thumb3, description } = featuredGames[activeGame];
  const imagePreview = thumb5 || thumb4 || thumb3;

  return (
    <div className="grid grid-cols-1 gap-6 mb-6">
      <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl">
        <div className="relative md:w-2/5 w-full h-60 md:h-full  overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={imagePreview}
            alt=""
          />
        </div>
        <div className="w-full md:w-3/5 md:h-full flex items-center bg-gray-100 rounded-lg">
          <div className="p-4 md:pr-24 md:pl-16 md:py-12 w-full">
            <h2 className="group flex whitespace-pre-wrap font-bold text-2xl mb-4">{gameTitle}</h2>
            <p className="text-gray-600">
              <span className="text-gray-900">{description}</span>
            </p>
            <button
              className="mt-6 rounded bg-purple-700 text-purple-100 text-sm font-semibold  px-2 h-8"
              onClick={() =>
                handleModal(
                  <GameModal
                    game={{ ...featuredGames[activeGame], id: activeGame, imagePreview }}
                  />
                )
              }
            >
              Open {gameTitle}
            </button>
            <FeatureButtons
              games={featuredGames}
              currentItem={activeGame}
              onClick={(index) => {
                setActiveGame(index);
              }}
            />
          </div>
          <FeatureNavigation
            navLength={featuredGames.length}
            currentItem={activeGame}
            onClick={(index) => {
              setActiveGame(index);
            }}
          />
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeatureButtons({ games, currentItem, onClick }) {
  return (
    <div className="flex items-center pt-5 justify-between">
      {games.map((game, index) => {
        const { name: gameTitle, thumb1 } = game;
        const isActive = currentItem === index;
        return (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={`px-2 ${
              isActive ? 'opacity-100 disabled cursor-default' : 'opacity-75'
            } hover:opacity-100 focus:opacity-100`}
          >
            <img
              src={thumb1}
              alt={gameTitle}
              className={`max-h-20 w-full rounded-xl p-1 lobby-wrap transform transition duration-500 hover:scale-110 ${
                isActive ? 'scale-110' : ''
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

function FeatureNavigation(props) {
  const { currentItem, navLength, onClick } = props;

  function handleNextItem() {
    const nextItem = currentItem + 1 > navLength - 1 ? 0 : currentItem + 1;
    onClick(nextItem);
  }

  function handlePrevItem() {
    const prevItem = currentItem - 1 < 0 ? navLength - 1 : currentItem - 1;
    onClick(prevItem);
  }

  return (
    <>
      <button
        className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline"
        onClick={handlePrevItem}
      >
        <span className="block transform rotate-180">&#x279c;</span>
      </button>
      <button
        className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline"
        onClick={handleNextItem}
      >
        <span className="block">&#x279c;</span>
      </button>
    </>
  );
}
