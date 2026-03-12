import img1 from "./image/coro.jfif"
import img2 from "./image/coro1.jfif"
import img3 from "./image/cro.jfif"
import img4 from "./image/qqq.webp"
import { useNavigate } from "react-router-dom";
import "./sss.css"

function Home({ currentUser }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="head1">

        <h1 id='head' style={{ fontSize:"50px"}}>
          Welcome {" "}
          <span style={{color:"blue"}}>
            {currentUser?.name || "Guest"}
          </span>
        </h1>

        <div id='nnn'>
          <h2 id='h2'>
          Mentor App is an online platform designed to connect students with experienced  <br />mentors for guidance, learning, and career support. The application provides a simple and user-friendly interface where students can explore mentors, book sessions, and communicate easily.
          </h2>
        </div>

        <div className="paa">
          <h1 className="textx">Guiding Your  <br />Success  Forward</h1>
          <button className="gold-btn"  onClick={() => navigate("/mentors")} >ENTROLL NOW</button> 
        </div>
      </div>

      <div className="carousel-container" style={{backgroundColor:"black"}}>
        <div className="carousel-track">
          <img src={img1} alt="1" />
          <img src={img2} alt="2" /> 
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
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

export default Home;