import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const json = await res.json();
      setUsers(json.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetUsers = () => {
    fetchUsers();
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar__brand">
          <img
            src={require("./Microsoft.jpg")}
            alt="Brand Logo"
            className="navbar__logo"
          />
          <span className="navbar__brand-name"></span>
        </div>
        <button className="navbar__button" onClick={handleGetUsers}>
          Get Users
        </button>
      </nav>
      <div className="user-grid">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <>
            <div className="user-row">
              {users.slice(0, 2).map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
            <div className="user-row">
              {users.slice(2, 4).map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
            <div className="user-row">
              {users.slice(4, 6).map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt="User Avatar" className="user-card__image" />
      <p>
        <strong>
          {user.first_name} {user.last_name}
        </strong>
      </p>
      <p>{user.email}</p>
    </div>
  );
};

export default App;
