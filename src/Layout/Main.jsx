
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {

    const location = useLocation();
    const hideHeaderFooter = ["/404","*"];
    const shouldHideHeaderFooter = hideHeaderFooter.includes(location.pathname);
    return (
        <div>
            {!shouldHideHeaderFooter && <Navbar />}
            <Outlet />
            {!shouldHideHeaderFooter && <Footer />}

        </div>
    );
};

export default Main;