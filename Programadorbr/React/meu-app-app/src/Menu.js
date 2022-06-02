import React from "react";

function Menu(props) {
  const listLinks = props.links.map((link, i) => <li key={i}>{link}</li>);
  return <ul>{listLinks}</ul>;
}

export default Menu;
