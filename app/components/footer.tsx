import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

export function Footer(){
    return (
        <div className="bg-black w-screen px-5 md:px-24 py-10">
            <div className="md:flex justify-between">
                <div>
                    <div className="flex items-end">
                        <button className="transition ease-in-out didact-gothic-regular text-2xl hover:text-sky-500">media match</button>
                        <div className="mx-2" />
                        <p className="text-sm text-slate-400 align-self-right r-0 mb-1">(1.0.0)</p>
                    </div>
                    <div className="my-2" />
                    <p className="text-sm text-slate-400">A platform for matching snippets of media content with the actual media.</p>
                </div>
                <div className="m-10" />
                <div className="md:flex">
                    <div>
                        <h2>Privacy & Policies</h2>
                        <div className="my-2" />
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">Terms & Conditions</p>
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">Careers</p>
                    </div>
                    <div className="m-5" />
                    <div>
                        <h2>Company</h2>
                        <div className="m-2" />
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">About us</p>
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">Careers</p>
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">FAQs</p>
                    </div>
                    <div className="m-5" />
                    <div>
                        <h2>Services</h2>
                        <div className="my-2" />
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">Courses</p>
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">Part time jobs</p>
                        <p className="transition ease-in-out hover:text-sky-500 active:scale-[0.95] text-sm text-slate-400">Accomodation</p>
                    </div>
                </div>
            </div>
            <div className="my-5" />
            <div className="rounded-md p-5 bg-[#111111] md:flex justify-between">
                <div className="flex items-center">
                    <FaRegCopyright className="text-slate-300"/>
                    <div className="mx-1" />
                    <p className="text-sm text-slate-400">2021 Media Match. All rights reserved.</p>
                </div>
                <div className="m-5" />
                <div className="flex items-center">
                    <button>
                        <FaSquareXTwitter size={25} className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]" />
                    </button>
                    <div className="mx-1" />
                    <button>
                        <FaSquareInstagram size={25} className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]" />
                    </button>
                    <div className="mx-1" />
                    <button>
                        <FaSquareYoutube size={25} className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]" />
                    </button>
                    <div className="mx-1" />
                    <button>
                        <FaLinkedin size={25} className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]" />
                    </button>
                    <div className="mx-1" />
                </div>
            </div>
            <div className="my-5" />
        </div>
    )
}