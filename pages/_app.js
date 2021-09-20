import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div
            className="flex flex-col items-center justify-start h-full min-h-screen"
            style={{ backgroundColor: "#f1f1f1" }}
        >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
