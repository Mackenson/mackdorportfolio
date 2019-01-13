import React from 'react';
import '../css/Input.css';
const Message = (props) => {
  return (
    <div>
        <textarea
          className="message_field"
          placeholder={props.label}
          name={props.message}
          type='text'
          value={props.message}
          onChange={props.handleMessage}
        />
    </div>
  )
}

export default Message;
