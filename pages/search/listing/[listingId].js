import ListingPage from "../../../components/ListingPage/ListingPage";

export async function getServerSideProps(context) {
    const { listingId } = context.query;

    const res = await fetch(`http://localhost:3000/api/listings/${listingId}`)

    console.log(res)

    if (res.status === 200) {
        return {
            props: {
                property: await res.json()
            }, // will be passed to the page component as props
        }
    } else {
        return {
            notFound: true
        }
    }

}

export default function FullListing({ property }) {
    return (
        <ListingPage property={property} />
    );
};


