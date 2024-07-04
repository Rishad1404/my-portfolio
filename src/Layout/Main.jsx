import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <motion.div
            className="bg-gradient-to-bl from-slate-500 to-slate-100"
            initial={{ background: "linear-gradient(to bottom left, #2b6cb0, #cbd5e0)" }}
            animate={{ background: "linear-gradient(to bottom left, #2b6cb0, #cbd5e0)" }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </motion.div>
    );
};

export default Main;
