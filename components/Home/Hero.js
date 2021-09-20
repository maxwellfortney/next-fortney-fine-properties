import { useEffect, useState } from "react";

import Link from "next/link";

import styles from "../../styles/Home/Hero.module.css";

const Hero = () => {
    const [mainLink, setMainLink] = useState("/sellers");

    // Typing Effect
    const words = ["List your house", "Find your home", "Get in touch"];
    const links = ["/sellers", "/search", "/contact"];
    let i = 0;
    let timer, timer2;

    function typingEffect() {
        let word = words[i].split("");
        setMainLink(links[i]);
        var loopTyping = function () {
            if (word.length > 0) {
                try {
                    document.getElementById("text").innerHTML += word.shift();
                } catch (e) {
                    //null
                }
            } else {
                timer2 = setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 125);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function () {
            if (word.length > 0) {
                word.pop();
                const text = document.getElementById("text");
                if (text) {
                    text.innerHTML = word.join("");
                } else {
                    return;
                }
            } else {
                if (words.length > i + 1) {
                    i++;
                } else {
                    i = 0;
                }
                typingEffect();
                return false;
            }
            timer = setTimeout(loopDeleting, 150);
        };
        loopDeleting();
    }

    useEffect(() => {
        typingEffect();
        return function cleanup() {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full pt-12 xs:flex-row">
            <div className="flex flex-col items-center justify-center w-11/12 xs:items-start xs:w-1/2 md:pr-12">
                <h1
                    className={`bg-gradient-to-br to-ffp-green from-ffp-blue bg-clip-text text-transparent font-black text-center xs:text-left ${styles["homeMainTitle"]}`}
                >
                    We've got this!
                </h1>
                <h2
                    className={`py-2 text-lg text-left xl:py-6 font-regular ${styles["homeSubTitle"]}`}
                >
                    Local, independent real estate brokerage firm providing
                    uncommonly superior client service. We work smart – so you
                    don't have to stress to get the deal of your dreams.
                </h2>
                <Link href={mainLink}>
                    <a
                        className={`ml-1 bg-gradient-to-br to-ffp-green from-ffp-blue flex items-center self-start justify-center px-5 text-base font-semibold text-white transition-colors rounded-md cursor-pointer xl:px-8 bg-ffp-blue hover:bg-ffp-green ${styles["homeMainButton"]}`}
                        style={{
                            height: "48px",
                            minHeight: "48px",
                            maxHeight: "48px",
                        }}
                    >
                        <div
                            id="text"
                            className={`text-sm md:text-base ${styles["text"]}`}
                        />
                        <div id="cursor" className={` ${styles["cursor"]}`} />
                    </a>
                </Link>
                <div className="flex items-center justify-center mt-4 lg:mt-8 xl:mt-12">
                    <img
                        src="/logos/eho.png"
                        alt="EqualHousingOpportunity"
                        className="h-10 lg:h-12"
                    />
                    <img
                        src="/logos/mls.png"
                        alt="MLS_logo"
                        className="h-8 mx-5 lg:h-10"
                    />
                    <img
                        src="/logos/realtor.png"
                        alt="Realtor_logo"
                        className="h-10 lg:h-12"
                    />
                </div>
            </div>
            <div className="relative flex items-center justify-center w-11/12 mt-2 xs:w-4/6 xs:mt-0">
                <img
                    src="/home/bg-boxes.png"
                    alt="FFP_BoxesBG"
                    className="w-10/12 mb-20"
                />
                <img
                    src="/home/man-torso.png"
                    alt="Scott_Fortney_Frontal"
                    className="absolute bottom-0 mx-auto"
                    style={{ width: "55%" }}
                />
            </div>
        </div>
    );
};

export default Hero;
