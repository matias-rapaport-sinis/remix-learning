import { Outlet, useParams } from "@remix-run/react";
import type { LoaderFunctionArgs, LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
 
export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    console.log(params.id);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.idUser}`);
    const data = await response.json();
    console.log(data)
    // Return the data using the `json` helper
    return json({posts : data});
}; 

export default function UserPost() {
    const param = useParams();
    const {posts} = useLoaderData();

    return (
        <div style={{flex : 1, backgroundColor: "green", height: "100%", }}>
            <ul>
                {posts.map((item, index)=>(
                <li> 
                    {item.title} 
                    <Link to={`${item.id}/comments`} > Ver comentarios </Link>
                    {/* <Link to={`/coments/${item.id}`} > Ver comentarios 22 </Link> */}
                </li>

                ))}
            </ul>
            <Outlet />
        </div>
    )
}