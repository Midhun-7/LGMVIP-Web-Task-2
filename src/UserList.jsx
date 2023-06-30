import React from "react";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h1>Hello ReqRes users!</h1>
      <div className="flex">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="user-card__image"
              />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
