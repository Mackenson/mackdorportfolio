import React from 'react';
import '../css/Name.css';
const Name = (props) => {
  return (
    <div className="name_field">
      <label>
        {props.label}
      </label>
        <input
          name={props.name}
          type='text'
          value={props.name}
          onChange={props.handleNmae}
        />
    </div>
  )
}

export default Name;
