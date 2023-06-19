import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "./../../lib/data";
import Head from "next/head";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;
  //const currentVolume = volumes.find((volume) => volume.slug === slug);

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
      <Image src={cover} width={140} height={230} alt={`Bookcover: ${title}`} />
      <p>
        {previousVolume ? (
          <button type="button">
            <Link href={`/volumes/${previousVolume.slug}`}>
              Previous volume: {previousVolume.title}
            </Link>
          </button>
        ) : null}
        {nextVolume ? (
          <button type="button">
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next volume: {nextVolume.title}
            </Link>
          </button>
        ) : null}
      </p>
    </>
  );
}
