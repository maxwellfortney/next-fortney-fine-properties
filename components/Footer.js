import Link from "next/link";
import { useRouter } from "next/router";
// import { Link, useLocation } from "react-router-dom";

// import "./Footer.css";

import styles from "../styles/Footer.module.css";

function isUsingBright(path) {
    if (path === "/about") return false;
    let isValidPath = false;
    const validPaths = ["/", "/buyers", "/search"];
    if (validPaths.includes(path)) {
        isValidPath = true;
    }
    if (path.startsWith("/about/")) isValidPath = true;
    if (path.startsWith("/search")) isValidPath = true;

    return isValidPath;
}

function Footer() {
    const { pathname } = useRouter();

    return (
        <div className="flex flex-col flex-none w-full p-4 bg-white md:pd-8 lg:p-12">
            <div className="flex w-full">
                <div className="flex flex-col items-center justify-center w-1/2">
                    <Link href="/">
                        <a
                            className="w-full md:w-10/12 lg:w-3/4"
                            style={{ maxWidth: "600px" }}
                        >
                            <img
                                src="/logos/ffp.png"
                                className="w-full max-w-full hover:opacity-75 transition-opacity"
                                alt="FortneyFineProperties_logo"
                            />
                        </a>
                    </Link>
                    <a
                        href="mailto:info@fortneyfineproperties.com"
                        className="max-w-full mt-4 text-sm text-center break-words transition-opacity md:text-md hover:opacity-70"
                    >
                        info@fortneyfineproperties.com
                    </a>
                    <a
                        href="tel:7036619000"
                        className="mt-1 text-sm text-center transition-opacity md:text-md hover:opacity-70"
                    >
                        (703)-661-9000
                    </a>
                    <p className="mt-1 mb-3 text-xs text-center md:text-sm">
                        © Copyright 2021 Fortney Fine Properties.
                    </p>
                    <div
                        className={`flex items-center justify-center mt-3 ${styles["SocialMediaFooter"]}`}
                    >
                        <a
                            href="https://www.facebook.com/fortneyfineproperties"
                            className="mr-2"
                        >
                            <img
                                alt="Facebook_logo"
                                src="/logos/facebook.png"
                                className="w-8 md:w-10"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCjMDZmxV3mTLhr0YmIoewpw"
                            className="mr-2"
                        >
                            <img
                                alt="Youtube_logo"
                                src="/logos/youtube.png"
                                className="w-8 md:w-10"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/fortney-fine-properties"
                            className="mr-2"
                        >
                            <img
                                alt="LinkedIn_logo"
                                src="/logos/linkedin.png"
                                className="w-8 md:w-10"
                            />
                        </a>
                        <a href="https://www.pinterest.com/FFProperties/">
                            <img
                                alt="Pinterest_logo"
                                src="/logos/pinterest.png"
                                className="w-8 md:w-10"
                            />
                        </a>
                    </div>
                </div>
                {isUsingBright(pathname) ? (
                    <div className="flex-col items-center justify-center hidden w-2/5 lg:flex">
                        <img
                            src="/logos/bright.svg"
                            alt="BrightMLS_logo"
                            className="w-1/2 mb-2"
                        />
                        <p className="text-sm text-center">
                            © 2021 Bright MLS. All rights reserved. Information
                            Deemed Reliable, but Not Guaranteed. Listing
                            information is from various brokers who participate
                            in IDX and not all listings may be visible on the
                            site. The property information being provided is for
                            consumers personal, non-commercial use and may not
                            be used for any purpose other than to identify
                            prospective properties consumers may be interested
                            in purchasing.
                            <span>
                                {" "}
                                Data last updated on{" "}
                                {(new Date().getMonth() > 8
                                    ? new Date().getMonth() + 1
                                    : "0" + (new Date().getMonth() + 1)) +
                                    "/" +
                                    (new Date().getDate() > 9
                                        ? new Date().getDate()
                                        : "0" + new Date().getDate()) +
                                    "/" +
                                    new Date().getFullYear()}
                                .
                            </span>
                        </p>
                    </div>
                ) : null}
                <div className="flex items-center justify-around w-1/2">
                    <div
                        className={`flex flex-col items-center justify-end ${styles["aLinkContainer"]}`}
                    >
                        <Link href="/">
                            <a className="text-base font-semibold transition-colors">
                                Home
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="my-5 text-base font-semibold transition-colors">
                                About
                            </a>
                        </Link>
                        <Link href="/search">
                            <a className="text-base font-semibold transition-colors">
                                Search
                            </a>
                        </Link>
                    </div>
                    <div
                        className={`flex flex-col items-center justify-center ${styles["aLinkContainer"]}`}
                    >
                        <Link href="/buyers">
                            <a className="text-base font-semibold transition-colors">
                                Buyers
                            </a>
                        </Link>
                        <Link href="/sellers">
                            <a className="my-5 text-base font-semibold transition-colors">
                                Sellers
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="text-base font-semibold transition-colors">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            {isUsingBright(pathname) ? (
                <div className="flex items-center justify-between w-full mt-8 lg:hidden">
                    <img
                        src="/logos/bright.svg"
                        alt="BrightMLS_logo"
                        className="w-1/4 mb-2"
                        style={{ maxWidth: "325px" }}
                    />
                    <p className="text-xs text-center md:text-sm">
                        © 2021 Bright MLS. All rights reserved. Information
                        Deemed Reliable, but Not Guaranteed. Listing information
                        is from various brokers who participate in IDX and not
                        all listings may be visible on the site. The property
                        information being provided is for consumers personal,
                        non-commercial use and may not be used for any purpose
                        other than to identify prospective properties consumers
                        may be interested in purchasing.
                        <span>
                            {" "}
                            Data last updated on{" "}
                            {(new Date().getMonth() > 8
                                ? new Date().getMonth() + 1
                                : "0" + (new Date().getMonth() + 1)) +
                                "/" +
                                (new Date().getDate() > 9
                                    ? new Date().getDate()
                                    : "0" + new Date().getDate()) +
                                "/" +
                                new Date().getFullYear()}
                            .
                        </span>
                    </p>
                </div>
            ) : null}
        </div>
    );
}

export default Footer;
