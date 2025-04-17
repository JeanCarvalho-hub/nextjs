import Link from "next/link";

export default function Categoria(){
    const produtos = ['pizza de calabresa', 'pizza de queijo', 'pizza de frango'];
    return(
        <ul>
            {produtos.map(p => (
                <li key={p}>
                    <Link href={`./categoria/${p.replace(/ /g, "-")}`}>{p}</Link>
                </li>
            ))}
        </ul>
    );
}