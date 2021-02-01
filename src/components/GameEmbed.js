export function GameEmbed({ game }) {
  const { name: gameTitle, embed, width, height } = game;

  function getNameName() {
    const pattern = /.*?game=(.*?)&/;
    const [, gameName] = embed.match(pattern);
    return gameName;
  }

  const baseURL = 'https://cdn.htmlgames.com/';
  const url = `${baseURL}/${encodeURIComponent(
    getNameName()
  )}/index.html?bgcolor=transparent&lang=en`;

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-900 w-full rounded-t-lg p-5">
      <iframe
        id={gameTitle}
        title={`Play Game: ${gameTitle}`}
        src={url}
        width={'100%'}
        height={height}
        frameBorder="0"
        style={{ display: 'block' }}
        allowfullscreen={true}
      />
    </div>
  );
}
