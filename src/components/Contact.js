import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputForm = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value);
    setUserDetails({ ...userDetails, [name]: value });
  };
  const submitDetails = async (e) => {
    e.preventDefault();
    const { username, email, phone, message } = userDetails;
    const res = await fetch(
      "https://my-portfolio-6c149-default-rtdb.asia-southeast1.firebasedatabase.app/myportfolio.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          phone,
          message,
        }),
      }
    );
    if (res) {
      setUserDetails({
        username: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("submitted successfully😃");
    }
  };

  return (
    <div className="contact_area">
      <div className="contact_container">
        <h2 className="contact_header">Get In Touch</h2>
        <form method="POST">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input_field"
              id="name"
              name="username"
              value={userDetails.username}
              onChange={inputForm}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input_field"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={inputForm}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Mobile no"
              className="input_field"
              id="mobile"
              name="phone"
              value={userDetails.phone}
              onChange={inputForm}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Write Your Message"
              className="input_field"
              id="message"
              name="message"
              value={userDetails.message}
              onChange={inputForm}
              required
            />
          </div>
          <div className="btn_submit">
            <button
              type="submit"
              className="submit_contact"
              id="btn_id"
              onClick={submitDetails}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
