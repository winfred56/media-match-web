
"use client"
import MediaUpload from "@/app/components/upload_button";
import Image from "next/image";
import python from "@/public/python.png"
import figma from "@/public/figma.png"
import django from "@/public/django.png"
import firebase from "@/public/firebase.png"
import vercel from "@/public/vercel.png"
import postgresql from "@/public/postgresql.png"
import flutter from "@/public/flutter.png"
import tailwind from "@/public/tailwind.png"
import dart from "@/public/dart.png"
import github from "@/public/github.png"
import git from "@/public/git.png"
import mathplotlib from "@/public/mathplotlib.png"
import scipy from "@/public/scipy.png"
import next from "@/public/nextjs.png"
import numpy from "@/public/numpy.png"
import typescript from "@/public/typescript.png"
import {useEffect} from "react";


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Header() {

    const tools= [
        {"src": flutter},
        {"src": python},
        {"src": django},
        {"src": postgresql},
        {"src": next},
        {"src": figma},
        {"src": firebase},
        {"src": tailwind},
        {"src": dart},
        {"src": scipy},
        {"src": github},
        {"src": mathplotlib},
        {"src": git},
        {"src": vercel},
        {"src": numpy},
        {"src": typescript},
        {"src": flutter},
        {"src": python},
        {"src": django},
        {"src": postgresql},
        {"src": next},
        {"src": figma},
        {"src": firebase},
        {"src": tailwind},
        {"src": dart},
        {"src": scipy},
        {"src": github},
        {"src": mathplotlib},
        {"src": git},
        {"src": vercel},
        {"src": numpy},
        {"src": typescript},

    ]
    useEffect(() => {
    const phrases = [" song.", " video.", " movie."];
    const el = document.getElementById("typewriter");
    let sleepTime = 100;
    let curPhraseIndex = 0;

    const writeLoop = async () => {
      while (el) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
          el.innerText = curWord.substring(0, i + 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
          el.innerText = curWord.substring(0, i - 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
          curPhraseIndex = 0;
        } else {
          curPhraseIndex++;
        }
      }
    };

    writeLoop();
  }, []);

    return (
        <div
            className={`flex flex-col text-text_color items-center justify-center w-full mt-0 overflow-hidden xl:h-screen`}>
            <h1 className={`text-4xl xl:text-8xl text-center font-extrabold pb-6 xl:-mt-20`}>
                Effortlessly Identify Any <br className={`hidden xl:flex`}/>
                <span id={`typewriter`}></span>
                <span id={`typewriter-cursor`}>|</span>
            </h1>

            <h5 className={`flex items-center text-center text-lg font-normal relative my-1 xl:w-2/4 px-8`}>
                We transform your video, song, or movie into a unique digital fingerprint with a distinct hash, enabling
                seamless recognition and matching for others.
                {/*<br/>Automatic and 100% free*/}
            </h5>

            <MediaUpload />


            <p className={`my-1 text-sm flex text-center items-center justify-center`}>Unlock Instant Recognition with Our Video and Audio Hashing!</p>
            {/*<MediaUpload/>*/}

            <div className="mt-8 lg:pt-4 flex flex-col items-center justify-center space-y-6 mb-20 xl:mb-0">
                <div className="container max-w-[800px] flex flex-wrap justify-center items-center">
                    <div className="carousel-container-clients carousel-fade-clients">
                        <div className="carousel-clients space-x-7 ">
                            {tools.map((tool, index) => (
                                <Image width={500} height={500} className={`w-full h-full invert-effect`} key={index} src={tool.src} alt={`tool logo`}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
