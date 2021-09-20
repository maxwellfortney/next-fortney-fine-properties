import { useEffect, useState } from "react";
import Listing from "./Listing";
import styles from "../../styles/Home/FeaturedListings.module.css";

function FeaturedListings() {
    // eslint-disable-next-line no-unused-vars
    const [listings, setListings] = useState([
        {
            price: "899,000",
            street: "840 Foxfield Rd",
            city: "Lower Gwynedd",
            state: "PA",
            beds: 4,
            baths: 5,
            listID: "DCDC509524",
            sqFt: "3,393",
            photoCount: 45,
            zip: "19002",
            listingBroker: "CENTURY 21 New Millennium",
            image: "https://bright-media02.prd.brightmls.com/bright/images/0000/8007/2911/7814/800729117814_2048_1536_WM_COaAQ5iabntwpICI.jpg",
        },
        {
            price: "779,000",
            street: "1032 5th St NE",
            city: "Washington",
            state: "DC",
            beds: 3,
            baths: 2,
            listID: "DCDC509956",
            sqFt: "1,400",
            photoCount: 23,
            zip: "20002",
            listingBroker: "Washington Fine Properties, LLC",
            image: "https://bright-media02.prd.brightmls.com/bright/images/0000/3044/3240/7929/304432407929_2048_1536_WM_N_2wRQ9GJjOhJlpJ.jpg",
        },
        {
            price: "800,000",
            street: "309 Alloway Friesburg Rd",
            city: "Alloway",
            state: "NJ",
            beds: 4,
            baths: 5,
            listID: "VAAR173748",
            sqFt: "4,692",
            photoCount: 31,
            zip: "08001",
            listingBroker: "Long & Foster Real Estate, Inc",
            image: "https://bright-media02.prd.brightmls.com/bright/images/0000/3044/1423/6800/304414236800_2048_1536_WM_hgTJCer8_sMoKQ8D.jpg",
        },
    ]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFeaturedListings() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    setLoading(false);
                    resolve();
                }, 1200);
            });
        }

        fetchFeaturedListings();
    }, []);

    return (
        <div className="flex flex-col flex-none w-full p-4 bg-white rounded-lg">
            <h2 className="mb-3 text-lg font-bold">Featured Listings</h2>
            <div
                className={`mb-2 flex xs:flex-row flex-col ${
                    isLoading
                        ? "justify-center items-center"
                        : "justify-between items-start"
                } w-full`}
            >
                {isLoading ? (
                    <div className={`animate-spin ${styles["loader"]}`}></div>
                ) : (
                    <>
                        {listings.length > 0
                            ? listings.map((listing, i) => {
                                  console.log(listing);
                                  return (
                                      <Listing
                                          key={i}
                                          listing={listing}
                                          isMiddle={i === 1}
                                      />
                                  );
                              })
                            : null}
                    </>
                )}
            </div>
        </div>
    );
}

export default FeaturedListings;
