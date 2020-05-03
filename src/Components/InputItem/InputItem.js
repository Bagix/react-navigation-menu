import React from 'react';

const inputItems = (props) => {
  return(
    <div>
      <input type="text" onChange={props.change} value={props.newItemName}/>
      <button type="button" onClick={props.save}>Save</button>
    </div>
  )
}

export default inputItems;