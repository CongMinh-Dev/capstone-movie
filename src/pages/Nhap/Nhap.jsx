import React, { useState } from 'react'
import YouTube from 'react-youtube';

const Nhap = () => {
  const [videoURL, setVideoURL] = useState('');
  const [videoID, setVideoID] = useState('');


  const handlePlayClick = () => {
    const videoID = getVideoIDFromURL(videoURL);

    if (videoID) {
      setVideoID(videoID);
    } else {
      alert('URL video không hợp lệ!');
    }
  };

  const getVideoIDFromURL = (url) => {
    const regex =/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=))([^\?&]+)/;
    const match = url.match(regex);
    return match && match[1];
  };


  return (
    <div>
      <input
        type="text"
        value={videoURL}
        onChange={(e) => setVideoURL(e.target.value)}
        placeholder="Nhập URL video YouTube"
      />
      <button onClick={handlePlayClick}>Play Video</button>
      {videoID && (
        <YouTube
          videoId={videoID}
          // autoplay={true}
          muted={true}
          controls={true}
          width="640"
          height="360"
        />
      )}
    </div>
  );
}

export default Nhap
