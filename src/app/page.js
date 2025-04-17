import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/posts">Posts</Link>
      <Link href="/param?q=">Parametros</Link>
      <Link href="/posts/categoria">categoria</Link>
    </div>
  );
}
