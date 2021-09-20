import { useContext, useEffect, useState } from "react";
import Listing from "./Listing";

// import Listing from "./Listing/Listing";
// import "./Results.css";

// export async function getStaticProps(context) {
//     console.log("HEHEHEHEHEH");
//     const router = useRouter();
//     console.log(router);
//     // const { pid } = router.query

//     return {
//         props: {
//             context: "maxwell",
//         },
//     };
// }

import styles from "../../styles/Search/Results.module.css";
import { SearchContext } from "../../pages/search";

const Results = () => {
    const {
        useGalleryViewMode,
        isLoading,
        setIsLoading,
        totalCount,
        setTotalCount,
        page,
        setPage,
        perPage,
        q,
        minPrice,
        maxPrice,
        beds,
        baths,
        sortType,
    } = useContext(SearchContext);

    const [results, setResults] = useState([]);

    function parseSort() {
        switch (sortType.type) {
            case "Price":
                return `${
                    sortType.direction === "ascending" ? "" : "-"
                }listprice`;
            case "Beds":
                return `${sortType.direction === "ascending" ? "" : "-"}beds`;
            case "Baths":
                return `${sortType.direction === "ascending" ? "" : "-"}baths`;
            case "List Date":
                return `${
                    sortType.direction === "ascending" ? "" : "-"
                }listdate`;
            default:
                return `listprice`;
        }
    }

    async function fetchListings(resetPage = false) {
        if (resetPage) {
            setPage(1);
        }
        setIsLoading(true);
        const res = await fetch(
            `/api/listings?page=${resetPage ? 1 : page}&perPage=${perPage}${
                minPrice ? `&minPrice=${minPrice}` : ""
            }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
                beds ? `&beds=${beds}` : ""
            }${baths ? `&baths=${baths}` : ""}${
                sortType ? `&sort=${parseSort()}` : ""
            }${q ? `&q=${q}` : ""}`
        );
        setIsLoading(false);

        if (res.status === 200) {
            const resJson = await res.json();
            console.log(resJson);
            setTotalCount(resJson.totalCount);
            setResults(resJson.results);
        }
    }

    useEffect(() => {
        fetchListings(true);
    }, [q, minPrice, maxPrice, beds, baths, sortType]);

    useEffect(() => {
        fetchListings();
    }, [page]);

    if (totalCount === 0 && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-start w-full mt-2 riseAndFade">
                <p className="text-lg font-bold">No Results</p>
                <p>Try expanding your query</p>
            </div>
        );
    }

    if (useGalleryViewMode) {
        return (
            <div className="flex flex-col items-center justify-start w-full mt-2 riseAndFade">
                <div
                    className="grid w-full gap-6"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gridAutoRows: "auto",
                    }}
                >
                    {results?.length > 0 && !isLoading ? (
                        <>
                            {results.map((listing, i) => {
                                return (
                                    <Listing
                                        listing={listing}
                                        i={i}
                                        useGalleryViewMode={useGalleryViewMode}
                                    />
                                    // <div className=""></div>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {Array(15)
                                .fill(0)
                                .map((x, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center justify-center w-full h-full bg-white rounded-md searchResultListing"
                                            style={{
                                                minHeight: "275px",
                                                height: "28vh",
                                            }}
                                        >
                                            <div
                                                className={`flex w-full bg-gray-300 h-3/5 ${styles["animate-pulse-new"]}`}
                                            ></div>
                                            <div className="flex flex-col justify-between flex-auto w-full p-2">
                                                <div className="flex flex-col">
                                                    <div
                                                        className={`flex w-3/4 h-4 bg-gray-300 rounded-sm ${styles["animate-pulse-new"]}`}
                                                    ></div>
                                                    <div
                                                        className={`flex w-1/2 h-4 mt-2 bg-gray-300 rounded-sm ${styles["animate-pulse-new"]}`}
                                                    ></div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <div
                                                        className={`flex self-end w-1/4 h-2 bg-gray-300 rounded-sm ${styles["animate-pulse-new"]}`}
                                                    ></div>
                                                    <div
                                                        className={`flex self-end w-1/3 h-2 mt-2 bg-gray-300 rounded-sm ${styles["animate-pulse-new"]}`}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-start w-full mt-2 riseAndFade">
                <div
                    className="grid w-full gap-6"
                    style={{
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gridAutoRows: "1fr",
                    }}
                >
                    {results.length > 0 ? (
                        <>
                            {results.map((listing, i) => {
                                return (
                                    <Listing
                                        listing={listing}
                                        i={i}
                                        useGalleryViewMode={useGalleryViewMode}
                                    />
                                    // <div key={i} className="flex bg-red-200">
                                    //     a
                                    // </div>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {Array(8)
                                .fill(0)
                                .map((x, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="flex w-full bg-white rounded-md searchResultListing"
                                            style={{
                                                maxHeight: "30vh",
                                                minHeight: "250px",
                                            }}
                                        >
                                            <div
                                                className={`w-1/3 bg-gray-300 rounded-l-md ${styles["animate-pulse-new"]}`}
                                                style={{
                                                    // height: "25vh",
                                                    minHeight: "250px",
                                                    maxWidth: "33.3333%",
                                                    minWidth: "33.3333%",
                                                }}
                                            />
                                            <div className="relative flex flex-col items-start justify-start flex-auto pl-3">
                                                <div
                                                    className={`flex w-2/5 mt-4 bg-gray-300 rounded-sm h-9 ${styles["animate-pulse-new"]}`}
                                                ></div>
                                                <div
                                                    className={`flex w-1/3 mt-2 bg-gray-300 rounded-sm h-7 ${styles["animate-pulse-new"]}`}
                                                ></div>
                                                <div
                                                    className={`absolute flex w-1/5 h-3 mt-2 bg-gray-300 rounded-sm right-2 ${styles["animate-pulse-new"]}`}
                                                ></div>
                                                <div
                                                    className={`absolute flex w-1/5 h-3 bg-gray-300 rounded-sm bottom-7 right-2 ${styles["animate-pulse-new"]}`}
                                                ></div>
                                                <div
                                                    className={`absolute flex w-1/3 h-3 bg-gray-300 rounded-sm bottom-2 right-2 ${styles["animate-pulse-new"]}`}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </>
                    )}
                </div>
            </div>
        );
    }
};

export default Results;
