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
        <div>
          <Link href={`/users/${user.id}`}>Name: {user.name}</Link>
        </div>
      ))}
    </div>
  );
}
