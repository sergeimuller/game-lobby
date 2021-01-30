function FeatureDescriptions(featuredGames) {
  return (
    <div className="flex">
      <div className="description"></div>
      <div class="icons"></div>
    </div>
  );
}

export function FeatureList({ featuredGames }) {
  return (
    <div className="grid grid-cols-3 gap-6 h-48">
      <div className="bg-blue col-span-2">dasdas</div>
      <div className="bg-red">
        <FeatureDescriptions {...featuredGames} />
      </div>
    </div>
  );
}
