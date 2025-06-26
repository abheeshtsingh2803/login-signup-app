import React from 'react';

const SignupForm = () => {
  return (
    <div className="form-box register">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Signup</h1>
        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" required />
          <i className="bx bxs-contact"></i>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default SignupForm;
