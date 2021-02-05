import { useEffect, useReducer } from 'react';
import { GameCard } from './GameCard';
import { Pagination } from './Pagination';

const initialState = {
  currentPage: 1,
  gamesData: [],
  currentGames: [],
  totalPages: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return { ...state, gamesData: action.payload };
    case 'paginate':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function GameList({ games }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (games && state.gamesData.length === 0) {
      dispatch({ type: 'init', payload: games });
    }
  }, [games, state.gamesData]);

  function onPageChanged(data) {
    const { gamesData } = state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentGames = gamesData.slice(offset, offset + pageLimit);
    dispatch({ type: 'paginate', payload: { currentPage, currentGames, totalPages } });
  }

  const { gamesData, currentGames, currentPage, totalPages } = state;
  const totalGames = gamesData.length;
  if (totalGames === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 xl:gap-8">
        {currentGames.map((game, index) => (
          <GameCard key={index} id={index} game={game} />
        ))}
      </div>
      <div className="flex justify-center align-center">
        <Pagination
          totalRecords={totalGames}
          pageLimit={20}
          pageNeighbours={1}
          onPageChanged={onPageChanged}
        />
      </div>
    </>
  );
}
