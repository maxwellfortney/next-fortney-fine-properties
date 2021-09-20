export default async (req, res) => {
    const { listingId } =
        req.query;

    const apiRes = await fetch(`http://localhost:3001/api/properties/${listingId}`)

    res.status(apiRes.status).json(await apiRes.json())
};
