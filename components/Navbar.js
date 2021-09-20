import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const [openNavOverlay, setHamburgerState] = useState(false);

    const { pathname } = useRouter();

    return (
        <>
            <div
                className={`absolute z-10 flex flex-col items-center justify-between ${
                    styles["navOverlay"]
                } ${openNavOverlay && "left-0"}`}
                style={{
                    width: "100vw",
                    padding: "10vh 0",
                    height: "calc(100vh - 115px)",
                    backgroundColor: "#f1f1f1",
                    top: "115px",
                }}
            >
                <Link href="/">
                    <a
                        className={`text-base font-semibold transition-all ${
                            pathname === "/" && "text-black"
                        }`}
                        onClick={() => {
                            document.documentElement.classList.toggle(
                                "overflow-hidden"
                            );
                            setHamburgerState(false);
                        }}
                    >
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a
                        className={`text-base font-semibold transition-all ${
                            pathname.includes("/about") && "text-black"
                        }`}
                        onClick={() => {
                            document.documentElement.classList.toggle(
                                "overflow-hidden"
                            );
                            setHamburgerState(false);
                        }}
                    >
                        About
                    </a>
                </Link>
                <Link href="/search">
                    <a
                        className={`text-base font-semibold transition-all ${
                            pathname === "/search" && "text-black"
                        }`}
                        onClick={() => {
                            document.documentElement.classList.toggle(
                                "overflow-hidden"
                            );
                            setHamburgerState(false);
                        }}
                    >
                        Search
                    </a>
                </Link>
                <Link href="/buyers">
                    <a
                        className={`text-base font-semibold transition-all ${
                            pathname === "/buyers" && "text-black"
                        }`}
                        onClick={() => {
                            document.documentElement.classList.toggle(
                                "overflow-hidden"
                            );
                            setHamburgerState(false);
                        }}
                    >
                        Buyers
                    </a>
                </Link>
                <Link href="/sellers">
                    <a
                        className={`text-base font-semibold transition-all ${
                            pathname === "/sellers" && "text-black"
                        }`}
                        onClick={() => {
                            document.documentElement.classList.toggle(
                                "overflow-hidden"
                            );
                            setHamburgerState(false);
                        }}
                    >
                        Sellers
                    </a>
                </Link>
                <Link href="/contact">
                    <a
                        className={`text-base font-semibold transition-all ${
                            pathname === "/contact" && "text-black"
                        }`}
                        onClick={() => {
                            document.documentElement.classList.toggle(
                                "overflow-hidden"
                            );
                            setHamburgerState(false);
                        }}
                    >
                        Contact
                    </a>
                </Link>
            </div>
            <div
                className="flex items-center justify-between w-11/12"
                style={{
                    height: "115px",
                    minHeight: "115px",
                    maxHeight: "115px",
                }}
            >
                <Link href="/">
                    <a>
                        <img
                            src="/logos/ffp.png"
                            alt="FortneyFineProperties logo"
                            className="h-12 md:h-16 flex-none max-h-full hover:opacity-75 transition-opacity"
                        />
                    </a>
                </Link>
                <div
                    className={`flex items-center justify-end ${styles["NavbarLinksContainer"]}`}
                >
                    <button
                        className={`hidden z-10 hamburger hamburger--collapse ${
                            openNavOverlay && "is-active"
                        }`}
                        type="button"
                        onClick={() => {
                            document.documentElement.classList.toggle(
                                "overflow-hidden"
                            );
                            setHamburgerState(!openNavOverlay);
                        }}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <span className={`transition-all ${styles["hideOnSmall"]}`}>
                        <Link href="/about">
                            <a
                                className={`text-base font-semibold ${
                                    styles["navLink"]
                                } transition-all ${
                                    pathname.includes("/about") && "text-black"
                                }`}
                            >
                                About
                            </a>
                        </Link>
                        <Link href="/search">
                            <a
                                className={`text-base font-semibold ${
                                    styles["navLink"]
                                } transition-all ${
                                    pathname === "/search" && "text-black"
                                }`}
                            >
                                Search
                            </a>
                        </Link>
                        <Link href="/buyers">
                            <a
                                className={`text-base font-semibold ${
                                    styles["navLink"]
                                } transition-all ${
                                    pathname === "/buyers" && "text-black"
                                }`}
                            >
                                Buyers
                            </a>
                        </Link>
                        <Link href="/sellers">
                            <a
                                className={`text-base font-semibold ${
                                    styles["navLink"]
                                } transition-all ${
                                    pathname === "/sellers" && "text-black"
                                }`}
                            >
                                Sellers
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="px-8 text-base font-semibold text-white transition-all rounded-md bg-ffp-blue hover:bg-ffp-green">
                                Contact
                            </a>
                        </Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Navbar;
