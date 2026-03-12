import { useEffect, useState } from "react";
import "./mentordash.css"
import { useNavigate } from "react-router-dom";
function MentorBookings({ currentUser }) {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    if (!currentUser) return;

    let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const mentorBookings = allBookings.filter(
      (b) => b.mentorName === currentUser.name
    );

    // default fake booking card
    const fakeBooking = {
      id: "demo1",
      mentorName: currentUser.name,
      studentEmail: "studentdemo@gmail.com",
      date: "12 Mar 2026",
      time: "10:30 AM",
      status: "accepted"
    };

    if (mentorBookings.length === 0) {
      setBookings([fakeBooking]);
    } else {
      setBookings(mentorBookings);
    }

  }, [currentUser]);


  const updateStatus = (id, status) => {

    let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    allBookings = allBookings.map((b) =>
      b.id === id ? { ...b, status } : b
    );

    localStorage.setItem("bookings", JSON.stringify(allBookings));

    setBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, status } : b
      )
    );
  };


  if (!currentUser || currentUser.role !== "mentor") {
    return <h2>Please Login as Mentor</h2>;
  }


  return (
    <>
    <div className="mentor-booking-container">

      <h2>Student Booking Requests</h2>

      {bookings.length === 0 ? (
        <p>No Booking Requests</p>
      ) : (
        bookings.map((b) => (
          <div key={b.id} className="mentor-booking-card">

            <h3>{b.mentorName}</h3>

            <p>Student: {b.studentEmail}</p>

            <p>Date: {b.date}</p>

            {b.time && <p>Time: {b.time}</p>}

            <p>Status:
              <span className={`status ${b.status}`}>
                {b.status}
              </span>
            </p>

            {b.status === "pending" && (
              <div className="mentor-buttons">

                <button onClick={() => updateStatus(b.id,"accepted")}>
                  Accept
                </button>

                <button onClick={() => updateStatus(b.id,"rejected")}>
                  Reject
                </button>

              </div>
            )}

            {b.status === "accepted" && (
              <button className="chat-btn"  onClick={() => navigate("/chatt")}>
                Start Chat
              </button>
            )}

          </div>
        ))
      )}
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

export default MentorBookings;