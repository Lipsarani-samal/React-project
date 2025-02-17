import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>Time of Birth: {user.tob}</p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
