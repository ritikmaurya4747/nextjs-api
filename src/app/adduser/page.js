"use client";

import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    // console.log(response);
    if(response.success){
        alert("User added successfully!");
      }else{
        alert("Failed to add user!");
  
    }
  };
  return (
    <div>
      <h1>Add New User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="input-field"
      />
      <button onClick={addUser} className="btn">
        Add User
      </button>
    </div>
  );
}
