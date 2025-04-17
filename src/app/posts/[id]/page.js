import Link from "next/link";
import { redirect } from "next/navigation";
export default async function Page({ params }) {
    const { id } = await params
    const postsSaves = [1, 3]
    if(postsSaves.includes(Number(id))){
        return (
            <div>
                    <h2>Olá</h2>
                    <p>Você está na página {id}</p>
                    <Link href="/posts">Voltar</Link>
                </div>
            );
        }else{
        redirect("/posts");
        return(
            <div>
                <h2>Not found</h2>
            </div>
        )
    }
};
