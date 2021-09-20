const login = "simplyrets";
const password = "simplyrets";

export default async (req, res) => {
    const { page, perPage, q, minPrice, maxPrice, beds, baths, sort } =
        req.query;
    console.log(req.query);

    // const results = await fetch(
    //     `https://api.simplyrets.com/properties?status=Active${
    //         sort ? `&sort=${sort}` : "&sort=listprice"
    //     }&count=true&limit=${perPage}&offset=${(page - 1) * perPage}${
    //         minPrice ? `&minprice=${minPrice}` : ""
    //     }${maxPrice ? `&maxprice=${maxPrice}` : ""}${
    //         beds ? `&minbeds=${beds}&maxbeds=${beds}` : ""
    //     }${baths ? `&minbaths=${baths}&maxbaths=${baths}` : ""}${
    //         q ? `&q=${q}` : ""
    //     }`,
    //     {
    //         headers: new Headers({
    //             Authorization: `Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz`,
    //         }),
    //     }
    // );

    const results = await fetch(
        `http://localhost:3001/api/properties?${sort ? `&sort=${sort}` : "&sort=listprice"
        }&count=true&limit=${perPage}&offset=${(page - 1) * perPage}${minPrice ? `&minprice=${minPrice}` : ""
        }${maxPrice ? `&maxprice=${maxPrice}` : ""}${beds ? `&minbeds=${beds}&maxbeds=${beds}` : ""
        }${baths ? `&minbaths=${baths}&maxbaths=${baths}` : ""}${q ? `&q=${q}` : ""
        }`
    );

    // console.log(results);

    // if (!results.ok && results.status !== 200) {
    //     res.status(res.status).json(await results.json());
    // } else if (results.status === 200) {
    //     res.status(res.status).json(await results.json());
    // }

    // console.log(await results.json());
    // console.log(results.ok);
    // console.log(results.status);

    // console.log(results.headers.get("X-Total-Count"));

    const resultsJson = await results.json();

    res.status(results.status).json({
        results: resultsJson.listings,
        totalCount: resultsJson.totalCount,
    });
};
