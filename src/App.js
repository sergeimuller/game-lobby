import './App.css';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getFeaturedGames } from './utils/getFeaturedGames';
import { GameList } from './components/GameList';
import { FeatureList } from './components/FeatureList';

function App() {
  const [featuredGames, setFeaturedGames] = useState();
  const [games, setGames] = useState();

  const { isLoading, error, data } = useQuery('gameData', () =>
    fetch('/data/htmlgames.json').then((res) => res.json())
  );

  useEffect(() => {
    const [gamesToFeature, otherGames] = getFeaturedGames(data);
    setFeaturedGames(gamesToFeature);
    setGames(otherGames);
  }, [data]);

  if (isLoading) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="py-4 font-sans antialiased text-gray-900">
      <div className="max-w-7xl mx-auto p-4 rounded-3xl lobby-wrap">
        <div className="p-4 rounded-2xl lobby">
          <FeatureList featuredGames={featuredGames} />
          <GameList games={games} />
        </div>
      </div>
    </div>
  );
}

export default App;
