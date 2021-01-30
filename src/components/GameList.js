import { GameCard } from './GameCard';
export function GameList({ games }) {
  if (!games) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 xl:gap-8">
      {games?.map((game, index) => (
        <GameCard key={index} id={index} game={game} />
      ))}
    </div>
  );
}
