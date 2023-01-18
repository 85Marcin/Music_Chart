import React from "react";
import ListItem from "./ListItem";

const SongList = ({ songs }) => {
  const SongItems = songs.map((song, index) => {
    return <ListItem song={song} key={index} />;
  });
  return (
    <div>
      <ol>{SongItems}</ol>
    </div>
  );
};
export default SongList;
