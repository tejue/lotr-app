import { volumes } from "./../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeTwo() {
  const data = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="./">All Volumes</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        <li>
          {data.books[0].ordinal}: {data.books[0].title}
        </li>
        <li>
          {data.books[1].ordinal}: {data.books[1].title}
        </li>
      </ul>
      <Image src={data.cover} width={140} height={230} alt="Bookcover" />
      <p>
        <Link href="the-fellowship-of-the-ring">
          Previous Volume: The Fellowship of the Ring{" "}
        </Link>
      </p>
      <p>
        <Link href="the-return-of-the-king">
          Next Volume: The Return of the King
        </Link>
      </p>
    </>
  );
}
