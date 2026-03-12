import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./about";
import MentorList from "./MentorList";
import Student from "./StudentLog";
import Mentor from "./mentor";
import Profile from "./Profile";
import ChatBox from "./chat";
import Chat from "./chatt";
import Bookings from "./booking";
import MentorBookings from "./MentorDashboard";
import Login from "./Login";


function App() {
  
    const [currentUser, setCurrentUser] = useState(null);

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  if (storedUser) {
    setCurrentUser(storedUser);
  }
}, []);
 
  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home  currentUser={currentUser} />} />
        <Route path="/student"element={<Student setCurrentUser={setCurrentUser} />}/>
        <Route path="/student-dashboard" element={<Login currentUser={currentUser}   setCurrentUser={setCurrentUser}  />} />
        <Route path="/mentor" element={<Mentor setCurrentUser={setCurrentUser} />} />
        <Route path="/mentors" element={<MentorList currentUser={currentUser} />} />
        <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/chat" element={<ChatBox currentUser={currentUser} />} />
        <Route path="/booking" element={<Bookings currentUser={currentUser} />} />
        <Route path="/about" element={<About />} />
           <Route path="/chatt" element={<Chat currentUser={currentUser} />} />
        <Route path="/mentor-dashboard" element={currentUser && currentUser.role === "mentor" ? <MentorBookings currentUser={currentUser}  />: <h2>Please login as mentor</h2>} />
      </Routes>
    </>
  );
}

export default App;