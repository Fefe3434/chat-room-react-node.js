import React from 'react';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages = [], name = '' }) => (
<div className="messagesContainer">
  {messages.map((message, i) => (
    <div key={i}>
      <Message message={message} name={name} />
    </div>
  ))}
</div>
);

export default Messages;