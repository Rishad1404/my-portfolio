import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { LuServerCog } from "react-icons/lu";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
const Projects = () => {

    const projects = [
        {
            id: 1,
            projectName: 'Topic Talk',
            image: 'https://i.ibb.co/vCNnPbV/topic-talk.png',
            description: 'The project is a forum application developed using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to engage in discussions, post content, and manage their profiles. Key features include authentication, post creation, tagging, voting, commenting, and administrative controls.',
            features: ['Secure login via social media or email/password', 'Membership options for enhanced posting privileges', 'Profile management and user authentication using JWT'],
            website: ' https://topic-talk-2b5cc.web.app',
            githubClient: 'https://github.com/programming-hero-web-course1/b9a12-client-side-Rishad1404',
            githubServer: 'https://github.com/programming-hero-web-course1/b9a12-server-side-Rishad1404',


        },
        {
            id: 2,
            projectName: 'Study Mate',
            image: 'https://i.ibb.co/r46p3sJ/Screenshot-2024-07-04-164015.png',
            description: "This project is a web application designed for online group study among friends. It addresses the problem of collaborative learning and assignment management by allowing users to create assignments, complete them, and grade each other's work. Every registered user is a friend to others, fostering a supportive and interactive learning environment.",
            features: ['Secure login via social media or email/password', 'Membership options for enhanced posting privileges', 'Profile management and user authentication using JWT'],
            website: ' https://stydy-mate.netlify.app',
            githubClient: 'https://github.com/Porgramming-Hero-web-course/b9a11-client-side-Rishad1404.git',
            githubServer: 'https://github.com/Porgramming-Hero-web-course/b9a11-server-side-Rishad1404.git',


        },
        {
            id: 3,
            projectName: 'Lumina Art and Craft',
            image: 'https://i.ibb.co/r0PjZB5/lumina.png',
            description: 'The project is a forum application developed using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to engage in discussions, post content, and manage their profiles. Key features include authentication, post creation, tagging, voting, commenting, and administrative controls.',
            features: ['Assignment Creation', 'Assignment Completion', 'Peer Grading'],
            website: 'https://lumina-art-and-craft.web.app',
            githubClient: ' https://github.com/programming-hero-web-course-4/B9A10-client-side-Rishad1404.git',
            githubServer: 'https://github.com/programming-hero-web-course-4/b9a10-server-side-Rishad1404.git',


        }
    ]

    return (
        <div>
            <div className="container mx-auto  lg:mt-56">
                <p className="text-center text-5xl font-bold">My Projects</p>
                <p className="text-center font-light mt-2">Check out some of my work right here</p>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        projects.map((project) => (
                            <div key={project.id} className="rounded-lg bg-white shadow-lg overflow-hidden">
                                <figure className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.projectName}
                                        className="w-full h-auto"
                                        style={{ height: '300px' }}
                                    />
                                </figure>
                                <div className="p-6">
                                    <div className="h-80 mb-5">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.projectName}</h2>
                                        <p className="text-base text-gray-700 mb-4">{project.description}</p>
                                        <div className="mb-4">
                                            <p className="font-semibold  text-gray-800 flex items-center gap-2"><MdOutlineFeaturedPlayList /> Features:</p>
                                            <ul className="list-disc list-inside text-sm text-gray-700">
                                                {project.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex justify-center flex-grow">
                                        <div className="flex space-x-4">
                                            <a
                                                href={project.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="py-2 px-4 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-lg shadow-md  transition duration-300 flex items-center gap-2 hover:shadow-lg"
                                            >
                                                <CgWebsite /> Visit Website
                                            </a>
                                            <a
                                                href={project.githubClient}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 py-2 px-4 text-sm font-medium text-gray-700 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300 hover:shadow-md"
                                            >
                                                <FaGithub /> Client Repo
                                            </a>
                                            <a
                                                href={project.githubServer}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 py-2 px-4 text-sm font-medium text-gray-700 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300 hover:shadow-md"
                                            >
                                                <LuServerCog /> Server Repo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;