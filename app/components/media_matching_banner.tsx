import Image from "next/image";
import television from "@/public/television.jpg";

export default function MediaMatchingBanner(){
    return  <div className="relative">
                <div className="hidden md:block">
                    <Image alt={``} src={television} className="aspect-video" />
                    <div className="absolute top-[10%] w-screen flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-medium">Media matching</h1>
                        <div className="my-1" />
                        <p className="w-[50%] text-center">No need to stress over recalling your media. Just share a snippet, and we&apos;ll find the full content for you effortlessly. Enjoy seamless access without the hassle.</p>
                    </div>
                    <div>
                        <div className="absolute bottom-[50%] right-[40px] rounded bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping p-5 active:scale-[0.95]">Try now</div>
                        <div className="absolute bottom-[50%] right-[40px] rounded bg-gradient-to-r from-cyan-500 to-blue-500 p-5 active:scale-[0.95]">Try now</div>
                    </div>
                </div>
                <div className="md:hidden">
                    <Image alt={``} src={television} className="aspect-[1] object-contain" />
                    <div className="absolute top-2 w-screen flex flex-col justify-center items-center">
                        <h1 className="text-xl font-medium">Media matching</h1>
                        <div className="my-1" />
                        <p className="w-[50%] text-xs text-center">No need to stress over recalling your media. Just share a snippet, and we&apos;ll find the full content for you effortlessly. Enjoy seamless access without the hassle.</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="absolute bottom-2 rounded text-sm bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping p-2 text-sky-500 active:scale-[0.95]">Try now</div>
                        <div className="absolute bottom-2 rounded text-sm bg-gradient-to-r from-cyan-500 to-blue-500 p-2 active:scale-[0.95]">Try now</div>
                    </div>
                </div>
            </div>
}