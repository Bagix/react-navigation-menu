import React from 'react';

const item = (props) => {

  let active= false;

  if(props.name === props.currentItem) {
    active = true;
  }

  return(
    <li className={active ? "active": ''} onClick={props.click}>
      {props.name}
    </li>
  )
}

export default item;