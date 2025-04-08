import Link from "next/link";
import '../globals.css';

export default function MealsPage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'white' }}>Meals Page</h1>
            <p style={{ color: 'yellowgreen' }}>
                <Link className={"link"} href={"/meals/share"}>Share</Link>
            </p>
            <p style={{ color: 'yellowgreen' }}>
                <Link className={"link"} href={"/meals/ref-1"}>ref-1</Link>
            </p>
            <p style={{ color: 'yellowgreen' }}>
                <Link className={"link"} href={"/meals/ref-2"}>ref-2</Link>
            </p>
        </div>
    );
}