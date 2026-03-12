import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./st.css";

function Student({ setCurrentUser }) {

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
 const handleSubmitSign = () => {

  if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
    setMessage("❌ Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("students"));

  // 🔥 Force array format
  if (!Array.isArray(users)) {
    users = [];
  }

  const existingUser = users.find(
    (u) => u.email.toLowerCase() === form.email.toLowerCase()
  );

  if (existingUser) {
    setMessage("⚠️ User already registered!");
    return;
  }

  const newUser = {
    name: form.name,
    email: form.email,
    password: form.password,
    role: "student"
  };

  users.push(newUser);

  localStorage.setItem("students", JSON.stringify(users));

  console.log("All Users:", users);

  setMessage("✅ Registered Successfully!");
  setForm({ name: "", email: "", password: "" });

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

    const users = JSON.parse(localStorage.getItem("students")) || [];

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === form.email.toLowerCase() &&
        u.password === form.password
    );

    if (user) {

      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);

      setMessage("✅ Login Successful! Redirecting...");
      setTimeout(() => {
        navigate("/",{ replace: true });   
      }, 2000);

    } else {
      setMessage("❌ Invalid Email or Password");
    }
  };


  return (
    <div className="container1">
      <div className="from">

        <h1>
          {change === "login" ? "Student Login" : "Student Register"}
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
          <button onClick={handleSubmitSign}>Sign Up</button>
        ) : (
          <button onClick={handleSubmitLog}>Log In</button>
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

export default Student;