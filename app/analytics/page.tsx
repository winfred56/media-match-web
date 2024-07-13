import {MdDownload} from "react-icons/md";
import Analytics_cards from "@/app/components/analytics_cards";

export default function Page(){
    return (
        <main
            className={`main flex flex-col items-center w-full overflow-x-hidden px-8 lg:px-0`}>
            <div className={`w-screen lg:w-full lg:max-w-4xl overflow-y-hidden flex flex-row items-center justify-between border-b pb-1`}>
                <h2 className={`text-xl md:text-2xl lg:text-3xl xl:text-5xl`}>Reports</h2>
                <div className={`flex gap-2 items-center justify-center`}>
                   <MdDownload/>
                    <p className={``}>Download</p>
                </div>
            </div>
            <section>
                <div className={`flex flex-col items-center justify-center`}>
                    <div>
                        <Analytics_cards/>
                    </div>
                    <div>
                        graph
                    </div>
                </div>
            </section>

            <div className={`h-screen`}></div>
        </main>
    );
}