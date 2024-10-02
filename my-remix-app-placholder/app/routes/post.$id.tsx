import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
} from "@remix-run/react";
import type { LoaderFunctionArgs, LinksFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// 1. Define the loader function
export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  console.log(params.id);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await response.json();
  const json = JSON.stringify(data, null, 2);
  // Return the data using the `json` helper
  return json;
};


export default function Layout({ children }: { children: React.ReactNode }) {
  const param = useParams();

  const data = useLoaderData();
  return (
    <main lang="en">
        <h2> Aca estas {param.id} </h2>
        <pre> {data}</pre>

    </main>
  );
}
/* 
export default function App() {
  return <Outlet />;
} */
