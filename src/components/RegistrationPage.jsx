
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage({ onRegister }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(userInfo);
    navigate('/account'); // Navigate to account page after registration
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <input name="username" type="text" className="form-control" placeholder="Username" value={userInfo.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="email" type="email" className="form-control" placeholder="Email" value={userInfo.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="password" type="password" className="form-control" placeholder="Password" value={userInfo.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
