import { Outlet, useParams } from "@remix-run/react";
import type { LoaderFunctionArgs, LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    console.log(params.id);
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.idPost}`);
    const data = await response.json();
    // Return the data using the `json` helper
    return json({comments : data});
}; 


export default function CommentsPost(){
    const {comments} = useLoaderData();


    return (
        <div style={{backgroundColor : "purple"}}>
            Estos son sus cometarios 
            {comments.map((comment)=>(
                <pre>
                    {comment.body}
                    <Link to={`/coments/${comment.id}`} > Ver comentarios 22 </Link>
                </pre>
            ))}
                
        </div>
    )
}