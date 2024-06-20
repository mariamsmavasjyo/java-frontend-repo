import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; 


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    serverError: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value.trim() === '') {
          errorMessage = 'This field is required';
        }
        break;
      case 'email':
        if (!value.trim().toLowerCase().endsWith('@gmail.com')) {
          errorMessage = 'Email must be a valid Gmail address';
        }
        break;
      case 'mobileNumber':
        if (!/^[6-9]\d{9}$/.test(value)) {
          errorMessage = 'Mobile number must start with 6, 7, 8, or 9 and have 10 digits';
        }
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (hasErrors) {
      console.log('Form has errors');
      return;
    }

    axios
      .post('http://localhost:8080/student/register', formData)
      .then((response) => {
        console.log(response.data);
        alert('Successfully registered');
        navigate('/OtpVerify');
      })
      .catch((error) => {
        console.error(error);
        setErrors({ ...errors, serverError: 'An error occurred. Please try again later.' });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 nss">
            <div className="card-body">
              <h3 className="card-title text-center">Registration Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-danger">{errors.firstName}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-danger">{errors.lastName}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-danger">{errors.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-danger">{errors.mobileNumber}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-danger">{errors.serverError}</div>
                <button type="submit" className="nss btn btn-primary btn-block">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
