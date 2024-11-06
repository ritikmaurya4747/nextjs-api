import Link from "next/link";

const getProductList = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  if (data.success) {
    return data.message;
  } else {
    return { success: false };
  }
};
export default async function Page() {
  const products = await getProductList();

  return (
    <div className="input">
      <h1>Mobile Products List</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.color}</td>
              <td>{product.company}</td>
              <td>{product.category}</td>
              <td>
                <Link href={"product/" + product._id}>Edit</Link>
              </td>
              <td>
                <Link href={''}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
