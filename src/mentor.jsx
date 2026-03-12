import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./met.css";

function Mentor({ setCurrentUser }) {

  const [change, setChange] = useState("login");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getStoredMentor = () => {
    const stored = localStorage.getItem("mentors");
    return stored ? JSON.parse(stored) : [];
  };

  // ================= REGISTER =================

  const handleSubmitSign = () => {

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setMessage("❌ Fill all fields");
      return;
    }

    const mentors = getStoredMentor();

    const existingUser = mentors.find(
      (u) => u.email.toLowerCase() === form.email.toLowerCase()
    );

    if (existingUser) {
      setMessage("⚠️ Mentor already registered!");
      return;
    }

    const newMentor = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: "mentor"
    };

    mentors.push(newMentor);

    localStorage.setItem("mentors", JSON.stringify(mentors));

    setMessage("✅ Registered Successfully!");

    setForm({
      name: "",
      email: "",
      password: ""
    });

    // register apram login page
    setTimeout(() => {
      setChange("login");
      setMessage("");
    }, 1500);
  };

  // ================= LOGIN =================

  const handleSubmitLog = () => {

    if (!form.email.trim() || !form.password.trim()) {
      setMessage("❌ Enter Email and Password");
      return;
    }

    const mentors = getStoredMentor();

    const user = mentors.find(
      (u) =>
        u.email.toLowerCase() === form.email.toLowerCase() &&
        u.password === form.password
    );

    if (user) {

      localStorage.setItem("currentUser", JSON.stringify(user));

      setCurrentUser(user);

      setMessage("✅ Login Successful!");

      setTimeout(() => {
        navigate("/mentor-dashboard");   // dashboard open
      }, 1500);

    } else {
      setMessage("❌ Invalid Email or Password");
    }
  };

  return (
    <div className="container">

      <div className="from">

        <h1>
          {change === "login" ? "Mentor Login" : "Mentor Register"}
        </h1>

        <div className="input">

          {change === "register" && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

        </div>

        {message && <p>{message}</p>}

        {change === "register" ? (
          <button onClick={handleSubmitSign}>
            Sign Up
          </button>
        ) : (
          <button onClick={handleSubmitLog}>
            Log In
          </button>
        )}

        <p>
          {change === "register" ? (
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => {
                setChange("login");
                setMessage("");
              }}
            >
              Already have account? Log in
            </span>
          ) : (
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => {
                setChange("register");
                setMessage("");
              }}
            >
              Don't have account? Sign up
            </span>
          )}
        </p>

      </div>

    </div>
  );
}

export default Mentor;