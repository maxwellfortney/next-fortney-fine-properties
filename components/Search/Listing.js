import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../../styles/Search/Listing.module.css";

function Listing({ listing, useGalleryViewMode }) {
    const [hoveringListing, setHoveringListing] = useState(false);

    useEffect(() => {
        console.log(listing);
    }, []);

    function calcBathString() {
        if (
            listing.property.bathsFull !== null &&
            listing.property.bathsHalf !== null
        ) {
            return `${listing.property.bathsFull}f${listing.property.bathsHalf}h`;
        } else if (
            listing.property.bathsFull !== null &&
            listing.property.bathsHalf === null
        ) {
            return listing.property.bathsFull;
        } else if (
            listing.property.bathsFull === null &&
            listing.property.bathsHalf !== null
        ) {
            return listing.property.bathsHalf;
        }
    }

    if (useGalleryViewMode) {
        return (
            <Link href={`/search/listing/${listing.listingId}`}>
                <a
                    onMouseEnter={() => setHoveringListing(true)}
                    onMouseLeave={() => setHoveringListing(false)}
                    className="relative flex flex-col items-center justify-start transition-all bg-white rounded-md cursor-pointer"
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.07) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px",
                    }}
                >
                    <img
                        src={listing.photos[0]}
                        alt="main_photo"
                        className="top-0 object-cover w-full rounded-t-md"
                        style={{
                            height: "25vh",
                            minHeight: "175px",
                            maxHeight: "25vh",
                        }}
                    />
                    {/* Top Info */}
                    <div className="absolute z-10 flex justify-between w-full px-2 top-2">
                        <p className="font-bold text-white">
                            {listing.property.bedrooms}{" "}
                            <span className="font-normal">Beds</span>
                        </p>
                        <p className="font-bold text-white">
                            {calcBathString()}
                            {` `}
                            <span className="font-normal">Baths</span>
                        </p>
                        <p className="font-bold text-white">
                            {listing.property.area || listing.property.acres}{" "}
                            <span className="font-normal">
                                {listing.property.area ? "SqFt" : "Acres"}
                            </span>
                        </p>
                    </div>

                    <div
                        className="absolute top-0 w-full transition-opacity opacity-40 innerShadowForInfo rounded-t-md hover:opacity-70"
                        style={{
                            height: "25vh",
                            minHeight: "175px",
                            maxHeight: "25vh",
                        }}
                    />

                    <div className="relative flex flex-col w-full px-1 pt-1 pb-2">
                        <p
                            className={`transition-all absolute mb-1 ml-1 text-3xl font-bold text-white bottom-full ${
                                hoveringListing ? `${styles["scalePrice"]}` : ""
                            }`}
                        >
                            {"$" +
                                listing.listPrice
                                    .toString()
                                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                        </p>
                        <p className="absolute right-0 mb-1 mr-1 text-sm font-bold text-white bottom-full">
                            ({listing.totalPhotos} Photos)
                        </p>
                        <p className="mt-2 mb-1 text-xl font-semibold leading-none">
                            {/* {listing.address.streetNumberText}{" "}
                        {listing.address.streetName} */}
                            {listing.address.full}
                        </p>
                        <p>
                            {listing.address.city}, {listing.address.state},{" "}
                            {listing.address.postalCode}
                        </p>
                    </div>
                    <div className="flex flex-col self-end justify-end flex-auto">
                        <p className="self-end mr-1 text-xs font-semibold leading-none">
                            #{listing.listingId}
                        </p>
                        <p className="self-end mb-1 mr-1 text-xs font-semibold leading-none text-right">
                            {listing.office?.name ||
                                "#" + listing.office?.mlsid}
                        </p>
                    </div>
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={`/search/listing/${listing.listingId}`}>
                <a
                    onMouseEnter={() => setHoveringListing(true)}
                    onMouseLeave={() => setHoveringListing(false)}
                    className="relative flex w-full bg-white rounded-md cursor-pointer searchResultListing"
                    style={{ maxHeight: "30vh", minHeight: "225px" }}
                >
                    <img
                        src={listing.photos[0]}
                        alt="main_photo"
                        className="object-cover w-1/3 rounded-l-md"
                        style={{
                            // height: "25vh",
                            minHeight: "225px",
                            maxWidth: "33.3333%",
                            minWidth: "33.3333%",
                        }}
                    />
                    <div
                        className="absolute left-0 flex flex-col justify-between w-full h-full rounded-l-md"
                        style={{
                            // height: "25vh",
                            minHeight: "225px",
                            maxWidth: "33.3333%",
                            minWidth: "33.3333%",
                        }}
                    >
                        <div className="z-10 flex justify-between w-full px-2 mt-2">
                            <p className="font-bold text-white">
                                {listing.property.bedrooms}{" "}
                                <span className="font-normal">Beds</span>
                            </p>
                            <p className="font-bold text-white">
                                {calcBathString()}
                                {` `}
                                <span className="font-normal">Baths</span>
                            </p>
                            <p className="font-bold text-white">
                                {listing.property.area ||
                                    listing.property.acres}{" "}
                                <span className="font-normal">
                                    {listing.property.area ? "SqFt" : "Acres"}
                                </span>
                            </p>
                        </div>
                        <div className="z-10 flex justify-between w-full mb-1">
                            <p
                                className={`transition-all ml-1 md:text-3xl text-2xl font-bold text-white ${
                                    hoveringListing ? "scalePrice" : ""
                                }`}
                            >
                                {"$" +
                                    listing.listPrice
                                        .toString()
                                        .replace(
                                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                                            "$1,"
                                        )}
                            </p>
                            <div className="flex-col items-end justify-end hidden mr-1 md:flex">
                                <p className="text-sm font-bold text-white">
                                    ({listing.totalPhotos} Photos)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute left-0 w-full h-full transition-opacity opacity-40 innerShadowForInfo rounded-l-md hover:opacity-70"
                        style={{
                            // height: "25vh",
                            minHeight: "225px",
                            maxWidth: "33.3333%",
                        }}
                    ></div>
                    <div className="flex flex-col justify-between flex-auto">
                        <div className="flex flex-col pl-4 mt-3">
                            <p className="text-2xl font-semibold md:text-3xl">
                                {listing.address.full}
                            </p>
                            <p className="text-lg">
                                {listing.address.city}, {listing.address.state},{" "}
                                {listing.address.postalCode}
                            </p>
                        </div>
                        <p className="flex items-start justify-center flex-auto w-10/12 pt-2 pb-1 mx-auto overflow-hidden text-left /md:w-3/4">
                            {listing.privateRemarks}
                        </p>
                        <p className="self-end mr-1 text-xs font-semibold">
                            #{listing.listingId}
                        </p>
                        <p className="self-end mb-1.5 mr-1 text-xs font-semibold text-right">
                            {listing.office?.name ||
                                "#" + listing.office?.brokerid}
                        </p>
                    </div>
                </a>
            </Link>
        );
    }
}

export default Listing;
