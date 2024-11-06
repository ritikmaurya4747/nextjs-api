'use client'
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [file,setFile] = useState();

  const onSubmit = async (e) => {
   
    const data = new FormData();
    data.set('file', file);
    let result = await fetch('api/upload',{
      method: 'POST',
      body: data
    });
    result = await result.json();
    // console.log(result);
    if(result.success){
      e.preventDefault();
      alert("Image uploaded successfully!");
    }
    
  }

  return (
    <div className={styles.page}>
      <h1>API Routes Home </h1>
      <Link href={"/addproduct"}>Add Products</Link>
      <Link href={"product"}>Mobile Products List</Link>
      <div>
        <h1>Upload Image</h1>
        <form action="" onSubmit={onSubmit}>
          <input type="file" name="image" onChange={(e)=>setFile(e.target.files?.[0])} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}
