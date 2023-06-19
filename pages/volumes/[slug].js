import { volumes } from "./../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeOne() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const currentVolume = volumes.find((volume) => volumes.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { slug, title, description, cover, book, color } = currentVolume;

  return (
    <>
      <Link href="./">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {books[0].ordinal}: {books[0].title}
        </li>
        <li>
          {books[1].ordinal}: {books[1].title}
        </li>
      </ul>
      <Image src={cover} width={140} height={230} alt="Bookcover" />
      <p>
        <Link href="/volumes">Next Volume</Link>
      </p>
    </>
  );
}
