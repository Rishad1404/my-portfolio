import SocialLinks from "../SocialLinks";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Portfolio from "./Portfolio";


const Home = () => {
    return (
        <div>
            <Banner/>
            <SocialLinks/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    );
};

export default Home;