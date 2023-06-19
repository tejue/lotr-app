import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import { introduction } from "../../lib/data";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const router = useRouter();
  const randomVolume = getRandomElement(volumes);
  const randomVolumePage = randomVolume.slug;

  function handleRandomButtonClick() {
    router.push(`/volumes/${randomVolumePage}`);
  }

  return (
    <>
      <Head>List of LOTR-Volumes</Head>
      <Link href="../">Back to Homepage</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={title}>
            <Link href={`volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleRandomButtonClick}>
        Surprise me with a random Volume
      </button>
    </>
  );
}
