/* eslint-disable no-unused-vars */
import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/About/About.module.css";

function OurTeam() {
    const teamMembers = [
        {
            name: "Scott Fortney",
            title: "Principal Broker",
            image: "/about/headshots/Scott-Fortney.jpg",
        },
        {
            name: "Janet Fortney",
            title: "Director Of Communications",
            image: "/about/headshots/Janet-Fortney.jpg",
        },
        {
            name: "Jenifer Taylor",
            title: "Sales Associate",
            image: "/about/headshots/Jenifer-Taylor.jpg",
        },
        {
            name: "David Lastra",
            title: "Sales Associate",
            image: "/about/headshots/David-Lastra.jpg",
        },
        {
            name: "Brenda J. Cox",
            title: "Sales Associate",
            image: "/about/headshots/Brenda-Cox.jpg",
        },
        {
            name: "Tina Martinez",
            title: "Sales Associate",
            image: "/about/headshots/Tina-Martinez.jpg",
        },
        {
            name: "Gene Pecar",
            title: "Sales Associate",
            image: "/about/headshots/Gene-Pecar.jpg",
        },
        {
            name: "Amy Trevisan",
            title: "Sales Associate",
            image: "/about/headshots/Amy-Trevisan.jpg",
        },
        {
            name: "Manuel Metcalf",
            title: "Sales Associate",
            image: "/about/headshots/Manuel-Metcalf.jpg",
        },
        {
            name: "Joseph Grigg Jr.",
            title: "Sales Associate",
            image: "/about/headshots/default-user.png",
        },
        {
            name: "Peter Mechlin",
            title: "Commercial Specialist",
            image: "/about/headshots/Peter-Mechlin.jpg",
        },
        {
            name: "Morrow Hayes",
            title: "Commercial Specialist",
            image: "/about/headshots/Morrow-Hayes.jpg",
        },
        {
            name: "Ralph Heinze",
            title: "Commercial Specialist",
            image: "/about/headshots/default-user.png",
        },
    ];

    const [isLoading, setLoading] = useState(true);

    return (
        <div className="flex flex-col items-center justify-start w-full mt-8 mb-24 riseAndFade">
            <p className="self-start text-2xl font-extrabold text-black">
                Meet Our Team:
            </p>
            {!isLoading ? (
                <div>a</div>
            ) : (
                <div
                    className="grid w-full gap-6 px-4 mt-4"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(200px, 1fr))",
                        gridAutoRows: "1fr",
                    }}
                >
                    {teamMembers.map((member, i) => {
                        return aMember(member, i);
                    })}
                </div>
            )}
        </div>
    );
}

function aMember({ image, name, title }, i) {
    return (
        <Link
            key={i}
            href={`/about/${name.replace(/ /g, "-").replace(".", "")}`}
        >
            <a
                className={`relative flex flex-col items-center justify-start p-2 py-3 transition bg-white rounded-xl ${styles["aTeamMember"]}`}
                style={{
                    boxShadow:
                        "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
            >
                <div
                    className="flex items-center justify-center w-10/12"
                    style={{ minHeight: "50px" }}
                >
                    <p className="text-xl font-bold text-center">{name}</p>
                </div>
                <div
                    style={{ paddingTop: "75%" }}
                    className="relative w-3/4 overflow-hidden rounded-full"
                >
                    <img
                        src={image}
                        alt="agent_photo"
                        className="absolute"
                        style={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: "100%",
                        }}
                    />
                </div>
                <div
                    className="flex items-center justify-center w-10/12 mt-2"
                    style={{ minHeight: "40px" }}
                >
                    <p className="text-base font-normal text-center">{title}</p>
                </div>
            </a>
        </Link>
    );
}

export default OurTeam;
