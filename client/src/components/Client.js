import React from 'react';
import Avatar from 'react-avatar';

function Client({ username, currentUser }) {
  // Check if this avatar belongs to the current user
  const isMe = username === currentUser;

  return (
    <div className="d-flex align-items-center mb-3">
      <Avatar name={username.toString()} size={50} round="14px" className="mr-3" />
      <span className="mx-2">
        {username.toString()} {isMe && <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>(Me)</span>}
      </span>
    </div>
  );
}

export default Client;
