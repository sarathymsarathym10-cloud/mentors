import React from 'react';
import './about.css';

function About() {
  return (
    <>
    <div className="about-container">
      <h1 className="fade-in">About Our Mentor App</h1>
      <p className="fade-in delay-1">
        Welcome to our Mentor App! Our platform connects students with experienced mentors across
        various fields to guide them in achieving their academic and professional goals.
      </p>

      <div className="features">
        <div className="feature-card slide-up delay-2">
          <h3>Expert Mentors</h3>
          <p>Connect with mentors who have proven experience in their respective domains.</p>
        </div>
        <div className="feature-card slide-up delay-3">
          <h3>Flexible Scheduling</h3>
          <p>Book sessions according to your convenience and manage your learning journey.</p>
        </div>
        <div className="feature-card slide-up delay-4">
          <h3>Interactive Learning</h3>
          <p>Engage in personalized discussions, Q&A, and guidance from mentors.</p>
        </div>
      </div>

      <p className="footer-note fade-in delay-5">
        Join us today and start your journey towards success with the right guidance!
      </p>
    </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>MentorHub</h2>
            <p>Connecting students with experienced mentors to guide career success.</p>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: sarathymsarathym10@gmail.com</p>
            <p>Phone: +91 63807873610</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 MentorHub | All Rights Reserved
        </div>
      </footer>
   </> 
  );
}

export default About;