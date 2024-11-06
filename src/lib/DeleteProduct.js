'use client'
export default function DeleteProduct(props) {
  const productId = props.id;
  // console.log(productId);
  const deleteRecord = async () => {
    let result = await fetch(`http://localhost:3000/api/products/${productId}`,{
        method: 'DELETE',
    });
    result = await result.json();
    if(result.success){
        alert("Product deleted successfully!");
        window.location.reload();
    } else {
        alert("Failed to delete product!");
    }

  };

  return <button onClick={deleteRecord}>Delete</button>;
}
