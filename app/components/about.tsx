"use client"
import Image from "next/image";
import dart from "@/public/dart.png";
import numpy from "@/public/numpy.png";
import django from "@/public/django.png";
import python from "@/public/python.png";
import flutter from "@/public/flutter.png";
import nextjs from "@/public/nextjs 1.png";
import postgres from "@/public/postgres.png";
import {steps} from "@/app/components/steps";
import typescript from "@/public/typescript.png";
import mathplotlib from "@/public/mathplotlib.png";
import {useRef, ReactNode, useEffect, useState} from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

export default function About(){
    const element = useRef(null);
    const mediaTypes = ["python", "dart", "django", "flutter", "postgresql", "nextjs", "numpy", "typescript",];
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    });
    const about: string = "Media Match uses cutting-edge technology to recognize songs, movies, and more. Get details, explore new media, all on-the-go. Your ultimate pocket guide to instant media discovery.\n";
    const words = about.split(" ");



    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaTypes.length);
        }, 2000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <section className="mt-28 md:mt-40 lg:mt-48 xl:mt-0 xl:h-screen overflow-y-hidden">
                <h2 ref={element}
                    className="text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex flex-wrap">
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + (1 / words.length);
                        return <Word key={index} range={[start, end]} progress={scrollYProgress}>{word}</Word>;
                    })}
                </h2>
            </section>

            <section className={`mt-28 md:mt-40 lg:mt-48 xl:mt-0 text-center overflow-hidden`}>
                <div className={`flex flex-col items-center justify-center`}>
                    <h1 className={`text-center overflow-y-hidden flex items-center justify-center`}>
                        Discover <span className={`mr-3 lg:hidden`}></span>
                        <span className={`hidden lg:flex items-center mx-1 justify-center`}>
                        <svg className={`text-primary`} width="141" height="75" viewBox="0 0 141 75" fill="none"
                             xmlns="http://www.w3.org/2000/svg"><path
                            d="M75.732 71.61c-12.243.115-24.483.204-36.725.355-3.357.04-6.712.329-10.073.379-8.017.117-14.904-2.639-20.406-8.503C1.062 55.88-.449 44.166 4.554 34.148 10.327 22.59 22.94 16.176 35.742 18.514c9.348 1.708 18.659 3.65 27.969 5.56 1.52.312 2.67.127 3.957-.828 5.747-4.256 12.38-5.91 19.407-5.784 2.672.047 5.411.644 7.98 1.43 9.548 2.936 19.048 6.032 28.548 9.123 2.352.765 4.663 1.664 6.936 2.64 2.501 1.074 4.401 2.914 5.733 5.271 4.959 8.796 5.415 17.796.751 26.813-2.883 5.577-7.607 8.373-14.005 8.412-15.761.09-31.523.29-47.286.451v.01zm15.995-49.43c.12.56.164.876.256 1.174 2.66 8.69 1.906 17.241-1.255 25.615-.745 1.976-1.927 3.903-3.317 5.5-2.762 3.18-6.54 2.96-8.907-.507-1.146-1.68-2.063-3.66-2.534-5.635-1.934-8.066-1.402-16.025 1.568-23.799.243-.632.495-1.26.821-2.089-.549.068-.87.05-1.146.15-6.83 2.518-12.054 6.879-15.177 13.52-5.054 10.755-1.004 22.986 9.472 28.625 5.253 2.825 10.877 3.689 16.74 2.59 8.248-1.547 14.705-5.796 18.71-13.254 7.321-13.636-1.126-29.112-15.231-31.89zm-70.313 2.04c-.145-.116-.289-.235-.433-.35-5.626 2.52-9.977 6.449-12.736 12.04-5.877 11.923-.82 25.753 11.266 30.943 10.4 4.464 23.15.898 30.015-8.412 7.71-10.451 6.053-25.165-5.397-32.651a8.437 8.437 0 01-1.13-.882c-1.88-1.77-4.228-2.227-6.72-2.764.062.492.045.664.106.803 3.877 9.393 2.899 18.634-1.077 27.686-.843 1.922-2.245 3.722-3.765 5.195-3.227 3.127-7.182 2.686-9.987-.835-1.472-1.852-2.354-4-2.864-6.278-1.744-7.714-1.086-15.245 1.9-22.57.26-.646.544-1.284.817-1.921l.005-.005zm86.725 3.462c.682 1.114 1.097 1.782 1.503 2.458 3.219 5.357 4.281 11.132 3.219 17.273-1.366 7.907-5.62 13.96-12.095 18.554-.596.425-1.211.83-2.194 1.504.872.144 1.18.246 1.483.242 8.546-.118 17.097-.236 25.642-.394.607-.011 1.24-.24 1.811-.493 2.413-1.056 4.267-2.762 5.666-4.99 4.625-7.35 4.021-18.726-1.339-25.546-.766-.97-1.638-1.635-2.856-2.021-6.391-2.024-12.758-4.128-19.137-6.192-.364-.118-.745-.174-1.707-.395h.004zM68.872 68.18l.252-.448c-6.01-3.44-10.114-8.46-12.434-15.294-.953 1.96-1.603 3.51-2.442 4.952-.842 1.446-1.783 2.855-2.837 4.152-1.058 1.293-2.26 2.484-3.5 3.614-1.165 1.067-2.458 2-4.085 3.3l25.046-.276zM56.94 37.073c.984-1.934 1.703-3.531 2.58-5.03.893-1.536 1.943-2.979 3.044-4.648-4.302-.88-8.228-1.684-12.158-2.486-.11.166-.216.331-.326.502 3.24 3.2 5.388 7.044 6.86 11.667v-.005zM97.232 1.602c1.821.542 3.725.897 5.442 1.662 3.452 1.538 5.944 4.261 8.166 7.243.141.19.283.393.373.611.358.859.57 1.862-.329 2.367-.573.323-1.544.283-2.198.04-.708-.263-1.285-.917-1.872-1.461-1.058-.976-2.038-2.039-3.116-2.988-2.022-1.784-4.297-2.984-7.09-3.134-2.146-.119-3.095-.86-3.069-2.007.023-1.12 1.132-1.832 3.124-2.009.158-.013.322-.008.48-.013.028-.102.06-.208.089-.31zM14.318 5.411c1.35-.076 2.392-.187 2.725 1.051.308 1.16-.264 2.003-1.222 2.615-.264.17-.564.32-.866.398-3.362.852-5.658 3.147-7.78 5.69-.457.55-.88 1.248-1.476 1.528-.635.3-1.666.485-2.15.164-.485-.322-.516-1.335-.712-2.053-.034-.127.063-.314.143-.449 2.45-3.952 5.464-7.267 10.065-8.742.524-.169 1.097-.175 1.277-.202h-.004z"
                            fill="currentColor"></path><path
                            d="M91.727 22.18c14.105 2.779 22.552 18.255 15.231 31.89-4.005 7.463-10.463 11.707-18.71 13.253-5.863 1.1-11.487.241-16.74-2.589-10.476-5.639-14.531-17.874-9.473-28.625 3.124-6.64 8.349-11.002 15.178-13.52.28-.104.597-.082 1.146-.15-.326.825-.578 1.453-.821 2.09-2.97 7.769-3.502 15.733-1.568 23.798.476 1.975 1.388 3.956 2.534 5.635 2.367 3.467 6.145 3.688 8.907.507 1.385-1.597 2.567-3.523 3.317-5.5 3.16-8.373 3.91-16.925 1.255-25.615-.092-.302-.135-.613-.256-1.174zM21.413 24.22c-.273.641-.556 1.28-.816 1.92-2.982 7.325-3.645 14.856-1.901 22.57.515 2.278 1.396 4.423 2.864 6.278 2.8 3.522 6.756 3.962 9.987.835 1.52-1.472 2.922-3.273 3.765-5.194 3.976-9.048 4.955-18.293 1.077-27.686-.057-.14-.044-.312-.105-.804 2.49.537 4.838.99 6.719 2.765.348.325.73.623 1.13.882 11.45 7.485 13.108 22.2 5.397 32.651-6.864 9.305-19.615 12.876-30.015 8.412C7.43 61.663 2.372 47.829 8.25 35.905c2.755-5.59 7.11-9.514 12.736-12.04.145.115.289.235.433.35l-.005.005z"
                            fill="#fff"></path><path
                            d="M108.138 27.677c.963.222 1.343.278 1.708.396 6.379 2.068 12.745 4.172 19.136 6.192 1.214.386 2.091 1.045 2.857 2.021 5.36 6.82 5.963 18.195 1.338 25.546-1.399 2.227-3.253 3.934-5.666 4.99-.57.248-1.203.481-1.811.493-8.545.158-17.095.276-25.641.394-.304.008-.611-.094-1.483-.243.982-.674 1.597-1.078 2.194-1.504 6.474-4.593 10.728-10.647 12.095-18.554 1.061-6.14-.001-11.916-3.22-17.272-.406-.677-.82-1.344-1.502-2.459h-.005zM68.87 68.18l-25.045.276c1.622-1.299 2.915-2.232 4.085-3.3 1.235-1.13 2.441-2.32 3.5-3.614 1.058-1.293 1.999-2.702 2.837-4.152.839-1.441 1.485-2.992 2.441-4.952 2.325 6.83 6.425 11.855 12.435 15.295-.084.147-.168.3-.253.447zM56.936 37.074c-1.472-4.623-3.619-8.466-6.86-11.667.11-.166.216-.332.326-.503 3.926.803 7.856 1.606 12.159 2.488-1.101 1.668-2.151 3.11-3.044 4.646-.877 1.504-1.597 3.097-2.58 5.031v.005z"
                            fill="#fff"></path></svg>
                    </span>
                        the Media
                    </h1>
                    <h1 className={`text-center overflow-y-hidden flex items-center justify-center`}>You Love
                        Instantly</h1>
                    <p className={`text-center my-4 text-md md:text-lg lg:px-12`}>
                        Know your media instantly. Fingerprint songs & videos, explore a massive database, and
                        rediscover
                        your
                        favorites. All-in-one media recognition, anywhere, anytime.
                    </p>
                </div>
            </section>

            <section className="mt-16 md:mt-20 lg:mt-28 xl:mt-32 w-full flex-col items-center justify-center p-8">
                <div className="w-full flex flex-col gap-y-20 lg:grid lg:grid-cols-3 lg:gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center justify-center">
                            {step.svg}
                            <div className="absolute top-24 w-full text-center">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 md:mt-20 lg:mt-28 xl:mt-32 overflow-hidden">
                <div className="my-8 text-[#9e99a6] text-sm font-medium border rounded-lg px-6 py-3 drop-shadow-2xl">
                    🧰 Tools
                </div>
                <h1 className="text-center">
                    Built with familiar tools <span
                    className="md:hidden text-primary">{mediaTypes[currentMediaIndex]}</span>
                </h1>
                <h1 className="hidden md:block text-primary">{mediaTypes[currentMediaIndex]}</h1>
                <div className="my-20">
                    <div className={`flex justify-center items-center gap-4 imageContainer`}>
                        <Image className={`p-2 border rounded-lg image`} src={mathplotlib} alt="Mathplotlib"/>
                        <Image className={`p-2 border rounded-lg image`} src={dart} alt="Dart"/>
                        <Image className={`p-2 border rounded-lg image`} src={django} alt="Django"/>
                        <Image className={`p-2 border rounded-lg image`} src={flutter} alt="Flutter"/>
                        <Image className={`p-2 border rounded-lg image`} src={python} alt="Python"/>
                        <Image className={`p-2 border rounded-lg image`} src={typescript} alt="TypeScript"/>
                        <Image className={`p-2 border rounded-lg image`} src={nextjs} alt="Next.js"/>
                        <Image className={`p-2 border rounded-lg image`} src={postgres} alt="Postgres"/>
                        <Image className={`p-2 border rounded-lg image`} src={numpy} alt="NumPy"/>
                    </div>
                </div>
            </section>
        </>
    );
}

interface WordProps {
    children: ReactNode;
    range: [number, number];
    progress: MotionValue<number>;
}

const Word = ({children, range, progress}: WordProps) => {
    const opacity = useTransform(progress, range, [0, 1])
    // return <motion.span style={{opacity}} className="mr-3 mt-1">{children}</motion.span>;
    return (
        <span className={`relative mr-3 mt-1`}>
            <span className={`absolute opacity-45`}>{children}</span>
            <motion.span style={{opacity}} className={`mr-1`}>{children}</motion.span>
        </span>
    );
}
