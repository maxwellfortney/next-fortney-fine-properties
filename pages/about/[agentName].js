import styles from "../../styles/About/About.module.css";

const teamMembers = [
    {
        agentName: "Scott Fortney",
        title: "Principal Broker",
        image: "/about/headshots/Scott-Fortney.jpg",
        phone: "(703)-244-8100",
        email: "Scott@FortneyFineProperties.com",
        description:
            "Principal Broker Scott Simpson Fortney has been a top-producing real estate broker for nearly 23 years. He has been awarded the elite Life Top Producer status by the Northern Virginia Association of Realtors (NVAR) and has been a member of NVAR’s Multi-Million Dollar Sales Club for more than 20 years. Scott is proud to say that he currently works with many of the same clients with whom he worked more than a decade ago. His wealth of knowledge and experience, thoughtful approach, and expert marketing and negotiating skills keep clients coming back. Scott is a Certified E-Pro Internet Professional; Certified Residential Specialist; Former NVAR Board of Directors Member; and a longtime member of the Kiwanis Club of Alexandria. He is a graduate of the College of William and Mary.",
    },
    {
        agentName: "Janet Fortney",
        title: "Director Of Communications",
        image: "/about/headshots/Janet-Fortney.jpg",
        phone: "(703)-887-8722",
        email: "Janet@FortneyFineProperties.com",
        description:
            "Janet was born into a family with a fascination for real estate. In fact, she spent much of her childhood peering out the backseat window as her parents drove by her father’s latest real estate acquisitions. (No wonder she married a real estate broker!) Janet’s career has included several years in the communications department of the National Association of the Remodeling Industry; she went on to found The Perfect Page, a desktop publishing/graphic design firm. Janet is happy to bring more than 25 years of marketing and communications experience, as well as her graphic and interior design talents, to Fortney Fine Properties.",
    },
    {
        agentName: "Jenifer Taylor",
        title: "Sales Associate",
        image: "/about/headshots/Jenifer-Taylor.jpg",
        phone: "(703)-829-6613",
        email: "jenifer.k.taylor@gmail.com",
        description:
            "Meet Jenifer Taylor, one of Fortney Fine Properties' most assured and hardworking professional Realtors! Before coming to  Northern Virginia, Jenifer forged a 10-year career with one of the largest new construction builders on the East Coast. Now, she focuses her expertise on connecting with local buyers seeking their ideal homes. Jenifer is renowned for reducing stress and adding fun to her clients' real estate buying and selling experiences. She prides herself on her ability to think creatively during negotiations and build trusting relationships both with her clients and within the community. Jenifer lives with her husband and two daughters in McLean, Va. Reach out anytime to talk with Jenifer Taylor!",
    },
    {
        agentName: "David Lastra",
        title: "Sales Associate",
        image: "/about/headshots/David-Lastra.jpg",
        phone: "(202)-669-4200",
        email: "David@LastraHomes.com",
        description:
            "David, a native Spanish speaker, is certified by the National Association of Realtors as an e-PRO® Internet Professional, ensuring that his clients and customers benefit from his expertise in creating online and e-office marketing strategies. He has worked as a property manager and as a personal representative and executor of various estates. Also an attorney with more than 20 years of experience in D.C., New York, and Puerto Rico, David is an expert negotiator, having successfully closed transactions ranging from small claims to multi-million-dollar property acquisitions. He has lived in the D.C. region for more than 20 years and now resides in Springfield, Va., with his wife, two daughters, and two dogs.",
    },
    {
        agentName: "Brenda J. Cox",
        title: "Sales Associate",
        image: "/about/headshots/Brenda-Cox.jpg",
        phone: "(703)-403-0748",
        email: "bjcoxie@gmail.com",
        description:
            "Brenda has been selling real estate in the Washington, D.C., area since 1986 and is a long-time Arlington, Va., resident. She is licensed in Virginia, Maryland, and D.C. A former librarian, Brenda recognizes — during every transaction — that information is the key to her clients’ ability to make informed decisions.",
    },
    {
        agentName: "Tina Martinez",
        title: "Sales Associate",
        image: "/about/headshots/Tina-Martinez.jpg",
        phone: "(757)-848-7428",
        email: "Tina@FortneyFineProperties.com",
    },
    {
        agentName: "Gene Pecar",
        title: "Sales Associate",
        image: "/about/headshots/Gene-Pecar.jpg",
        phone: "(703)-439-9162",
        email: "Gene@FortneyFineProperties.com",
        description:
            "Gene is licensed in Virginia, D.C., and Maryland. He is also president of Pecar Properties LLC, a Washington, D.C., area developer, owner, and operator of income-producing residential property. Gene has completed ground-up development, as well as the acquisition and re-positioning of distressed assets. In addition to his real estate business, Gene serves as an officer and pilot for the U.S. Air Force and continues to fly part-time with the DC Air National Guard. He received a masters degree in real estate and finance from Georgetown University, as well as a bachelors degree in business management from the Indiana University Kelley School of Business.",
    },
    {
        agentName: "Amy Trevisan",
        title: "Sales Associate",
        image: "/about/headshots/Amy-Trevisan.jpg",
        phone: "(703)-283-3712",
        email: "Amy@AmyTrevisan.com",
        description:
            "Amy knows a few things about moving, thanks to a childhood spent as the daughter of a career Naval officer. Licensed in Virginia, Amy has more than 13 years of experience as a Realtor®. She formerly worked for more than 20 years in the technology and defense industry, managing marketing communication plans and outreach programs for large-scale events; today, she uses those same strong skills and attention to detail to assist her real estate clients. Amy and her sports-loving family live in Alexandria, where she is active in the B&RB Ladies Running Club. Amy also serves on the Board of the Washington Figure Skating Club.",
    },
    {
        agentName: "Manuel Metcalf",
        title: "Sales Associate",
        image: "/about/headshots/Manuel-Metcalf.jpg",
        phone: "(301)-873-3414",
        email: "Manuel@FortneyFineProperties.com",
        description:
            "Manuel Metcalf has been practicing real estate in the Washington DC Metro Area for 7 years and has been a resident of Northern Virginia since 2005. As an agent who's an expert in the local area, combined with 14 years of real estate investment experience, Manuel brings a wealth of knowledge and expertise about buying and selling real estate. A graduate of the U.S. Naval Academy, prior to becoming a real estate agent Manuel served as a Navy Supply Corps Officer and has vast experience in the private sector with contracts and finance. Manuel works with buyers, sellers and investors.",
    },
    {
        agentName: "Joseph Grigg Jr.",
        title: "Sales Associate",
        image: "/about/headshots/default-user.png",
        phone: "(703)-582-0591",
        email: "Joe@JoeGrigg.net",
        description:
            "Joe is a real estate industry veteran of 16 years, with experience in commercial and residential real estate management, development, and sales. A native of Alexandria, Va., Joe has lived in Brookville Estates and the Seminary Valley community for more than 25 years. He is an active member of his local civic association and is committed to working on local issues that affect the community.",
    },
    {
        agentName: "Peter Mechlin",
        title: "Commercial Specialist",
        image: "/about/headshots/Peter-Mechlin.jpg",
        phone: "(703)-371-8419",
        email: "Peter@FortneyCommercial.com",
        description:
            "Peter, a 35-year commercial real estate industry veteran, has built his expertise through successful affiliations with some of the nation’s and region’s most prominent commercial real estate firms, including Coldwell Banker Commercial, CBRE (CB Richard Ellis) Group, Inc., and the Charles E. Smith Companies. Focusing primarily on office building and industrial leasing, building and land sales, and land leases in Northern Virginia, he has represented landlords and tenants countless times throughout his career. Peter has negotiated leases well in excess of 2M square feet, and he has been involved in multiple investment transactions, land sales for commercial/industrial development, and land assemblage for multifamily development. He is a Washington, D.C., native.",
    },
    {
        agentName: "Morrow Hayes",
        title: "Commercial Specialist",
        image: "/about/headshots/Morrow-Hayes.jpg",
        phone: "(443)-995-1765",
        email: "Morrow@FortneyCommercial.com",
        description:
            "Morrow Hayes has been marketing commercial real estate investment properties in the Washington DC and Baltimore metropolitan areas for over 25 years. He has successfully concluded sales of institutional grade downtown Washington office buildings, over 45 retail and industrial properties. NNN sales are currently of particular interest. Morrow is a graduate of the Wharton School at the University of Pennsylvania (MBA).",
    },
    {
        agentName: "Ralph Heinze",
        title: "Commercial Specialist",
        image: "/about/headshots/default-user.png",
        phone: "(703)-850-7718",
        email: "ralphheinze@yahoo.com",
    },
];

