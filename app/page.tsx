import Header from "@/app/components/header";
import ProblemSolution from "@/app/components/problem_solution";
import HowItWorks from "@/app/components/how_it_works";


export default function Home() {

    return (
        <main
            className={`main flex flex-col items-center justify-center pt-14 w-full overflow-x-hidden text-text_color`}>
            <Header/>

            <ProblemSolution/>

           <HowItWorks />

        </main>
    )
}