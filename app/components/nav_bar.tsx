import { IoMenu } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";

export default function NavBar(){
    return (
        <div className="backdrop-blur-md text-black mt-4 flex flex-col items-center justify-center">
            <div className="opacity-80 backdrop-blur-md">
                <div className="justify-center hidden md:flex">
                    <div className="flex items-center flex-row justify-start py-4 content-center">
                        <div className="flex flex-row gap-3 justify-start">
                            <button className="flex-none transition ease-in-out didact-gothic-regular text-2xl hover:text-sky-500 mr-[32rem]">media match</button>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">Download app</button>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">How to use</button>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">Tools & API</button>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">Pricing</button>
                            <div  className="p-2 border hover:border-black transition ease-linear rounded-md border-slate-800 items-center justify-center flex flex-row">
                                Press <span className={`mx-1 py-1 px-2 bg-gray-400 rounded-sm font-extrabold`}>B</span> to Upload
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-screen flex p-4 md:hidden">
                    <div className="flex justify-between w-full items-center content-center">
                            <IoMenu size={25} className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]" />
                            <button className="transition ease-in-out didact-gothic-regular text-xl hover:text-sky-500">media match</button>
                            <button className="transition ease-in-out text-sm hover:text-sky-500 active:scale-[0.95]">
                                <LuUpload size={20}/>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}