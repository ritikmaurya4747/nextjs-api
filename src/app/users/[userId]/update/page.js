"use client";

import { useEffect, useState } from "react";

export default function Page({ params }) {
  let id = params.userId;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };
  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result.success) {
      alert("User updated successfully");
    } else {
      alert("Failed to update user");
    }
  };
  return (
    <div className="input">
      <h1>Update User Details</h1>
      <input
        type="text"
        placeholder="Update Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Update Age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Update Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="input-field"
      />
      <button className="btn" onClick={updateUser}>
        Update
      </button>
    </div>
  );
}