export async function getStaticPaths() {
    const paths = teamMembers.map((member) => {
        return {
            params: {
                agentName: member.agentName.replace(".", "").replace(/ /g, "-"),
            },
        };
    });

    console.log(paths);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { agentName } = context.params;

    console.log(agentName.replace(/-/g, " ").replace(".", ""));

    for (let i = 0; i < teamMembers.length; i++) {
        if (
            teamMembers[i].agentName ===
            agentName.replace(/-/g, " ").replace(".", "")
        ) {
            return {
                props: teamMembers[i],
            };
        } else if (
            agentName.replace(/-/g, " ").replace(".", "") === "Brenda J Cox"
        ) {
            return {
                props: teamMembers[4],
            };
        } else if (
            agentName.replace(/-/g, " ").replace(".", "") === "Joseph Grigg Jr"
        ) {
            return {
                props: teamMembers[9],
            };
        }
    }

    return {
        props: {},
    };
}

function MemberPage({ agentName, title, image, phone, email, description }) {
    // const [isLoading, setLoading] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center flex-auto w-full mt-4 mb-28 riseAndFade">
            {agentName ? (
                <div
                    className={`flex items-start justify-center w-11/12 p-4 bg-white rounded-lg lg:w-3/4 h-3/4 ${styles["MemberContainer"]}`}
                >
                    <div
                        className="flex flex-col items-start justify-start flex-none mr-2"
                        // style={{ minWidth: "25%" }}
                    >
                        <img
                            className="self-start w-full mb-4 rounded-lg"
                            alt="agent_photo"
                            src={image ? image : null}
                            style={{
                                maxWidth: "300px",
                            }}
                        />
                        <div className="flex flex-col items-start justify-center flex-auto w-full">
                            {phone ? (
                                <a
                                    href={`tel:${phone}`}
                                    className="flex items-center justify-start"
                                >
                                    <img
                                        src="/about/phone-icon.png"
                                        className="mr-2 w-7"
                                        alt="phone_icon"
                                    />
                                    <p className="font-semibold text-black">
                                        {phone}
                                    </p>
                                </a>
                            ) : null}
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center justify-start mt-5 mb-3"
                            >
                                <img
                                    src="/about/email-icon.png"
                                    className="mr-2 w-7"
                                    alt="email_icon"
                                />
                                <p className="font-semibold text-black">
                                    {email}
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start flex-auto">
                        <p className="self-start text-4xl font-bold">
                            {agentName}
                        </p>
                        <p className="self-start mb-1 text-lg font-normal text-black">
                            {title}
                        </p>
                        <p className="w-11/12 mt-6">{description}</p>
                    </div>
                </div>
            ) : (
                <div className="loader" />
            )}
        </div>
    );
}

export default MemberPage;
