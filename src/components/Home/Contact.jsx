const Contact = () => {
    return (
        <section id="contact" className="py-12">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Contact
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Email: your.email@example.com
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://www.linkedin.com/yourprofile"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg mr-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full shadow-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
