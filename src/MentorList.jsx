import { useState } from "react";
import "./mentorList.css";

const mentors = [
  { id: 1, name: "Dr. AI", type: "AI", experience: "5 yrs" },
  { id: 2, name: "Dr. Medical", type: "Medical", experience: "8 yrs" },
  { id: 3, name: "Eng. John", type: "Engineering", experience: "6 yrs" },
];

function MentorList({ currentUser }) {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [dateTime, setDateTime] = useState("");

  const confirmBooking = () => {
    if (!dateTime) {
      alert("Please select date & time");
      return;
    }

    if (!currentUser) {
      alert("Please login first");
      return;
    }

    const newBooking = {
      id: Date.now(),
      mentorName: selectedMentor.name,
      date: dateTime,
      status: "pending",
      studentEmail: currentUser.email,
    };

    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    allBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    alert("Booking Confirmed ✅");

    setSelectedMentor(null);
    setDateTime("");
  };

  return (
    <>
    <div className="mentor-container">
      <h2 className="page-title">Available Mentors</h2>

      <div className="mentor-grid">
        {mentors.map((m) => (
          <div key={m.id} className="mentor-card">
            <h3>{m.name}</h3>
            <p>Type: {m.type}</p>
            <p>Experience: {m.experience}</p>

            {!currentUser || currentUser.role !== "student" ? (
              <button onClick={() => alert("Login as Student")}>
                Book Now
              </button>
            ) : (
              <button onClick={() => setSelectedMentor(m)}>
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Booking Popup */}
      {selectedMentor && (
        <div className="popup-overlay">
          <div className="booking-popup">
            <h3>Book {selectedMentor.name}</h3>

            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />

            <div className="popup-buttons">
              <button onClick={confirmBooking}>Confirm</button>
              <button onClick={() => setSelectedMentor(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
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

export default MentorList;