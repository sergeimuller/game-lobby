import { useContext, useState } from 'react';
import { ModalContext } from '../context/modalContext';
import { GameEmbed } from './GameEmbed';
import { VideoPreview } from './VideoPreview';

export function GameModal({ game }) {
  let { handleModal } = useContext(ModalContext);
  const { name: gameTitle, youtube, imagePreview, id, description, width, height } = game;
  const [gameIsPlaying, setGameIsPlaying] = useState(false);
  function playGame() {
    setGameIsPlaying(true);
  }

  function closeGame() {
    setGameIsPlaying(false);
    handleModal();
  }

  return gameIsPlaying ? (
    <div className="w-full flex flex-col justify-even rounded-xl bg-white">
      <GameEmbed game={game} />
      <div className="px-5 pb-5">
        <h2 className="my-4 uppercase text-4xl text-purple-900 font-bold leading-none tracking-wide">
          {gameTitle}
        </h2>
        <p className="w-9/12">{description}</p>
        <button
          onClick={closeGame}
          className="mt-4 w-full sm:w-auto flex-none bg-red-500 hover:bg-red-600 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-500 focus:outline-none transition-colors duration-200"
        >
          Close game
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full flex flex-col justify-even rounded-xl bg-white">
      <VideoPreview source={youtube} poster={imagePreview} />
      <div className="px-5 pb-5">
        <h2 className="my-4 uppercase text-4xl text-purple-900 font-bold leading-none tracking-wide">
          {gameTitle}
        </h2>
        <p className="w-9/12">{description}</p>
        <button
          onClick={playGame}
          className="mt-4 w-full sm:w-auto flex-none bg-green-500 hover:bg-green-600 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-500 focus:outline-none transition-colors duration-200"
        >
          Play game
        </button>
      </div>
    </div>
  );
}
