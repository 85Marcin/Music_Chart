import React from "react";

const ListItem = ({ song }) => {
  return <li>{song.title.label}</li>;
};

export default ListItem;
