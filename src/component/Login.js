import React, { useState } from 'react';
 import { Link } from 'react-router-dom';

const Login = () => {
  const [loginType, setLoginType] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginTypeChange = (event) => {
    setLoginType(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Login Type: ${loginType}, Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4" style={{ color: '#3498db' }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="radio"
                name="login-type"
                value="user"
                checked={loginType === 'user'}
                onChange={handleLoginTypeChange}
                className="form-check-input"
              />
              <label className="form-check-label">User</label>&nbsp;&nbsp;

              <input
                type="radio"
                name="login-type"
                value="admin"
                checked={loginType === 'admin'}
                onChange={handleLoginTypeChange}
                className="form-check-input"
              />
              <label className="form-check-label">Admin</label>&nbsp;&nbsp;

              <input
                type="radio"
                name="login-type"
                value="client"
                checked={loginType === 'client'}
                onChange={handleLoginTypeChange}
                className="form-check-input"
              />
              <label className="form-check-label">Client</label>&nbsp;&nbsp;
            </div>
            <div className="mb-3">
              <label className="form-label">Username:</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-user" aria-hidden="true"></i></span>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="mb-3 d-grid gap-2">
              <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in-alt" aria-hidden="true"></i> Login</button>
              <Link to="/signup" className='btn btn-secondary'><i className="fa fa-user-plus" aria-hidden="true"></i> Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
