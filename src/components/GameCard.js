//import { VideoPreview } from './VideoPreview';
import { useContext } from 'react';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { ModalContext } from '../context/modalContext';
import { GameModal } from './GameModal';

export function GameCard(props) {
  const {
    game,
    id,
    game: { name: gameTitle, description, thumb3, thumb4, thumb5 /* youtube */ }
  } = props;
  const { handleModal } = useContext(ModalContext);
  const imagePreview = thumb5 || thumb4 || thumb3;

  return (
    <article
      className="flex flex-col items-stretch overflow-hidden rounded-lg shadow-lg game-card transform transition duration-500 hover:scale-110 cursor-pointer"
      onClick={() => handleModal(<GameModal game={{ ...game, id, imagePreview }} />)}
    >
      <img
        alt={gameTitle}
        className="flex-none block object-cover object-top max-h-32 w-full"
        src={imagePreview}
      />
      <header className="flex-none leading-tight p-2 pt-4 md:px-4">
        <h1 className="text-md text-white">{gameTitle}</h1>
      </header>
      <div className="flex-none flex items-start leading-none px-2 mt-2 mb-6 md:px-4 max-h-32 overflow-hidden">
        <p className="text-grey-darker text-xs ">{description}</p>
      </div>
      <footer className="hidden flex flex-grow flex-col w-full self-end justify-end leading-none px-2 md:px-4 mb-4 bg-green">
        <button
          onClick={(event) => {
            event.stopPropagation();
            console.log('button click');
          }}
          class="flex inline-block text-sm font-semibold p-3 text-center text-white transition bg-blue-700 rounded-full shadow hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          <IoHeartOutline />
        </button>
      </footer>
    </article>
  );
}
