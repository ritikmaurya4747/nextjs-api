"use client";

import { useState } from "react";


export default function Page() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [color,setColor] = useState("");
    const [company,setCompany] = useState("");
    const [category,setCategory] = useState("");
    const addProduct = async () => {
        let result = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})
        })
        result = await result.json();
        if(result.success) {
            alert("Product added successfully!");
        }else{
            alert("Failed to add product!");
        }
    }
  return (
    <div className="input">
      <h1>Add Products in Database</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Product Color"
        onChange={(e) => setColor(e.target.value)}
        value={color}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Product Compony"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Product Category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="input-field"
      />
      <button onClick={addProduct} className="btn">
        Add User
      </button>
    </div>
  );
}
