import React from 'react';
import './UserDetails.css';

const UserDetails = ({ displayName, userImage }) => {
  return (
    <div className="user-details-container">
      {userImage ? (
        <img className="user-image" src={userImage} alt="user" />
      ) : (
        ''
      )}
      <p className="user-name">{displayName}</p>
    </div>
  );
};

export default UserDetails;
