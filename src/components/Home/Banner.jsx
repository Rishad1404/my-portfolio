
import { MdArrowForwardIos } from "react-icons/md";
import heroImage from "../../assets/heroImage.png"

const Banner = () => {
    return (
        <div name="banner" className="bg-base-200 h-screen bg-gradient-to-b from-black to-gray-800">
            <div className="container mx-auto flex flex-col pt-32 items-center justify-between px-2 md:flex-row gap-10">
                <div className="flex flex-col justify-center h-full border p-20 rounded-lg">
                    <h1 className="text-4xl font-bold md:text-8xl text-white">I am <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Rishad Islam</span></h1>
                    <p className="text-gray-300 text-xl py-4 max-w-4xl">
                    Hi there! I am a passionate junior front-end developer with a strong foundation in HTML, CSS, JavaScript, and React. I love crafting clean, responsive, and user-friendly web interfaces. I'm a quick learner, always eager to expand my skill set and tackle new challenges.With a keen eye for design and attention to detail, I strive to create visually appealing and functional websites.
                    </p>
                    <button className="text-white text-lg w-fit px-6 py-3 my-2 gap-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">Portfolio <span className="hover:rotate-90 duration-300"><MdArrowForwardIos className=" text-lg" /></span></button>
                </div>
                <div>
                    <img
                        src={heroImage}
                        alt="My picture" className="rounded-2xl mx-auto max-w-96 md:max-w-2xl md:max-h-[500px]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;