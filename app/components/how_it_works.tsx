export default function HowItWorks() {


    return (
        <>
            <section className="mt-28 md:mt-40 lg:mt-48 xl:mt-52 overflow-y-hidden">
                <div className="my-8 text-[#9e99a6] text-sm font-medium border rounded-lg px-6 py-3 drop-shadow-2xl">
                    How it works
                </div>
                <h1 className="text-center flex items-center justify-center">
                    Works like
                    <span className={`mx-1`}>
                        <svg className={`text-primary hidden md:flex md:w-10 lg:w-14 xl:w-full`} width="54" height="80" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M26.749 49.358c-.263.124-.521.27-.795.366-4.325 1.52-7.86-.21-9.075-4.604-.515-1.87-.725-3.838-.978-5.774-.327-2.49-.848-3.44-2.095-3.262-1.843.26-1.751 1.79-1.907 3.154-.5 4.4-1.413 8.691-3.433 12.675-.951 1.876-1.967 3.623-4.503 3.532-.838-.027-1.73.188-2.525.485-.564.21-1.332.668-1.424 1.137-.102.496.355 1.467.801 1.65 1.23.507 2.6.652 3.89 1.04 1.069.324 2.39.513 3.084 1.251 1.096 1.165 2.122 2.637 2.52 4.157.612 2.334.671 4.814.967 7.235-.06.011-.113.022-.172.027-.102 1.467-.269 2.928-.296 4.394-.021 1.499.726 2.486 1.86 2.54 1.256.064 1.97-.675 2.33-1.812.12-.372.221-.75.307-1.132 2.069-9.236 6.383-17.172 13.491-23.49.897-.798 1.386-1.742.752-2.841-.628-1.095-1.665-1.246-2.794-.718l-.005-.01zM15.026 63.612c-1.553-2.285-3.095-4.55-4.782-7.03l3.508-7.418c1.086 1.083 2.02 2.302 3.224 3.127 1.241.846 2.75 1.31 4.223 1.973l-6.173 9.348zM51.769 16.034c-.473.021-.93.27-1.402.372-4.164.9-7.5-.712-8.833-4.74-.785-2.371-.924-4.965-1.295-7.466-.145-.96.07-2.016-.236-2.9C39.798.716 38.966.004 38.407 0c-.559-.005-1.257.7-1.644 1.267-.296.431-.194 1.132-.269 1.714-.57 4.292-1.633 8.454-3.546 12.347-1.042 2.124-2.245 4.113-4.862 4.706-1.015.232-2.423 3.04-2.085 4.098.156.48.984 1.148 1.376 1.072 2.874-.566 4.336 1.337 5.7 3.235 1.736 2.42 2.628 5.23 3.009 8.173.22 1.742.28 3.51.467 5.257.172 1.59.92 2.367 2.225 2.286 1.461-.21 1.687-1.499 2.074-2.728 2.455-7.84 6.232-14.956 11.578-21.204.44-.512.924-1.046 1.166-1.66.553-1.402-.344-2.615-1.816-2.54l-.011.01zm-8.623 10.432c-1.166 1.979-2.22 4.027-3.59 6.54-1.541-4.556-3.153-8.524-6.892-10.794 1.746-3.024 3.39-5.87 5.06-8.766 1.124 1.386 2.171 3.17 3.676 4.394 1.456 1.191 3.379 1.806 5.383 2.82-1.123 1.784-2.428 3.763-3.632 5.8l-.005.006z"
                            fill="currentColor"></path></svg>
                    </span>
                    magic
                    <span className={`hidden md:flex`}>
                        <svg className={`text-primary md:w-14 lg:w-16 xl:w-full`} width="72" height="59" viewBox="0 0 72 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M71.354 45.065C70.342 44.01 69.387 42.862 68.22 42a489.485 489.485 0 00-12.163-8.697C38.455 21.121 31.18 15.134 12.222 2.174 9.58.368 9.29.404 7.005 2.618c-.349.34-.67.713-.956 1.108-1.594 2.219-3.17 4.452-4.763 6.67-.757 1.055-.68 2.014.296 2.852 1.55 1.331 3.04 2.764 4.715 3.917 10.941 7.549 40.974 30.301 54.244 39.804 2.34 1.675 2.877 1.835 4.675-.335 2.295-2.768 4.209-5.851 6.236-8.838.303-.453.325-1.1.476-1.654-.212-.408-.32-.812-.574-1.077zM27.225 27.13c-7.451-5.01-14.709-9.891-22.143-14.892l4.866-7.501c7.387 5.15 14.59 10.166 22.08 15.382-1.682 2.457-3.166 4.616-4.803 7.006v.005z"
                            fill="#5550FF"></path></svg>
                    </span>
                </h1>
                <p className={`text-center my-2 text-md md:text-lg lg:px-12`}>
                    Audio and video fingerprinting is a process of extracting unique identifiers from media files, which can be used to recognize and identify them. This project implements fingerprinting for both audio and video files, allowing you to upload a media file, generate fingerprints, and later recognize it by matching against stored fingerprints.
                </p>
            </section>
        </>
    )
}