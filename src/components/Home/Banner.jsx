
import { MdArrowForwardIos } from 'react-icons/md';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import heroImage from '../../assets/heroImage.png';
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-scroll";

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Rishad Islam', 'a Frontend Developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 1000,
    });

    return (
        <div name="banner">
            <div className="container mx-auto md:py-20 lg:py-32 lg:flex flex-col h-screen items-center justify-between px-4 md:flex-row gap-10">
                <div className="flex flex-col justify-center lg:h-full p-4 rounded-lg">
                    <h1 className="text-3xl font-bold md:text-6xl lg:text-7xl text-gray-900">
                        I am{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            {text}
                            <Cursor cursorColor="black" />
                        </span>
                    </h1>
                    <p className="text-gray-900 lg:text-xl py-4 lg:max-w-2xl">
                        Hi there! I am a passionate junior front-end developer with a strong foundation in HTML, CSS, JavaScript, and React. I love crafting clean, responsive, and user-friendly web interfaces. I'm a quick learner, always eager to expand my skill set and tackle new challenges. With a keen eye for design and attention to detail, I strive to create visually appealing and functional websites.
                    </p>
                    <Link  to='portfolio' smooth duration={500} className="btn btn-ghost group text-white text-lg w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                        Portfolio <span className="group-hover:rotate-90 duration-300"><MdArrowForwardIos size={20} className="ml-1" /></span>
                    </Link>
                    <a href="/Resume.pdf" download className=" text-white text-lg w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                        Download Resume <span><FaDownload size={20} className="ml-1" /></span>
                    </a>
                </div>
                <div>
                    <img
                        src={heroImage}
                        alt="My picture"
                        className="rounded-2xl mx-auto max-w-full md:max-w-2xl max-h-[400px] lg::max-h-[00px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
