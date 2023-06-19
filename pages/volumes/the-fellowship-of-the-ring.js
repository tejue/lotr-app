import { volumes } from "./../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeOne() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

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
        <Link href="the-two-towers">Next Volume: The Two Towers</Link>
      </p>
    </>
  );
}
