import { createContext, useState } from "react";
import Results from "../../components/Search/Results";
import SearchController from "../../components/Search/SearchController";
import SortController from "../../components/Search/SortController";

export const SearchContext = createContext();

const Search = () => {
    const [useGalleryViewMode, setGalleryViewMode] = useState(true);
    const [sortType, setSortType] = useState({
        direction: "ascending",
        type: "Price",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(15);

    //Search vars
    const [q, setQ] = useState();
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [beds, setBeds] = useState();
    const [baths, setBaths] = useState();

    return (
        <SearchContext.Provider
            value={{
                useGalleryViewMode,
                setGalleryViewMode,
                sortType,
                setSortType,
                isLoading,
                setIsLoading,
                totalCount,
                setTotalCount,
                page,
                setPage,
                perPage,
                setPerPage,
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
            }}
        >
            <div className="flex flex-col items-center justify-start w-11/12 mb-64 md:w-10/12 xl:w-9/12 riseAndFade">
                <h2 className="self-start mt-4 mb-4 text-4xl font-bold">
                    Search
                </h2>

                <SearchController />
                <SortController />
                <Results />
                {totalCount === 0 && !isLoading ? null : (
                    <div className="flex w-full justify-between text-lg mt-4">
                        <button
                            disabled={page === 1}
                            className={`flex transition-opacity ${
                                page === 1 ? "opacity-0" : "opacity-100"
                            }`}
                            onClick={() => setPage(page - 1)}
                        >{`< Prev`}</button>
                        <button
                            disabled={page === Math.ceil(totalCount / perPage)}
                            className={`flex transition-opacity ${
                                page === Math.ceil(totalCount / perPage)
                                    ? "opacity-0"
                                    : "opacity-100"
                            }`}
                            onClick={() => setPage(page + 1)}
                        >{`Next >`}</button>
                    </div>
                )}
            </div>
        </SearchContext.Provider>
    );
};

export default Search;
