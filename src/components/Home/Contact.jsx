import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <div name="contact" className="w-full lg:mt-52 mt-20 flex items-center justify-center">
            <div className="flex flex-col p-4 justify-center container mx-auto h-full">
                <div className="mb-20">
                    <p className="text-center text-5xl font-bold text-gray-800">Contact</p>
                    <p className="text-center font-light mt-2 text-black">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center mb-8">
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://linkedin.com/in/rishad-islam14"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-cyan-600 transition duration-300"
                        >
                            <FaLinkedin className="text-3xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/rishad.islam.9250/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-cyan-600 transition duration-300"
                        >
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a
                            href="https://github.com/Rishad1404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-cyan-600 transition duration-300"
                        >
                            <FaGithub className="text-3xl" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/bxojjjpa"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2 p-8 rounded-lg shadow-lg"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-3 mb-4 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="p-3 mb-4 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter your message"
                            className="p-3 mb-4 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mt-4 mx-auto flex items-center rounded-md hover:scale-105 transform transition-transform duration-300 shadow-lg"
                        >
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
