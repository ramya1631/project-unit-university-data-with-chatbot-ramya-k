import { useState } from "react";
import "./register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration data:", formData);

    // Show success message
    setSuccessMessage(`Welcome, ${formData.name}! Registration complete.`);

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      university: "",
      password: "",
    });

    // Optionally hide the message after some time
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Your Account</h2>

        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="university"
            placeholder="University Name"
            value={formData.university}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;