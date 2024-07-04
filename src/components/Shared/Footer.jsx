import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 p-10 lg:mt-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <aside className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <p className="text-lg font-semibold">Rishad Islam</p>
                    <p className="text-sm">Junior Frontend Developer</p>
                    <p className="text-sm mt-2">Email: <a href="mailto:rishadislam2019@gmail.com" className="text-blue-400">rishadislam2019@gmail.com</a></p>
                </aside>
                <div className="flex justify-center w-full md:w-auto mb-6 md:mb-0">
                    <img src="https://i.ibb.co/q1L37b4/Secondary-Logo-removebg-preview.png" alt="Logo" className="lg:h-32 lg:w-32" />
                </div>
                <nav className="flex flex-col items-center md:items-end mb-6 md:mb-0">
                    <h6 className="footer-title text-lg font-semibold mb-2">Social</h6>
                    <div className="flex space-x-4">
                        <a href="https://github.com/Rishad1404" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-10 h-10 hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a href="https://linkedin.com/in/rishad-islam14" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-10 h-10 hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a href="https://www.facebook.com/rishad.islam.9250/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-10 h-10 hover:text-blue-400 transition-colors duration-300" />
                        </a>
                    </div>
                </nav>
            </div>
            <p className="text-center mt-10 text-gray-400">Copyright © {new Date().getFullYear()} - All rights reserved by Rishad Islam</p>
        </footer>
    );
};

export default Footer;
