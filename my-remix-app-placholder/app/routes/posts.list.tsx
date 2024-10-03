import { useLoaderData } from "@remix-run/react";


export const loader = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    const json = JSON.stringify(data, null, 2);
    // Return the data using the `json` helper
    return json;
};


export default function ListTextComponent(){
    const data = useLoaderData();


    return (
        <pre>
            ESTA ES TU LISTA {data}
        </pre>
    )
}