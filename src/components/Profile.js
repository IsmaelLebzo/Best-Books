import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
  console.log(user);
  return <div>
      <img src={user.picture} alt = "img" />
      <h3>UserName: {user.name}</h3>
      <br></br>
      <h1>User Email: {user.email}</h1>
  </div>;
}

export default Profile;