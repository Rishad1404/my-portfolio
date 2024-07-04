import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";
import mongodb from "../../assets/mongodb.png";
import firebase from "../../assets/firebase.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import express from "../../assets/express.png";
const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: "JAVASCRIPT",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImg,
            title: "REACT",
            style: 'shadow-sky-300',
        },
        {
            id: 5,
            src: tailwind,
            title: "TAILWIND",
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: github,
            title: "GITHUB",
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: mongodb,
            title: "MONGODB",
            style: 'shadow-green-400'
        },
        {
            id: 8,
            src: firebase,
            title: "FIREBASE",
            style: 'shadow-yellow-700'
        },
        {
            id: 9,
            src: express,
            title: "EXPRESS",
            style: 'shadow-gray-700'
        },
    ]

    return (
        <div name='experience' className="container mx-auto mt-20 lg:mt-56 md:mt-40">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center">
                <div className=" mb-6 md:mb-10 lg:mb-20">
                    <p className="text-6xl font-bold text-center">Experience</p>
                    <p className="py-4 text-center">Technologies I've worked with</p>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 lg:p-0">

                {
                    techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-36 h-40 mx-auto" />
                            <p className="mt-2 text-center">{title}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Experience;