import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';
import "./login.css"


function Login() {
  const navigate = useNavigate();
  return (
    <div id="back">
      <div id="part">
        <h1 id="h11">Welcome to <br /> Mentor & Student portal</h1>
        <p>Connect-Learn-Grow Together</p>
        <button id="student" onClick={() => navigate("/student")}>Student Login</button>
        <button id="mentor" onClick={() => navigate("/mentor")}>Mentor Login</button>
      </div>
    </div>
  );
}

export default Login;