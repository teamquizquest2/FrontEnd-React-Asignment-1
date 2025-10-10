import React from "react";
import "./LoginPage.css"; // if you prefer external styling

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Welcome Back</h2>
        

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btnn">Login</button>

          <p className="signup-link">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
