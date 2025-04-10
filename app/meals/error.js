'use client';
export default function Error({error}) {
    return (
        <main className={"error"}>
            <p>An error occurred!</p>
            <p>Failed to fetch meal data. Please try again later</p>
        </main>
    );
}