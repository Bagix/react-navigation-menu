import React from 'react';
import './InputItem.css';

const inputItems = (props) => {
  return(
    <div className="search-input">
      <input type="text" onChange={props.change} value={props.newItemName}/>
      <button type="button" onClick={props.save} disabled={props.buttonDisabled} title="At least 3 letters">Save</button>
    </div>
  )
}

export default inputItems;