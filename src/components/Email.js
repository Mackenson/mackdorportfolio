import React from 'react';

const Email = (props) => {
  return (
    <div className="form_field">
      <label>
        {props.label}
      </label>
        <input
          name={props.email}
          type='text'
          value={props.email}
          onChange={props.handleEmail}
        />
    </div>
  )
}

export default Email;
