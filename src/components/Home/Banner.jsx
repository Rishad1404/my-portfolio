import { MdArrowForwardIos } from "react-icons/md";
import heroImage from "../../assets/heroImage.png"

const Banner = () => {
    return (
        <div name="banner" className="bg-base-200 h-screen bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-2 h-full md:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">I am Rishad Islam</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Portfolio <span><MdArrowForwardIos /></span></button>
                </div>
                <div>
                    <img
                        src={heroImage}
                        alt="My picture" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner;