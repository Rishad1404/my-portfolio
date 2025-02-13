
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (
        <div className=" ">
            <div className="flex justify-between items-center w-full h-20 p-2 container mx-auto">
                <div>
                    <h1 className="text-5xl px-5 font-signature">Rishad</h1>
                </div>
                <ul className="hidden md:flex">
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className="px-8 cursor-pointer  font-semibold capitalize  hover:scale-x-110 duration-200"><Link to={link} smooth duration={800}>{link}</Link></li>
                        ))
                    }
                </ul>
                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
                    {
                        nav ? <FaTimes size={30} /> : <FaBars size={30} />
                    }
                </div>

                {
                    nav && (
                        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
                            {
                                links.map(({ id, link }) => (
                                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-2xl"><Link onClick={()=>setNav(!nav)} to={link} smooth duration={800}>{link}</Link></li>
                                ))
                            }
                        </ul>
                    )
                }


            </div>
        </div>
    );
};

export default Navbar;