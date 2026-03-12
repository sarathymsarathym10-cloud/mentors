import "./profile.css";

function Profile({ currentUser }) {
  if (!currentUser) return <h2 className="login-warning">Please log in first</h2>;
    const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <>
    <div className="profile-page">
      <div className="profile-header">
        <img
          src={currentUser.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <h2>{currentUser.name}</h2>
          <p className="role">Role: {currentUser.role}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <h3>Bookings</h3>
          <p>{currentUser.bookings?.length || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Email</h3>
          <p>{currentUser.email}</p>
        </div>
        <div className="stat-card">
          <h3>Joined</h3>
          <p>{currentUser.joined || "N/A"}</p>
        </div>
      </div>

      <div className="profile-actions">
        <button className="edit-btn">Edit Profile</button>
        <button className="logout-btn" onClick={logout} >Log Out</button>
      </div>
        
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

export default Profile;