import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4" style={{ color: '#3498db' }}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                <i className="fa fa-user me-2" />
                User Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                required
              />
              <div className="invalid-feedback">{errors.name}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fa fa-envelope me-2" />
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                required
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fa fa-lock me-2" />
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                required
              />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fa fa-lock me-2" />
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                required
              />
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            </div>

            <div className="mb-3">
              <label className="form-label"><i className="fa fa-user me-2" />  Role:</label>
              <div className="form-check">

                <div className=" form-check-inline">
                  <input
                    type="radio"
                    id="userRole"
                    name="role"
                    value="user"
                    checked={formData.role === 'user'}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="userRole" className="form-check-label">User</label>
                </div>&nbsp;&nbsp;&nbsp;
                <div className="form-check-inline">
                  <input
                    type="radio"
                    id="adminRole"
                    name="role"
                    value="admin"
                    checked={formData.role === 'admin'}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="adminRole" className="form-check-label">Admin</label>
                </div>&nbsp;&nbsp;&nbsp;
                <div className="form-check-inline">
                  <input
                    type="radio"
                    id="clientRole"
                    name="role"
                    value="client"
                    checked={formData.role === 'client'}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="clientRole" className="form-check-label">Client</label>
                </div>&nbsp;&nbsp;&nbsp;
              </div>
            </div>

            <div className="mb-3 d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-user me-2" />
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
