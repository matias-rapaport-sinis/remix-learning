import {
    Links,
    Link,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useParams,
} from "@remix-run/react";
import type { LoaderFunctionArgs, LinksFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { list } from "postcss";

// 1. Define the loader function
export const loader = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    //const listPost = JSON.stringify(data, null, 2);
    // Return the data using the `json` helper
    return json({listPost : data});
};


export default function Layout({ children }: { children: React.ReactNode }) {

    const {listPost} = useLoaderData<typeof loader>();
    return (
        <main lang="en" style={{display : "flex", flexDirection : "column"}}>
            <div style={{flexGrow : 1}}>

            <pre>{listPost.map((item)=>(<p>{item.id}</p>))}</pre>
            </div>
        
        <Outlet />
        </main>
    );
}
