import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./booking.css";

function Bookings({ currentUser }) {
const navigate = useNavigate();
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {

    if (!currentUser) return;

    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const filtered = allBookings.filter(
      (b) => b.studentEmail === currentUser.email
    );

    setMyBookings(filtered);

  }, [currentUser]);

  if (!currentUser) {
    return <h2 className="login-msg">Please Login First</h2>;
  }

  return (
    <>
      <div className="booking-container">

        <h2 className="booking-title">My Bookings</h2>

        {/* Default Dummy Mentor Card */}
        <div className="booking-card">
          <h3>Dr. Demo Mentor</h3>
          <p><strong>Date:</strong> Anytime</p>

          <p>
            <strong>Status:</strong>
            <span className="status accepted">Available</span>
          </p>

          <button className="chat-btn" onClick={() => navigate("/chat")}>
            Chat
          </button>
        </div>


        {/* Real Bookings */}
        {myBookings.length === 0 ? (
          <p className="no-booking">No bookings yet.</p>
        ) : (
          myBookings.map((b) => (
            <div key={b.id} className="booking-card">

              <h3>{b.mentorName}</h3>

              <p>
                <strong>Date:</strong> {b.date}
              </p>

              <p>
                <strong>Status:</strong>
                <span className={`status ${b.status}`}>
                  {b.status}
                </span>
              </p>

              <button className="chat-btn">
                Chat
              </button>

            </div>
          ))
        )}

      </div>


      {/* Footer */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-section">
            <h2>MentorHub</h2>
            <p>
              Connecting students with experienced mentors to guide career success.
            </p>
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

export default Bookings;