import React from 'react';

const Message = (props) => {
  return (
    <div className="form_field">
      <label>
        {props.label}
      </label>
        <textarea
          name={props.message}
          type='text'
          value={props.message}
          onChange={props.handleMessage}
        />
    </div>
  )
}

export default Message;
