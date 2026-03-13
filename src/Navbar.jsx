import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import logo from "./assets/logo.png";

function Navbar({ currentUser, setCurrentUser }) {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // ✅ state inside component

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div id="navbar">
      <nav>

        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* 📱 Hamburger */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`listss ${menuOpen ? "show" : ""}`}>

          {/* 🔓 Not Login */}
          {!currentUser && (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/mentors">Mentor</Link>

              <button
                className="btn"
                onClick={() => navigate("/student-dashboard")}
              >
                Login
              </button>
            </>
          )}

          {/* 👨‍🎓 Student Login */}
          {currentUser && currentUser.role === "student" && (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/mentors">Mentor</Link>
              <Link to="/booking">Booking</Link>

              <img
                src={currentUser.profilePic || "https://via.placeholder.com/40"}
                alt="profile"
                className="profile"
                onClick={() => navigate("/profile")}
              />

              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          )}

          {/* 👨‍🏫 Mentor Login */}
          {currentUser && currentUser.role === "mentor" && (
            <>
              <Link to="/mentor-dashboard">Booking Section</Link>

              <img
                src={currentUser.profilePic || "https://via.placeholder.com/40"}
                alt="mentor profile"
                className="profile"
                onClick={() => navigate("/mentor-profile")}
              />

              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          )}

        </div>

      </nav>
    </div>
  );
}

export default Navbar;