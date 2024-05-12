import { IoMenu } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";

export default function TitleBar(){
    return (
        <div className="backdrop-blur-md">
            <div className="bg-black opacity-80 backdrop-blur-md">
                <div className="w-screen justify-center hidden md:flex">
                    <div className="flex justify-between w-[90%] p-4 content-center">
                        <div className="flex items-center">
                            <button className="transition ease-in-out didact-gothic-regular text-2xl hover:text-sky-500">media match</button>
                            <div className="mx-3"/>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">Download app</button>
                            <div className="mx-2"/>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">How to use</button>
                            <div className="mx-2"/>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">Tools & API</button>
                            <div className="mx-2"/>
                            <button className="transition ease-in-out hover:text-sky-500 active:scale-[0.95]">Pricing</button>
                        </div>
                        <button className="transition ease-in-out flex items-center font-medium text-sm hover:text-sky-500 active:scale-[0.95]">
                            <LuUpload size={20} />
                            <div className="m-1" />
                            Upload media
                        </button>
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