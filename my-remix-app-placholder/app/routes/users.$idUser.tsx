import { Outlet, useParams } from "@remix-run/react";
import type { LoaderFunctionArgs, LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    console.log(params.id);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.idUser}`);
    const data = await response.json();
    // Return the data using the `json` helper
    return json({ user: data });
};

export default function UserDetail() {
    const param = useParams();
    const { user } = useLoaderData();

    return (
        <>
            <div style={{flex : 1, backgroundColor: "skyblue", height: "100%", }}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <Link to={`posts/`} > ver posts</Link>
            </div>
            <Outlet />
        </>
    )
}