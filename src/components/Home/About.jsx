const About = () => {
    return (
        <div className="container mx-auto py-10" id="about">
            <p className="text-center font-light mb-2">Get To Know More</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center px-4">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                    <img
                        src='https://i.ibb.co/FH22M26/1646196416119.jpg'
                        alt="Profile"
                        className="w-48 h-48 md:w-80 md:h-80 rounded-full shadow-lg bg-slate-100 p-2"
                    />
                </div>
                <div className="w-full md:w-2/3 md:ml-6 text-center md:text-left border-2 p-6 rounded-lg bg-white shadow-lg">
                    <p className="text-lg leading-relaxed">
                        Hello! I'm Rishad Islam, a passionate web developer with a knack for creating elegant and efficient solutions. I have a strong background in frontend and backend development, and I'm constantly seeking to learn and implement the latest technologies to enhance my skill set.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        With a solid foundation in HTML, CSS, JavaScript, and React, I build responsive and user-friendly interfaces. On the backend, I work with Node.js, Express, and MongoDB to create robust and scalable applications. I enjoy problem-solving and am dedicated to delivering high-quality code.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        In addition to my technical skills, I am a strong communicator and work well in team settings. I am always open to new challenges and opportunities to grow. Let's connect and create something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
