"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const links = [
        { "link_name": "Upload media", "href": "#" },
        { "link_name": "Download app", "href": "#" },
        { "link_name": "Tools & API", "href": "#" },
        { "link_name": "Pricing", "href": "#" },
    ];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [handleScroll, lastScrollY]);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className={`w-screen border-0 sticky top-0 z-20 backdrop-blur-lg bg-white opacity-95 px-6 md:px-10 py-3 drop-shadow-sm`}
        >
            <div className={`flex items-center justify-between`}>
                <div>
                    Media Match
                </div>
                <div>
                    <ul className={`hidden lg:flex flex-row gap-6 items-center font-medium`}>
                        {links.map((link) => (
                            <li className={`cursor-pointer p-4 hover:bg-media_grey rounded-lg`} key={link.link_name}>
                                <Link href={link.href}>{link.link_name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`p-4 border rounded-lg hidden md:block`}>
                    Press <span className={`bg-media_grey font-bold p-2 rounded-md`}>B</span> to upload
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
