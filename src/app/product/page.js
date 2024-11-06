const getProductList = async () => {
    let data = await fetch("http://localhost:3000/api/products");
    data = await data.json();
    if(data.success){
        return data.message;
    }else{
        return {success: false}
    }
}
export default async function Page(){
    const products = await getProductList();
    console.log(products);
    
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
                </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.color}</td>
                                <td>{product.company}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}