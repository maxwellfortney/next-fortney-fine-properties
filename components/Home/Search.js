import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home/Search.module.css";

function Search() {
    const [enteredLocation, setEnteredLocation] = useState("");
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    return (
        <div className="flex flex-col items-center justify-center w-full px-2 py-24 mt-20 rounded-lg bg-ffp-blue">
            <h2 className="text-3xl font-semibold text-center text-white">
                Start searching for your dream home
            </h2>
            <div className="flex flex-auto w-11/12 max-w-full mt-10 lg:w-3/4 h-14">
                <input
                    type="text"
                    className={`flex-auto pl-2 text-sm transition-all bg-white rounded-l-lg rounded-r-none outline-none md:text-base ${styles["searchInput"]}`}
                    placeholder="Location, Zip, Address or MLS ® #"
                    value={enteredLocation}
                    onChange={(e) => setEnteredLocation(e.target.value)}
                />
                <input
                    type="number"
                    className={`w-1/4 pl-2 text-sm transition-all bg-white border-l-2 rounded-none outline-none md:text-base md:w-1/5 ${styles["searchInput"]}`}
                    placeholder="Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    className={`w-1/4 pl-2 text-sm transition-all bg-white border-l-2 rounded-none outline-none md:text-base md:w-1/5 ${styles["searchInput"]}`}
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <Link href="/search">
                    <a className="flex items-center px-2 text-sm font-bold text-white transition-opacity rounded-l-none rounded-r-lg cursor-pointer md:text-base lg:px-4 xl:px-6 bg-ffp-green hover:opacity-80">
                        Search
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Search;
