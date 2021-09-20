/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ExteriorFeatures from "./ExteriorFeatures";
// import InteriorFeatures from "./InteriorFeatures";

// import "./ListingPage.css";
// import LocationInfo from "./LocationInfo";
// import MapLocation from "./MapLocation";
// import SellerDescription from "./SellerDescription";

function ListingPage({ property }) {
    //Handle hovering
    const [hoveringListDate, setHoveringListDate] = useState(false);
    const [hoveringContractStatus, setHoveringContractStatus] = useState(false);
    const [hoveringMainImage, setHoveringMainImage] = useState(false);
    const [hoveringPrevImageButton, setHoveringPrevImageButton] = useState(
        false
    );
    const [hoveringNextImageButton, setHoveringNextImageButton] = useState(
        false
    );

    //Handle image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function calcDaysOnMarket() {
        return parseInt(
            (Date.now() -
                new Date(
                    property !== null
                        ? property.listDate
                        : undefined
                ).getTime()) /
            (1000 * 3600 * 24)
        ).toFixed(0);
    }

    function handleClickNext() {
        console.log(currentImageIndex + 1);
        document.getElementById("scrollingGallery").scroll({
            top: 0,
            left: 116.44 * (currentImageIndex + 1),
            behavior: "smooth",
        });
        setCurrentImageIndex(currentImageIndex + 1);
    }

    function handleClickPrev() {
        console.log(currentImageIndex - 1);
        document.getElementById("scrollingGallery").scroll({
            top: 0,
            left: 116.44 * (currentImageIndex - 1),
            behavior: "smooth",
        });
        setCurrentImageIndex(currentImageIndex - 1);
    }

    return (
        <div className="flex flex-col items-center justify-start w-11/12 mb-64 md:w-10/12 xl:w-9/12 riseAndFade">
            {property !== null ? (
                <>
                    <div className="flex flex-col items-center justify-start w-11/12 md:w-10/12 lg:w-9/12 xl:w-2/3 2xl:w-3/5">
                        <div className="flex items-end justify-between w-full">
                            <p className="text-4xl font-bold">
                                {property !== null
                                    ? "$" + property.listPrice.toString()
                                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                                    : null}
                            </p>
                            <div className="flex items-center justify-end">
                                <a
                                    href="null"
                                    className="text-xs font-semibold text-center transition-colors cursor-pointer md:text-sm hover:text-ffp-blue"
                                >
                                    Schedule Showing
                                </a>

                                {property.virtualTourUrl
                                    .length > 0 ? (
                                    <>
                                        <p className="mx-1">|</p>
                                        <a
                                            href="null"
                                            className="text-xs font-semibold text-center transition-colors cursor-pointer md:text-sm hover:text-ffp-blue"
                                        >
                                            Virtual Tour
                                        </a>
                                    </>
                                ) : null}
                                <p className="mx-1">|</p>
                                <a
                                    href={`/search/${property.listingID}/print`}
                                    className="text-xs font-semibold text-center transition-colors cursor-pointer md:text-sm hover:text-ffp-blue"
                                >
                                    Printable Flyer
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-start w-11/12 md:w-10/12 lg:w-9/12 xl:w-2/3 2xl:w-3/5">
                        {property.photos.length > 0 ? (
                            <img
                                src={property.photos[currentImageIndex]}
                                style={{
                                    minHeight: "450px",
                                    maxHeight: "40vh",
                                }}
                                alt="main_listing_photo"
                                className="object-cover w-full rounded-md shadow-xl cardShadow"
                                onMouseEnter={() => setHoveringMainImage(true)}
                                onMouseLeave={() => setHoveringMainImage(false)}
                            />
                        ) : (
                            <div className="loader" />
                        )}
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`cursor-pointer absolute left-0 h-8 transition-opacity text-white opacity-20 duration-200 ${hoveringMainImage ? "opacity-80" : ""
                                } ${hoveringPrevImageButton ? "opacity-100" : ""}`}
                            style={{ top: "50%" }}
                            onMouseEnter={() =>
                                setHoveringPrevImageButton(true)
                            }
                            onMouseLeave={() =>
                                setHoveringPrevImageButton(false)
                            }
                            onClick={(e) =>
                                currentImageIndex > 0
                                    ? handleClickPrev(e)
                                    : null
                            }
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`cursor-pointer absolute right-0 h-8 transition-opacity text-white opacity-20 duration-200 ${hoveringMainImage ? "opacity-80" : ""
                                } ${hoveringNextImageButton ? "opacity-100" : ""}`}
                            style={{ top: "50%" }}
                            onMouseEnter={() =>
                                setHoveringNextImageButton(true)
                            }
                            onMouseLeave={() =>
                                setHoveringNextImageButton(false)
                            }
                            onClick={(e) =>
                                currentImageIndex < property.photos.length - 1
                                    ? handleClickNext(e)
                                    : null
                            }
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <div className="absolute flex left-2 top-2">
                            <div
                                className="relative p-1.5 rounded-md text-xs font-bold"
                                style={{ zIndex: "1" }}
                                onMouseEnter={() =>
                                    setHoveringContractStatus(true)
                                }
                                onMouseLeave={() =>
                                    setHoveringContractStatus(false)
                                }
                            >
                                <div
                                    className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-opacity duration-200 bg-white rounded-md opacity-70 hover:opacity-100 ${hoveringContractStatus
                                        ? "opacity-100"
                                        : ""
                                        }`}
                                    style={{ zIndex: "-1" }}
                                />
                                {property !== null
                                    ? property.mls.status
                                    : null}
                            </div>
                            <div
                                className="relative ml-2 p-1.5 rounded-md text-xs font-bold"
                                style={{ zIndex: "1" }}
                                onMouseEnter={() => setHoveringListDate(true)}
                                onMouseLeave={() => setHoveringListDate(false)}
                            >
                                <div
                                    className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-opacity bg-white rounded-md opacity-70 hover:opacity-100 ${hoveringListDate ? "opacity-100" : ""
                                        }`}
                                    style={{ zIndex: "-1" }}
                                />
                                {calcDaysOnMarket()} Days On Market
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-start w-11/12 mt-2 md:w-10/12 lg:w-9/12 xl:w-2/3 2xl:w-3/5">
                        <div
                            id="scrollingGallery"
                            className="flex items-center w-full px-3 overflow-x-auto overflow-y-hidden bg-white rounded-md shadow-xl cardShadow scrollablePhotosContainer h-28"
                        >
                            {property.photos.length > 0 ? (
                                property.photos.map((x, i) => {
                                    return (
                                        <img
                                            key={i}
                                            className={`transition-all border-2 border-white opacity-80 mr-2 rounded-md h-5/6 cursor-pointer ${i === currentImageIndex
                                                ? " border-ffp-green opacity-100"
                                                : ""
                                                }`}
                                            onClick={(e) => {
                                                setCurrentImageIndex(i);
                                                e.target.parentElement.scroll({
                                                    top: 0,
                                                    left: 116.44 * i,
                                                    behavior: "smooth",
                                                });
                                            }}
                                            alt="listing_sub_photo"
                                            src={x}
                                        />
                                    );
                                })
                            ) : (
                                <div className="loader" />
                            )}
                        </div>
                    </div>
                    {/* <div className="relative flex flex-col items-center justify-start w-11/12 md:w-10/12 lg:w-9/12 xl:w-2/3 2xl:w-3/5">
                        {listing !== null ? (
                            <>
                                <SellerDescription listing={listing} />
                                <InteriorFeatures listing={listing} />
                                <ExteriorFeatures listing={listing} />
                                <LocationInfo listing={listing} />
                                {listing.LocationGIS.Latitude &&
                                    listing.LocationGIS.Longitude ? (
                                    <MapLocation listing={listing} />
                                ) : null}
                            </>
                        ) : null}
                    </div> */}
                </>
            ) : (
                <div className="loader" />
            )}
        </div>
    );
}
export default ListingPage;
