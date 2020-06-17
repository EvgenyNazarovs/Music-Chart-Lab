import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList.jsx';
import '../App.css'

const ChartContainer = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongsData = async () => {
      const response = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
      const result = await response.json();
      setSongs(result.feed.entry);
    }
    getSongsData();
  }, []);


  return (
    <>
    <p>LATEST TOP 20</p>
    <SongList
        songs={songs}/>
        </>
  )
}

export default ChartContainer
