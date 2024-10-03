import { Outlet } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/react";
import { Link } from "@remix-run/react";

export const loader = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    // Return the data using the `json` helper
    return json({listUsers : data});
};

export default function UserIndex(){
    const {listUsers} = useLoaderData();

    return (
        <main style={{backgroundColor : "red", display : "flex", flexDirection : "row"}}>

            <div style={{flex : 1, display : "flex", flexDirection : "column", height : "100%"}}>
                {listUsers.map((item, index)=>(
                    <Link to={`/users/${item.id}`}> {item.username} </Link>
                ))}
            </div>
            <Outlet />

        </main>
    )
}