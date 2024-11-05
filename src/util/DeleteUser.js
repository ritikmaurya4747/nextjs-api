'use client'
export default function DeleteUser(props){
    const userId = props.id;
    console.log(userId);
    const deleteUsers = async () => {
        let result = await fetch(`http://localhost:3000/api/users/${userId}`,
            {
                method: 'DELETE'
            }
        )
        result = await result.json();
        if(result.success){
            alert('User deleted successfully');
        }
    }
    return <button onClick={deleteUsers}>Delete</button>
}