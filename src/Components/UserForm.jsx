import axios from "axios";
import React from "react";
import { useState } from "react";

function UserForm({ setLogged }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [dob, setDob] = useState("");

  const submit = async () => {
    if (!name || !email || !phone || !dob) {
      alert("Please enter all fields");
      return;
    }
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    if (!regex.test(email)) {
      alert("invalid email");
      return;
    }

    const birthdate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (age < 18) {
      alert("Age restriction: bellow 18 is not allowed");
      return;
    }

    //save the form in DB
    let data = { name: name, email: email, phone: phone, dob: dob };
    try {
       await axios.post("https://ruby-rails.onrender.com/", data);
    } catch (e) {
      alert(e.response.data.message)
      return;
    }


    //redirect to all users page
    setLogged(true);
  };

  return (
    <div className="userForm">
      <h2>User form</h2>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="mobile"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="date"
        placeholder="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default UserForm;
