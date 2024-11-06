"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { use } from "react";

export default function Page(props) {
  const params = use(props.params);
  const productId = params.editproduct;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      let productData = await fetch(
        `http://localhost:3000/api/products/${productId}`
      );
      productData = await productData.json();
      console.log(productData);

      if (productData.success) {
        let message = productData.result;
        setName(message.name);
        setPrice(message.price);
        setColor(message.color);
        setCompany(message.company);
        setCategory(message.category);
      } else {
        alert("Failed to fetch product details");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching product details.");
    }
  };

  return (
    <div className="input">
      <h1>Update Products</h1>
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
      <button className="btn">Update</button>
      <Link href={"/product"}>Go to product List </Link>
    </div>
  );
}
