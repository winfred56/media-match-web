import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import HowItWorks from "@/app/components/how_it_works";


export default function Home() {

    return (
        <main
            className={`main flex flex-col items-center w-full overflow-x-hidden px-8 lg:px-0`}>
            <Hero/>
            <About/>
           <HowItWorks />
            <div className={`h-screen`}></div>
        </main>
    )
}

