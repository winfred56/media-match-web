import { IoMenu } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import mediaMatch from "./../../public/media match logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    const links = [
        {"link_name": "Upload media", "href": "#"},
        {"link_name": "Download app", "href": "#"},
        {"link_name": "Tools & API", "href": "#"},
        {"link_name": "Pricing", "href": "#"},
    ];
    return (
        <div className={`sticky top-0 z-20 backdrop-blur-lg opacity-95 px-6 md:px-10 py-3 drop-shadow-sm`}>
            <div className={`flex flex-row items-center justify-between`}>
                <div className={`flex flex-row gap-10 items-center`}>
                    <Link className={`flex flex-row gap-4 items-center`} href={`#`}>
                        <Image src={mediaMatch} className={`w-8 md:w-10 lg:w-12`} alt={`logo`} decoding={`async`} loading={`eager`}/>
                        <h1 className={`text-2xl font-extrabold`}>Media Match</h1>
                    </Link>

                    <ul className={`hidden lg:flex flex-row gap-6 items-center font-medium`}>
                        {links.map((link) => (
                            <li className={`hover:text-secondary cursor-pointer`} key={link.link_name}><Link href={link.href}>{link.link_name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div  className="hidden lg:flex flex-row p-2 border transition ease-linear rounded-md border-[#4B4B4B] items-center justify-center">
                                Press <span className={`mx-1 py-1 px-2 bg-gray-200 text-black rounded-sm font-extrabold`}>B</span> to Upload
                </div>
                <div className={`lg:hidden`}>
                    <IoMenu size={34}/>
                </div>

            </div>
        </div>
    )
}