import React from 'react';
import './Item.css';

const item = (props) => {

  let active= false;

  if(props.name === props.currentItem) {
    active = true;
  }

  return(
    <li className={`item ${active ? "active": ''}`} onClick={props.click}>
      {props.name}
    </li>
  )
}

export default item;