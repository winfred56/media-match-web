import {MdDownload} from "react-icons/md";
import Link from "next/link";
import AnalyticsDashboard from "@/app/components/analytics";

export default function Page(){
    return (
        <main
            className={`main flex flex-col items-center w-full overflow-x-hidden px-8 lg:px-0`}>
            <div className={`w-screen lg:w-full lg:max-w-4xl overflow-y-hidden flex flex-row items-center justify-between border-b pb-1`}>
                <h2 className={`text-xl md:text-2xl lg:text-3xl xl:text-5xl`}>Reports</h2>
                <div className={`flex gap-2 items-center justify-center`}>
                   <MdDownload/>
                    <p className={``}><Link href=''>Download</Link></p>
                </div>
            </div>
            <section>
                <div className={`flex flex-col items-center justify-center`}>
                    <div>
                        <AnalyticsDashboard/>
                    </div>
                </div>
            </section>
        </main>
    );
}
