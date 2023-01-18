import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";

const MusicChartContainer = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((res) => res.json())
      .then((SongData) => setSongs(SongData.feed.entry));
  };
  return <SongList songs={songs} />;
};

export default MusicChartContainer;
