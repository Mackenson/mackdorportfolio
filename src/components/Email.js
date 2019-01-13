import React from 'react';
import '../css/Input.css';
const Email = (props) => {
  return (
    <div>
        <input
          className="form_field"
          placeholder={props.label}
          name={props.email}
          type='text'
          value={props.email}
          onChange={props.handleEmail}
        />
    </div>
  )
}

export default Email;
