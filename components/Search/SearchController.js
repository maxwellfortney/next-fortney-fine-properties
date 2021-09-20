import { useContext, useState } from "react";
import { SearchContext } from "../../pages/search";
// import "./BarMenu.css";
import { DebounceInput } from "react-debounce-input";

function SearchController() {
    // Hover, focus, and sort
    const [selectingLocation, setselectingLocation] = useState(false);
    const [hoveringLocation, setHoveringLocation] = useState(false);

    const {
        q,
        setQ,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        beds,
        setBeds,
        baths,
        setBaths,
    } = useContext(SearchContext);

    return (
        <>
            <div className="flex flex-wrap items-center w-full rounded-md sm:shadow-lg sm:flex-nowrap">
                <div
                    className="relative flex items-center h-14"
                    style={{ flexGrow: "4" }}
                >
                    <DebounceInput
                        debounceTimeout={300}
                        className="flex-auto px-1 pl-2 mb-2 font-medium transition-all rounded-md sm:mb-0 sm:border-r-2 sm:border-gray-500 sm:rounded-r-none h-14 sm:rounded-l-md locationInput"
                        // type="text"
                        value={q}
                        onMouseEnter={() => setHoveringLocation(true)}
                        onMouseLeave={() => setHoveringLocation(false)}
                        onFocus={() => setselectingLocation(true)}
                        onBlur={() => setselectingLocation(false)}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Location, Zip, Address or MLS ® #"
                    />
                </div>
                <DebounceInput
                    debounceTimeout={300}
                    className="px-1 mb-2 font-medium transition-all rounded-md sm:mb-0 sm:border-r-2 sm:border-gray-500 sm:rounded-none h-14"
                    style={{ flexGrow: "1" }}
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min price"
                />
                <DebounceInput
                    debounceTimeout={300}
                    className="px-1 font-medium transition-all border-r-2 border-gray-500 rounded-l-md sm:rounded-none h-14"
                    style={{ flexGrow: "1" }}
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max price"
                />
                <DebounceInput
                    debounceTimeout={300}
                    className="px-1 font-medium transition-all border-r-2 border-gray-500 rounded-none h-14"
                    style={{ flexGrow: "1", maxWidth: "15%" }}
                    type="number"
                    min={1}
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    placeholder="Beds"
                />
                <DebounceInput
                    debounceTimeout={300}
                    className="px-1 font-medium transition-all sm:border-r-2 sm:border-gray-500 rounded-r-md sm:rounded-none h-14"
                    style={{ flexGrow: "1", maxWidth: "15%" }}
                    type="number"
                    value={baths}
                    min={1}
                    onChange={(e) => setBaths(e.target.value)}
                    placeholder="Baths"
                />
                <button className="px-4 mt-2 font-medium text-white transition-colors duration-200 rounded-md outline-none sm:mt-0 sm:rounded-l-none h-14 sm:rounded-r-md hover:bg-blue-gray hover:text-black bg-ffp-blue">
                    Advanced
                </button>
            </div>
        </>
    );
}

export default SearchController;
