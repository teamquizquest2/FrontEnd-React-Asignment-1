import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">Create Your <span>QuizApp</span> Account</h2>
        
        <form className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter password" required />
          </div>

          <button type="submit" className="btn-signup">Sign Up</button>

          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
