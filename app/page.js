import Link from "next/link";
import './globals.css';
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p>
            <Link className={"link"} href={"/meals"}>Meals</Link>
        </p>
          <p>
              <Link className={"link"} href={"/meals/share"}>Share Meal</Link>
          </p>
        <p>
            <Link className={"link"} href={"/community"}>Community</Link>
        </p>
      </section>
    </main>
  );
}
