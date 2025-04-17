"use client";
import { useSearchParams } from "next/navigation";
//para query
export default function PageParamns(){
    const search = useSearchParams().get("q");
    return(
        <div>
            <h2>Parametros</h2>
            <p>Resultado: {search}</p>
        </div>
        
    );
}