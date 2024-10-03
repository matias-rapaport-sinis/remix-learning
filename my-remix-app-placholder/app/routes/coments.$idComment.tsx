import { Outlet, useParams } from "@remix-run/react";

export default function ComentList(){

    const param = useParams();

    return (
        <div style={{backgroundColor : "orange"}}>
            El comentario numero {param.idComment}
        </div>
    )
}