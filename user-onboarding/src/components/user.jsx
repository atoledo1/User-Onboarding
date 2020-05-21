import React from "react";

function User({ information }) {
  if (!information) {
    return <h3> In the process of fetching the user's information</h3>;
  }

  return (
    <div>
      <h3>{information.name}</h3>
      <p>Email: {information.email}</p>
      <p>Password: {information.password}</p>
    </div>
  );
}

export default User;
