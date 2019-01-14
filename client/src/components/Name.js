import React from 'react';
import '../css/Input.css';
const Name = (props) => {
  return (
    <div>
      <input
          className="form_field"
          placeholder={props.label}
          name={props.name}
          type='text'
          value={props.name}
          onChange={props.handleName}
        />
    </div>
  )
}

export default Name;
