import React from "react";
import Link from "next/link";

export default function postsPage(){
    const postsId = [1, 2, 3];
    
    return (
        <div>
            <h2>Postagens</h2>
            <ul>
                {postsId.map(id => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>Ver post {id}</Link>
                    </li>
                ))}
            </ul>
            <Link href="/">voltar</Link>
        </div>
    );
}