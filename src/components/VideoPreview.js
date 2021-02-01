import { useEffect } from 'react';
import videoPlayer from 'video.js';
import 'videojs-youtube';

export function VideoPreview({ source, poster }) {
  useEffect(() => {
    if (source) {
      videoPlayer(`videoNode`, {
        autoplay: false
      });
    }
  }, [source]);

  if (!source) return null;

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-900 w-full rounded-t-lg p-5">
      <video
        id={`videoNode`}
        className="video-js vjs-default-skin w-full md:w-5/12 h-56 bg-transparent"
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
    </div>
  );
}
