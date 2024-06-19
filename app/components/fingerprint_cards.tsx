'use client';
import React, { MouseEvent, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

interface CardItem {
    title: React.ReactNode;
    body: React.ReactNode;
    svg: React.ReactNode;
}

const cardContent: CardItem[] = [
    {
        title: <h2 className="text-md md:text-lg mt-1">Audio Fingerprinting</h2>,
        body: (
            <>
                <p>Audio fingerprinting involves converting an audio signal into a compact digital summary, known as a fingerprint. These fingerprints can be matched against a database to identify the audio.</p>
                <h2 className="text-md md:text-lg mt-4 text-primary">Processes</h2>
                <ul>
                    <li>Audio Preprocessing</li>
                    <li className="mt-2">Spectrogram Generation</li>
                    <li className="mt-2">Peak Detection</li>
                    <li className="mt-2">Hash Generation</li>
                </ul>
            </>
        ),
        svg: (
            <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 10v4M15 5v14M6 10v4M9 7v10M18 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        ),
    },
    {
        title: <h2 className="text-md md:text-lg mt-1">Video Fingerprinting</h2>,
        body: (
            <>
                <p>Video fingerprinting is similar but involves extracting unique features from the video frames. These features are then stored and can be matched against a database to identify the video.</p>
                <h2 className="text-md md:text-lg mt-4 text-primary">Processes</h2>
                <ul>
                    <li>Frame Extraction</li>
                    <li className="mt-2">Feature Extraction</li>
                    <li className="mt-2">Hash Generation</li>
                </ul>
            </>
        ),
        svg: (
            <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path clipRule="evenodd" d="M13.5 14L11 15.5v-3l2.5 1.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M5 9h14M7 5l2 4M11 5l2 4M15 5l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        ),
    },
];

const TiltCard: React.FC<{ card: CardItem }> = ({ card }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d', transform }}
            className="relative h-96 w-full rounded-xl bg-gradient-to-br from-[#FAFAFB] to-violet-200"
        >
            <div
                style={{ transform: 'translateZ(75px)', transformStyle: 'preserve-3d' }}
                className="absolute inset-4 grid p-4 rounded-xl bg-white shadow-lg"
            >
                {card.svg}
                {card.title}
                {card.body}
            </div>
        </motion.div>
    );
};

const FingerprintCards: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full overflow-y-hidden">
            <div className="place-content-center mt-16 md:mt-20 lg:mt-28 xl:mt-32 hidden w-full gap-y-12 xl:grid xl:grid-cols-2 xl:gap-4">
                {cardContent.map((card, index) => (
                    <TiltCard key={index} card={card} />
                ))}
            </div>
            <div className="mt-16 md:mt-20 lg:mt-28 xl:mt-32 w-full flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-4 xl:hidden">
                {cardContent.map((card, index) => (
                    <div key={index} className="p-4 lg:p-8 border rounded-lg">
                        {card.svg}
                        {card.title}
                        {card.body}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FingerprintCards;
