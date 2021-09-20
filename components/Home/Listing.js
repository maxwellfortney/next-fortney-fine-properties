import React, { useState } from "react";
import styles from "../../styles/Home/FeaturedListings.module.css";

function Listing({ listing, isMiddle }) {
    const [hoveringListing, setHoveringListing] = useState(false);

    return (
        <div
            onMouseEnter={() => setHoveringListing(true)}
            onMouseLeave={() => setHoveringListing(false)}
            className={`flex h-full flex-col w-full ${
                isMiddle ? "xs:mx-8 xs:my-0 my-3" : ""
            } transition bg-white rounded-xl cursor-pointer shadow-lg ${
                styles["Listing"]
            }`}
            // style={{
            //     maxWidth: "33.3333%",
            // }}
        >
            <div className="relative flex flex-col items-center justify-start">
                <img
                    src={listing?.image}
                    alt="main_listing_photo"
                    className="object-cover w-full transition"
                    style={{
                        height: "25vh",
                        minHeight: "25vh",
                        maxHeight: "25vh",
                    }}
                />
                <div
                    className={`absolute top-0 w-full transition-color opacity-40 ${styles["innerShadowForInfo"]} rounded-t-xl hover:opacity-70 ${styles["fauxImgEle"]}`}
                    style={{
                        height: "25vh",
                        minHeight: "25vh",
                        maxHeight: "25vh",
                    }}
                />
                <div className="absolute flex justify-between w-4/5 top-3">
                    <p className="text-base font-bold text-center text-white">
                        {listing.beds} <span className="font-normal">Bed</span>
                    </p>
                    <p className="text-base font-bold text-center text-white">
                        {listing.beds} <span className="font-normal">Bath</span>
                    </p>
                    <p className="text-base font-bold text-center text-white">
                        {listing.sqFt} <span className="font-normal">SqFt</span>
                    </p>
                </div>
                <p
                    className={`absolute text-2xl transition-all font-bold text-white xl:text-3xl bottom-2 left-2 ${
                        hoveringListing ? "scalePrice" : ""
                    }`}
                >
                    ${listing?.price}
                </p>
                <p
                    className={`absolute right-0 mr-2 text-sm font-bold text-white xs:hidden md:flex bottom-2 ${styles["listingPhotoShowForce"]}`}
                >
                    ({listing?.photoCount} Photos)
                </p>
            </div>
            <div className="block px-3">
                <p className="mt-2 text-base font-semibold lg:text-lg">{`${listing?.street}`}</p>
                <p className="text-sm lg:text-base">{`${listing?.city}, ${listing?.state}, ${listing?.zip}`}</p>
            </div>
            <p className="self-end mt-1 mr-1 text-xs font-semibold text-right limitLineHeight">
                #{listing.listID}
            </p>
            <p className="self-end mb-2 mr-1 text-xs font-semibold text-right limitLineHeight">
                {listing.listingBroker}
            </p>
        </div>
    );
}

export default Listing;
