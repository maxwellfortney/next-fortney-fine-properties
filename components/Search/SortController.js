import { useContext, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import AutosizeInput from "react-input-autosize";
import { SearchContext } from "../../pages/search";

import styles from "../../styles/Search/Search.module.css";

function SortController() {
    const [showSortMenu, setShowSortMenu] = useState(false);

    const {
        page,
        setPage,
        perPage,
        useGalleryViewMode,
        setGalleryViewMode,
        sortType,
        setSortType,
        isLoading,
        totalCount,
    } = useContext(SearchContext);

    const availableSorts = [
        "Price",
        "List Date",
        // "Acres",
        // "SqFt",
        "Beds",
        "Baths",
    ];

    return (
        <div className="flex items-start justify-between w-full mt-2">
            <div className="flex items-center p-2">
                <button
                    className={`outline-none flex items-center mr-2 opacity-40 transition-opacity hover:opacity-100 ${
                        useGalleryViewMode ? "opacity-100" : ""
                    }`}
                    onClick={() => setGalleryViewMode(true)}
                >
                    <svg
                        className="h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <p className="ml-1 text-base font-medium">Gallery</p>
                </button>
                <button
                    className={`outline-none flex items-center opacity-40 transition-opacity hover:opacity-100 ${
                        !useGalleryViewMode ? "opacity-100" : ""
                    }`}
                    onClick={() => setGalleryViewMode(false)}
                >
                    <svg
                        className="h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <p className="ml-1 text-base font-medium ">List</p>
                </button>
                {totalCount !== null && !isLoading ? (
                    <p className="self-start pt-0.5 pl-4 text-sm font-semibold">
                        {totalCount} Results
                    </p>
                ) : (
                    <div
                        className={`w-5 h-5 m-0 ml-4 border-2 ${styles["loader"]} animate-spin`}
                    />
                )}
            </div>

            <div className="flex items-center">
                {/* Pagination */}
                <div className="flex items-center mr-1">
                    <svg
                        disabled={page === 1}
                        onClick={() =>
                            page === 1 ? setPage(page) : setPage(page - 1)
                        }
                        className={`w-6 h-6 transition-opacity ${
                            page === 1
                                ? "opacity-0"
                                : "hover:opacity-100 cursor-pointer opacity-50"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <div className="flex items-center text-sm font-semibold">
                        <AutosizeInput
                            type="number"
                            max={Math.ceil(totalCount / perPage)}
                            min={1}
                            interval={1}
                            onChange={(e) => setPage(e.target.value)}
                            value={page}
                            className="bg-blue-gray"
                        />
                        <p>{`of ${Math.ceil(totalCount / perPage)}`}</p>
                    </div>
                    <svg
                        disabled={page === Math.ceil(totalCount / perPage)}
                        onClick={() =>
                            page === Math.ceil(totalCount / perPage)
                                ? setPage(page)
                                : setPage(page + 1)
                        }
                        className={`w-6 h-6 transition-opacity ${
                            page === Math.ceil(totalCount / perPage)
                                ? "opacity-0"
                                : "hover:opacity-100 cursor-pointer opacity-50"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
                {/* Sort Type */}
                <button
                    className={`relative flex flex-col items-center text-black justify-center p-2 transition-all rounded-md outline-none hover:bg-ffp-green hover:text-white ${
                        showSortMenu ? "bg-ffp-green text-white" : ""
                    }`}
                    onClick={() => setShowSortMenu(!showSortMenu)}
                >
                    <div className="flex items-center justify-end w-full text-base font-semibold sortTypeField">
                        {sortType.type}
                    </div>
                    {showSortMenu && (
                        <div
                            className="absolute right-0 flex flex-col items-center justify-center mt-1 bg-gray-300 rounded-md top-full flex-nowrap"
                            style={{ zIndex: "1" }}
                        >
                            {availableSorts.map((type) => {
                                if (type === sortType.type) return null;
                                return (
                                    <p
                                        key={type}
                                        className="transition-all w-full px-2 py-1.5 overflow-hidden text-base font-semibold rounded-md flex-nowrap whitespace-nowrap hover:bg-ffp-green hover:text-white text-black"
                                        onClick={() =>
                                            setSortType({
                                                type,
                                                direction: sortType.direction,
                                            })
                                        }
                                    >
                                        {type}
                                    </p>
                                );
                            })}
                        </div>
                    )}
                </button>
                {/* Sort Direction */}
                <button
                    className="relative flex flex-col items-center justify-center p-2 transition-all rounded-md outline-none hover:bg-ffp-green hover:text-white"
                    onClick={() =>
                        setSortType({
                            type: sortType.type,
                            direction:
                                sortType.direction === "ascending"
                                    ? "descending"
                                    : "ascending",
                        })
                    }
                >
                    <div className="flex items-center justify-end w-full text-base font-semibold sortTypeField">
                        {sortType.direction === "ascending" ? (
                            <div>&#8595;</div>
                        ) : (
                            <div>&#8593;</div>
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default SortController;
