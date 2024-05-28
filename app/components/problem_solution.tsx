"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const splitLetters = (input: string) => {
    const letters: string[] = [];
    const regex = /[\s\S]/gu;
    let letterMatch;

    while ((letterMatch = regex.exec(input)) !== null) {
        letters.push(letterMatch[0])
    }
    return letters;
}

export default function ProblemSolution() {
    const mediaMatch = splitLetters(`Media Match`);
    const charVariant = {
        hidden: {opacity: 0},
        reveal: {opacity: 1},
    }
    const ref = useRef<HTMLElement>(null);
    const {scrollYProgress} = useScroll({
        offset: ["0 1", "1.33 1"],
        target: ref,
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <>
            <motion.section ref={ref} style={{scale: scaleProgress, opacity:opacityProgress}} className={`w-[90%] lg:w-[80%] xl:w-[60%] xl:h-screen`}>
                <h2 className={`text-center flex items-center justify-center font-extrabold text-2xl xl:text-5xl`}>
                    Struggling to identify that movie you saw on social media, or the song you heard?
                </h2>
                <p className={`xl:text-lg flex items-center justify-center mt-2`}>We&apos;ve got you covered!</p>
                <div className={`flex flex-col lg:flex-row items-center justify-center xl:mt-28 mt-12 gap-8`}>

                    <div className={`flex flex-col items-center text-center`}>
                        <svg width="36" height="37" viewBox="0 0 41 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.5 3.79261C36.2809 5.89228 38.3535 8.79183 39.44 12.1026C40.4208 15.17 40.6505 18.428 40.11 21.6026C39.8001 23.7737 39.198 25.8929 38.32 27.9026C36.707 31.1918 34.5576 34.1895 31.96 36.7726C29.5273 39.1748 26.9705 41.4479 24.3 43.5826C22.0524 45.4217 19.9465 47.4274 18 49.5826C16.76 50.9126 15.76 52.3926 14.66 53.8426C13.56 55.2926 12.54 56.7626 11.47 58.2926C10.82 59.2126 10.06 58.7326 9.65 57.3926C9.16384 55.495 9.42517 53.4831 10.38 51.7726C12.5007 48.2822 15.1181 45.1191 18.15 42.3826C21.03 39.6926 23.96 37.3026 26.67 34.8126C28.2851 33.3527 29.6826 31.6689 30.82 29.8126C31.869 27.979 32.6821 26.0201 33.24 23.9826C33.8499 21.8727 34.01 19.6583 33.71 17.4826C33.567 16.4481 33.281 15.4384 32.86 14.4826C32.4598 13.5416 31.9167 12.668 31.25 11.8926C30.4247 10.8765 29.4423 9.99877 28.34 9.29261C27.1926 8.61366 25.9432 8.12405 24.64 7.84261C20.4353 6.96532 16.0553 7.88628 12.56 10.3826C9.99776 12.431 8.1381 15.2275 7.24 18.3826C6.99 19.0426 6.93 19.7526 6.71 20.3826C5.98 22.9026 5.5 23.6726 3.71 24.1326C3.30959 24.2646 2.90233 24.3747 2.49 24.4626C1.81167 24.5912 1.12413 24.2892 0.76 23.7026C0.513168 23.3156 0.32449 22.8944 0.2 22.4526C0.0791343 21.8835 0.0121716 21.3043 0 20.7226C0.0769773 16.6369 1.38767 12.6699 3.76 9.34261C6.31415 5.71191 9.91403 2.94572 14.08 1.41261C20.5596 -1.07315 27.8441 -0.244683 33.6 3.63261L33.5 3.79261Z"
                                fill="white"/>
                            <path
                                d="M12.2401 69.5323C12.4245 70.034 12.4995 70.5693 12.4601 71.1023L12.4001 71.9223C12.4001 72.1923 12.2801 72.4723 12.2201 72.7423L12.0201 73.5323C11.8937 73.7897 11.7535 74.0401 11.6001 74.2823C11.3347 74.7759 10.9977 75.2274 10.6001 75.6223C10.3301 75.9023 10.0901 76.2223 9.83008 76.4923C9.57008 76.7623 9.22008 76.9023 8.91008 77.0723C7.82288 77.4899 6.60081 77.3558 5.63008 76.7123C5.42008 76.5423 5.22008 76.3423 5.02008 76.1623C4.82008 75.9823 4.70008 75.7223 4.54008 75.5123C4.32851 75.1046 4.1609 74.6755 4.04008 74.2323C3.82751 73.5322 3.69007 72.8115 3.63008 72.0823C3.43815 71.1191 3.71249 70.1218 4.37008 69.3923C4.59008 69.1723 5.14008 69.5923 5.67008 70.0623C6.20008 70.5323 6.79008 70.9823 6.83008 71.2023C6.86987 71.6331 6.95364 72.0586 7.08008 72.4723C7.19008 72.8923 7.37008 73.2323 7.26008 73.4723C7.25433 73.5517 7.28268 73.6299 7.33803 73.6871C7.39338 73.7444 7.4705 73.7754 7.55008 73.7723C7.69903 73.743 7.83727 73.6739 7.95008 73.5723C8.28966 73.3316 8.53109 72.9766 8.63008 72.5723C8.77544 71.9493 8.41891 71.3188 7.81008 71.1223C7.62808 71.0466 7.41789 71.1043 7.30008 71.2623C7.07008 71.4823 7.07008 71.9723 7.12008 72.4623C7.13348 72.5652 7.13348 72.6694 7.12008 72.7723C6.97008 73.1423 6.55008 73.1523 5.28008 72.9823L4.42008 72.8723C3.58377 72.8443 2.83573 72.3444 2.49008 71.5823C2.3892 71.3309 2.33498 71.0632 2.33008 70.7923C2.34423 70.5137 2.37765 70.2363 2.43008 69.9623C2.56347 69.3578 2.80392 68.7821 3.14008 68.2623C3.36072 67.9726 3.6013 67.6986 3.86008 67.4423C4.14514 67.1492 4.48488 66.9148 4.86008 66.7523C5.25046 66.5353 5.67214 66.3801 6.11008 66.2923C6.5264 66.1904 6.95183 66.1301 7.38008 66.1123C9.80008 66.1123 11.3801 67.7323 12.3801 69.4523L12.2401 69.5323Z"
                                fill="white"/>
                        </svg>
                        <div className={`mt-4`}>
                            <h4 className={`text-xl xl:text-2xl font-extrabold my-2`}>Identification Confusion</h4>
                            <p className={`my-4`}>Lost in a sea of media? Identifying songs and videos can be a real
                                challenge when
                                everything blurs together.</p>
                        </div>
                    </div>

                    <div className={`flex flex-col items-center text-center`}>
                        <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.0949 32.6521C12.9959 29.4152 23.5386 24.349 34.7738 22.4118C36.9191 22.039 36.0136 18.7286 33.8731 19.1013C22.6379 21.063 12.0807 26.1048 1.19415 29.3368C-0.902763 29.9547 -0.00685322 33.2701 2.0949 32.6521Z"
                                fill="white"/>
                            <path
                                d="M2.24484 8.01797C2.88003 9.24049 3.97442 10.1526 5.28124 10.5486C5.95871 10.7553 6.69359 10.5879 7.21835 10.1072C7.73961 9.47943 7.92088 8.63133 7.70262 7.84141C7.41566 6.59789 6.72083 5.48965 5.73162 4.6977C5.25265 4.21511 4.61455 3.92867 3.9398 3.89338C3.08345 3.94965 2.39404 4.62705 2.31264 5.49221C2.16033 6.14288 2.53022 6.80218 3.16012 7.00276C3.72672 7.1597 4.55967 6.80659 4.64684 6.14449C4.67477 6.0536 4.69264 5.95984 4.70011 5.86494C4.72917 5.77176 4.70011 5.79628 4.66622 5.94832L4.37565 6.23768C4.2356 6.31645 4.07478 6.34902 3.91559 6.33086C3.82842 6.33086 3.88653 6.40443 3.76546 6.29163C3.81873 6.33576 4.19647 6.59079 4.02213 6.44366C4.17113 6.57169 4.31338 6.70757 4.44829 6.85073C4.58873 6.99786 4.71949 7.14989 4.8454 7.30683C5.08753 7.606 4.72917 7.13028 4.93741 7.42944L5.06332 7.606C5.14565 7.72861 5.2086 7.88065 5.29577 7.99835C5.38294 8.11606 5.23766 7.77765 5.27156 7.9346C5.30546 8.09154 5.34904 8.20924 5.37326 8.34656C5.41684 8.6065 5.37326 8.11115 5.37326 8.4986C5.37326 8.60159 5.43621 8.73401 5.37326 8.65064C5.37326 8.57217 5.37326 8.56236 5.37326 8.62611C5.37326 8.68987 5.37326 8.68006 5.41684 8.51331C5.49528 8.39032 5.60594 8.29183 5.73646 8.22886C5.9108 8.14058 5.56697 8.22886 5.92533 8.18472C5.71709 8.18472 6.10936 8.23867 5.96407 8.18472L5.75099 8.13077C5.53307 8.06701 5.84785 8.18472 5.71709 8.13077C5.11654 7.8575 4.62738 7.3829 4.33207 6.78697C3.62018 5.38431 1.52811 6.62512 2.24484 8.02778V8.01797Z"
                                fill="white"/>
                            <path
                                d="M19.5579 3.56449C19.6187 4.25494 19.4481 4.946 19.0736 5.52624C19.156 5.42325 18.9622 5.63904 18.9526 5.65866C19.0252 5.52624 18.9526 5.62924 19.03 5.61452C19.3012 5.55567 19.3981 5.67337 19.6402 5.71261L19.679 5.77637C19.6388 5.71708 19.6032 5.65478 19.5724 5.59C19.5392 5.53237 19.5117 5.47159 19.4901 5.40854C19.4465 5.30064 19.4368 5.16822 19.3836 5.06523C19.3303 4.96224 19.3836 5.31045 19.3836 5.17313C19.4126 4.89358 19.3836 4.60422 19.3836 4.32467L19.4368 4.05983C19.4368 4.14811 19.4368 4.18735 19.4368 4.05983C19.4707 3.87346 19.5046 3.6871 19.5531 3.50073C19.5903 3.34584 19.6372 3.1935 19.6935 3.04462C19.6257 3.2457 19.7468 2.89259 19.6935 3.04462C19.6935 2.99558 19.7613 2.95144 19.7807 2.90239C19.7226 3.08386 19.7419 2.98087 19.6644 3.03481C19.4556 3.18147 19.195 3.23139 18.9477 3.17214C18.7976 3.17214 18.6814 2.97106 18.8993 3.23589C19.3766 3.70558 20.1363 3.70558 20.6136 3.23589C21.0724 2.75042 21.0724 1.98521 20.6136 1.49974C20.1888 0.896611 19.4482 0.610494 18.7346 0.77389C18.0938 1.02913 17.6081 1.57369 17.4223 2.24521C16.9846 3.33186 16.8489 4.51911 17.03 5.67828C17.3351 7.19374 18.725 8.77295 20.3037 7.72341C21.5241 6.91418 22.1004 5.00638 21.9793 3.59882C21.9664 2.92714 21.4318 2.38577 20.7686 2.37272C20.1021 2.37806 19.5632 2.92389 19.5579 3.59882V3.56449Z"
                                fill="white"/>
                        </svg>
                        <div className={`mt-4`}>
                            <h4 className={`text-xl xl:text-2xl font-extrabold my-2`}>Media Mystery Frustration</h4>
                            <p className={`my-4`}>Can&apos;t figure out the song you just heard or the movie clip you
                                saw? Your search for
                                answers might be hitting a wall.</p>
                        </div>
                    </div>

                    <div className={`flex flex-col items-center text-center`}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.9687 4.17317C22.8298 3.60787 21.615 3.21072 20.3622 2.99413C19.8998 2.92939 19.4375 2.92939 18.9751 2.90628C17.2937 2.77849 15.6035 2.98112 14 3.50273C13.2842 3.75775 12.5988 4.09114 11.9563 4.49683C11.7575 4.63091 11.5494 4.75575 11.3414 4.88059L10.7357 5.2921C10.3195 5.54641 9.91728 5.82845 9.46416 6.05039C9.18211 6.18448 8.96942 5.88856 8.93705 5.42157C8.88724 4.84955 9.09189 4.28463 9.49652 3.87725C9.90743 3.506 10.3431 3.16306 10.8004 2.85079C11.2748 2.55768 11.7658 2.29215 12.2707 2.05552C13.3016 1.599 14.3909 1.28778 15.5073 1.13078C16.8477 0.877911 18.2076 0.743306 19.5716 0.728516C21.0674 0.796788 22.5455 1.0818 23.9594 1.57465C24.8209 1.88068 25.6559 2.25645 26.4562 2.69821C27.6448 3.38042 28.7589 4.18467 29.7807 5.09791C30.6284 5.78738 31.403 6.56206 32.0925 7.40976C32.266 7.59946 32.4208 7.80539 32.5549 8.02471C32.6439 8.20751 32.7062 8.40215 32.7398 8.60267C32.7547 8.75899 32.7358 8.91667 32.6844 9.06504C32.5928 9.29703 32.4269 9.49215 32.2127 9.61988C32.1146 9.69155 32.0128 9.75791 31.9076 9.8187C31.5654 9.97128 31.1308 9.7401 30.6083 9.43493C30.4835 9.2916 30.2893 9.17601 30.1829 9.02805C30.0766 8.88009 29.9194 8.746 29.8038 8.60267L29.4062 8.18191L28.9946 7.76578C28.4231 7.19033 27.8146 6.65283 27.1729 6.15673C26.1876 5.39058 25.1132 4.7463 23.9733 4.2379L23.9687 4.17317Z"
                                fill="white"/>
                            <path
                                d="M35.4474 9.52626C35.349 10.1815 35.0613 10.7938 34.6198 11.2879C34.3739 11.5487 34.0845 11.7646 33.7644 11.926C33.472 12.0687 33.1606 12.1683 32.8397 12.2219C32.4489 12.3016 32.0496 12.3312 31.6514 12.3097C31.038 12.2409 30.4336 12.1076 29.8482 11.9121C29.2794 11.7364 28.7292 11.5376 28.1929 11.3156C27.6565 11.0937 27.2311 10.955 26.7595 10.7562C26.1211 10.5539 25.5353 10.2128 25.0441 9.75745C24.8916 9.60024 25.095 9.38293 25.3955 9.22572C25.6951 9.04029 26.0562 8.98203 26.3989 9.0639C27.4947 9.49852 28.6645 9.81756 29.8158 10.2152C30.5044 10.4058 31.2225 10.4669 31.9334 10.3955C32.2266 10.3905 32.5146 10.3177 32.775 10.1828C32.875 10.1265 32.9642 10.053 33.0385 9.96552C33.1213 9.8593 33.1926 9.74461 33.2512 9.62336C33.4191 9.21306 33.4979 8.77177 33.4824 8.32873C33.4721 7.557 33.3649 6.78963 33.1633 6.04462C33.0293 5.44817 32.738 4.90719 32.59 4.31074C32.5576 4.17665 32.516 4.04719 32.4975 3.9131C32.4189 3.39987 32.4744 3.20567 32.664 3.02535C32.7032 2.98291 32.7449 2.94277 32.7888 2.90513C32.9322 2.80804 33.1495 2.95137 33.4223 3.25191L34.028 3.94084C34.2153 4.18319 34.3808 4.44157 34.5227 4.713C34.8666 5.23998 35.1183 5.82161 35.2671 6.43301C35.5385 7.44195 35.6138 8.49357 35.4891 9.53089L35.4474 9.52626Z"
                                fill="white"/>
                            <path
                                d="M4.78146 20.1396C4.76519 21.3985 4.97021 22.6505 5.38716 23.8385C5.56885 24.2612 5.77415 24.6734 6.00211 25.0731C6.37045 25.8145 6.82519 26.5098 7.35685 27.1445C7.62614 27.467 7.91164 27.7756 8.21224 28.0692C8.53127 28.3513 8.84106 28.6472 9.18784 28.8969C9.80182 29.3555 10.4695 29.7374 11.176 30.0343C11.4026 30.1268 11.6384 30.2331 11.8465 30.3302C12.0545 30.4273 12.3088 30.5059 12.5354 30.603C12.9981 30.7879 13.4503 30.9978 13.8901 31.2318C14.1629 31.3937 14.0335 31.7312 13.6636 32.0179C13.2143 32.3784 12.6302 32.5253 12.0638 32.4201C11.5243 32.2885 10.9944 32.1201 10.4778 31.9161C9.962 31.6921 9.46155 31.4341 8.97977 31.144C8.00248 30.5561 7.11879 29.8252 6.35814 28.9755C5.39056 27.9728 4.53763 26.8656 3.8151 25.6741C3.10984 24.3146 2.6482 22.8421 2.45111 21.3232C2.34261 20.4026 2.31939 19.4739 2.38176 18.549C2.4905 17.1642 2.75575 15.7961 3.17241 14.4709C3.4403 13.416 3.79762 12.3858 4.24048 11.3915C4.33973 11.1623 4.45403 10.9399 4.58264 10.7257C4.70366 10.5675 4.84515 10.426 5.00339 10.305C5.13272 10.2227 5.27746 10.1676 5.42877 10.1431C5.68896 10.1052 5.95434 10.1557 6.18244 10.2865C6.29446 10.3335 6.40268 10.3892 6.50609 10.4529C6.81126 10.6703 6.82975 11.165 6.78352 11.7938L6.69567 12.0943C6.67814 12.1952 6.64703 12.2932 6.60319 12.3856C6.51997 12.5613 6.45523 12.7509 6.37663 12.9359C6.22867 13.3058 6.08996 13.6803 5.95125 14.064C5.66682 14.8366 5.42905 15.6256 5.2392 16.4268C4.94216 17.6364 4.80996 18.8806 4.84619 20.1257L4.78146 20.1396Z"
                                fill="white"/>
                            <path
                                d="M5.00944 7.57558C5.67888 7.30665 6.41449 7.24858 7.11784 7.40913C7.83282 7.61205 8.45435 8.05857 8.87485 8.6714C9.12491 9.0111 9.3373 9.37698 9.50829 9.76259C9.74233 10.3944 9.91271 11.0481 10.0169 11.7138C10.1279 12.3519 10.2111 12.9853 10.2573 13.6187C10.3036 14.1782 10.3683 14.7377 10.396 15.2972C10.4945 16.044 10.3923 16.8037 10.1001 17.498C9.98453 17.72 9.72561 17.5674 9.4898 17.3131C9.22219 17.0712 9.04588 16.7447 8.99044 16.3883C8.91374 15.0903 8.75934 13.7979 8.52807 12.5183C8.37516 11.7435 8.08047 11.0037 7.65882 10.3359C7.5107 10.038 7.29735 9.7772 7.03462 9.57302C6.80219 9.42215 6.52269 9.36132 6.24859 9.40194C5.7636 9.46955 5.2986 9.63979 4.8846 9.9013C4.15671 10.3399 3.48315 10.8629 2.87791 11.4595C2.37856 11.9219 2.01328 12.4767 1.51392 12.9391C1.40296 13.0408 1.30123 13.1471 1.18102 13.2396C0.718649 13.591 0.510583 13.6419 0.256279 13.5586C0.198698 13.545 0.142856 13.5248 0.0898265 13.4985C-0.0581318 13.4153 -0.0118948 13.1518 0.145311 12.7495L0.505959 11.8248C0.639054 11.5243 0.793575 11.2338 0.968329 10.9555C1.30123 10.3635 1.72041 9.82429 2.2121 9.3557C3.01551 8.57418 3.95592 7.94724 4.98632 7.50622L5.00944 7.57558Z"
                                fill="white"/>
                            <path
                                d="M28.3122 28.8501C29.4794 28.1947 30.513 27.3258 31.3592 26.2886C31.6492 25.8885 31.9178 25.4733 32.1637 25.0448C33.126 23.5206 33.7401 21.8029 33.9623 20.0142C34.0109 19.6092 34.0341 19.2015 34.0317 18.7936C34.0317 18.3867 33.99 17.9798 33.9531 17.5775C33.8328 16.5372 33.6248 15.52 33.56 14.4427C33.56 14.1051 33.9114 14.045 34.3507 14.23C34.6052 14.341 34.8371 14.4977 35.035 14.6923C35.2731 14.9069 35.4461 15.1841 35.5344 15.4922C35.613 15.7789 35.6962 16.0609 35.7655 16.3476C35.8349 16.6343 35.8858 16.9302 35.9274 17.2261C35.969 17.522 35.9782 17.818 35.9967 18.1139C36.0129 18.4126 36.0129 18.7121 35.9967 19.0109C36 20.216 35.8143 21.4142 35.4465 22.5619C35.0496 23.9799 34.4992 25.3505 33.8051 26.6492C32.9539 28.0351 31.8571 29.2541 30.5685 30.2464C29.7815 30.8499 28.9283 31.3618 28.0255 31.7723C27.3474 32.0864 26.6455 32.3461 25.9263 32.549C25.2097 32.7439 24.4826 32.8983 23.7486 33.0114C22.6093 33.2197 21.4528 33.3188 20.2947 33.3073C20.035 33.3105 19.7754 33.2951 19.5179 33.2611C19.3177 33.212 19.1226 33.1439 18.9353 33.0576C18.5623 32.8293 18.336 32.4223 18.3388 31.985C18.3298 31.8618 18.3298 31.7382 18.3388 31.6151C18.3797 31.4156 18.509 31.2454 18.6902 31.1527C18.9396 30.9964 19.2107 30.878 19.4948 30.8013C19.9328 30.7399 20.3749 30.7121 20.8171 30.7181C21.2471 30.7181 21.6771 30.6903 22.1025 30.6533C22.9649 30.5988 23.8215 30.4751 24.6641 30.2834C25.2932 30.1319 25.9111 29.9372 26.5135 29.7008C27.1205 29.452 27.7052 29.1519 28.2613 28.8039L28.3122 28.8501Z"
                                fill="white"/>
                            <path
                                d="M17.2576 35.3876C16.8164 35.1217 16.4188 34.7896 16.0786 34.4028C15.6754 33.9586 15.3879 33.4218 15.2417 32.84C15.1278 32.3846 15.1278 31.9082 15.2417 31.4528C15.4461 30.8227 15.798 30.2504 16.2682 29.7837C16.6566 29.3745 17.0688 28.9885 17.5027 28.6278L18.5939 27.703C19.0301 27.2628 19.5485 26.9125 20.1197 26.6719C20.3093 26.6072 20.4387 26.8708 20.4711 27.2037C20.5325 27.5461 20.4432 27.8983 20.226 28.17C19.3892 28.9514 18.5939 29.7652 17.7986 30.5374C17.57 30.7609 17.3864 31.0261 17.2576 31.3188C17.1585 31.5389 17.102 31.7758 17.0912 32.0169C17.0814 32.2413 17.1465 32.4625 17.2761 32.6458C17.4546 32.8924 17.6662 33.1133 17.9049 33.3023C18.2607 33.5936 18.6485 33.8433 19.0609 34.0467C19.7203 34.3769 20.4072 34.6492 21.1138 34.8605C21.664 35.0547 22.2466 35.0871 22.8014 35.2813C22.9263 35.3275 23.0465 35.3645 23.1667 35.42C23.6291 35.6373 23.74 35.7991 23.7678 36.0534C23.7678 36.1135 23.7678 36.1736 23.7678 36.2245C23.7678 36.3956 23.5274 36.4881 23.1575 36.5528L22.3113 36.6915C22.0275 36.7254 21.7415 36.7362 21.4559 36.7239C20.8745 36.7399 20.2942 36.665 19.7359 36.5019C18.856 36.2447 18.0088 35.8863 17.2114 35.4338L17.2576 35.3876Z"
                                fill="white"/>
                        </svg>
                        <div className={`mt-4`}>
                            <h4 className={`text-xl xl:text-2xl font-extrabold my-2`}>Recognition Roadblocks</h4>
                            <p className={`my-4`}>Discovering content is only the beginning. The true challenge is
                                seamlessly identifying and
                                matching media to enjoy it fully.</p>
                        </div>
                    </div>

                </div>
                <motion.h2
                    initial={`hidden`} whileInView={`reveal`}
                    transition={{staggerChildren: .02, repeat: 1, ease: "linear"}}
                    className={`text-center flex items-center justify-center font-extrabold text-xl xl:text-5xl mt-28`}>
                    The Solution:
                    {mediaMatch.map((char, index) => (
                        <motion.span key={index} transition={{duration: 0.5}} className={`italic`}
                                     variants={charVariant}>{char}</motion.span>
                    ))}
                </motion.h2>

                <p className={`text-center mt-4 mb-20 xl:mb-0`}>A powerful platform designed to eliminate media identification
                    confusion, frustration, and roadblocks.
                    Upload your videos and songs to our database, where they are transformed into unique digital
                    fingerprints. These fingerprints allow anyone to easily identify and match media through the Media
                    Match app, making media recognition seamless and instant.</p>
            </motion.section>
        </>
    )
}