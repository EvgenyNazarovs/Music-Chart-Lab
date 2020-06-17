import React from 'react';
import Song from './Song.jsx'

const SongList = ({songs}) => {
  if (songs.length)
    return (
      <div>
        {songs.map((song, i) => (
          <div>
          <Song
            chartPosition={i+1}
            title={song.title.label}
            image={song['im:image'][1]['label']}
            />
            </div>
        ))}
        </div>
  );
  return null;
}
export default SongList;
