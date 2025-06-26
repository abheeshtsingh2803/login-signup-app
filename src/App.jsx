import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={`container ${isRegistering ? 'active' : ''}`}>
      <LoginForm />
      <SignupForm />
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={() => setIsRegistering(true)}>
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Welcome</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={() => setIsRegistering(false)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
