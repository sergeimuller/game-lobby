import { useEffect } from 'react';
import videoPlayer from 'video.js';
import 'videojs-youtube';

export function VideoPreview({ source, poster, id }) {
  useEffect(() => {
    videoPlayer(
      `videoNode-${id}`,
      {
        autoplay: false
      },
      function onPlayerReady() {
        console.log('Your player is ready!');
      }
    );
  }, [id]);

  return (
    <video
      id={`videoNode-${id}`}
      className="video-js vjs-default-skin w-full h-60"
      controls
      preload="auto"
      poster={poster}
      data-setup={JSON.stringify({
        techOrder: ['youtube'],
        sources: [
          { type: 'video/youtube', src: source.replace('youtube.com', 'youtube-nocookie.com') }
        ],
        youtube: { controls: 0, iv_load_policy: 3, modestbranding: 1 }
      })}
    >
      <p className="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        supports HTML5 video
      </p>
    </video>
  );
}
