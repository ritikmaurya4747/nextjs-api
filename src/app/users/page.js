import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}
export default async function Page() {
  const users = await getUsers();
  // console.log(users);
  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <div className="user-list">
          <span><Link href={`/users/${user.id}`}>Name: {user.name}</Link></span>
          <span><Link href={`/users/${user.id}/update`}>Edit</Link></span>
          <DeleteUser/>
        </div>
      ))}
    </div>
  );
}
