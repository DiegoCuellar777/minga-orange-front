import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <div className="min-h-screen bg-black">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

