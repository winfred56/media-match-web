import Hero from "@/app/components/hero";
import About from "@/app/components/about";


export default function Home() {

    return (
        <main
            className={`main flex flex-col items-center pt-14 w-full overflow-x-hidden px-8 lg:px-0`}>
            <Hero/>
            <About/>

           {/* <ProblemSolution/>*/}

           {/*<HowItWorks />*/}

        </main>
    )
}