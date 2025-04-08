export default function MealDetailsPage({params}) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'white' }}>Meal Details</h1>
            <p className={"link"}>{params.slug}</p>
        </div>
    );
}