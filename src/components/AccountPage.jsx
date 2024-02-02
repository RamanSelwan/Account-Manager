
import React, { useState } from 'react';

function AccountPage({ user, onUpdate }) {
  const [userInfo, setUserInfo] = useState({ ...user });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(userInfo);
    alert('Account information updated successfully.');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <h2>Account Information</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input id="username" name="username" type="text" className="form-control" placeholder="Username" value={userInfo.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email" className="form-control" placeholder="Email" value={userInfo.email} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-warning">Update Account</button>
      </form>
    </div>
  );
}

export default AccountPage;
