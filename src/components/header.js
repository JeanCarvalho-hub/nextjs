"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const path = usePathname();
    const router = useRouter();
    function click(){
        router.push("/dashboard");
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/posts" className={`${path === "/posts" ? "active" : " "}`}>Veja os posts</Link>
                </li>
                    <button onClick={click}>dashboard</button>
            </ul>
        </nav>
    );
}