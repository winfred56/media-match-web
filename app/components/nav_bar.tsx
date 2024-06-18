import Link from "next/link";

export default function Navbar() {
    const links = [
        {"link_name": "Upload media", "href": "#"},
        {"link_name": "Download app", "href": "#"},
        {"link_name": "Tools & API", "href": "#"},
        {"link_name": "Pricing", "href": "#"},
    ];
    return (
        <nav className={`w-screen border-0 sticky top-0 z-20 backdrop-blur-lg opacity-95 px-6 md:px-10 py-3 drop-shadow-sm`}>
            <div className={`flex items-center justify-between`}>
                <div>
                    Media Match
                </div>
                <div>
                    <ul className={`hidden lg:flex flex-row gap-6 items-center font-medium`}>
                        {links.map((link) => (
                            <li className={`cursor-pointer p-4 hover:bg-media_grey rounded-lg`} key={link.link_name}><Link
                                href={link.href}>{link.link_name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className={`p-4 border rounded-lg hidden md:block`}>
                    Press <span className={`bg-media_grey font-bold p-2 rounded-md`}>B</span> to upload
                </div>
            </div>
        </nav>
    );
}