import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>The Lord of the Rings-App</h1>
      <p>
        <Link href="./volumes">Show all Volumes</Link>
      </p>
    </div>
  );
}
