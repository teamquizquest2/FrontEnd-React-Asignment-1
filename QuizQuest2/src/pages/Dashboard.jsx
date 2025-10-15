import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
       <h1>Welcome Back!</h1>
        <p className="dashboard-subtitle">

          <p>Here’s your quiz performance summary 🎯</p>
        </p>

        <div className="stats-cards">
          <div className="stat-card">
            <h3>Quizzes Taken</h3>
            <p>0</p>
          </div>
          <div className="stat-card">
            <h3>Average Score</h3>
            <p>N/A</p>
          </div>
          <div className="stat-card">
            <h3>Time Spent</h3>
            <p>0m</p>
          </div>
        </div>

        <div className="dashboard-cta">
          <h3>Ready for a New Challenge?</h3>
          <p>Test your knowledge and start your next quiz adventure.</p>
          <Link to="/dashboard/quiz" className="btn-dashboard">
            Start New Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
