'use client'
import React, {useState} from "react";
import FingerprintCards from "@/app/components/fingerprint_cards";

export default function HowItWorks() {
    const find_tabs: Tab[] = [
        { label: 'cUrl', content: 'curl -X GET http://localhost:8000/find -F "file=@path/to/your/media/file"' },
  { label: 'Python', content: 'import requests\n' +
          '\n' +
          'url = \'http://localhost:8000/find\'\n' +
          'files = {\'file\': open(\'path/to/your/media/file\', \'rb\')}\n' +
          'response = requests.get(url, files=files)\n' +
          'print(response.json())\n' },
  { label: 'Javascript', content: 'const axios = require(\'axios\');\n' +
          'const FormData = require(\'form-data\');\n' +
          'const fs = require(\'fs\');\n' +
          '\n' +
          'const form = new FormData();\n' +
          'form.append(\'file\', fs.createReadStream(\'path/to/your/media/file\'));\n' +
          '\n' +
          'axios.get(\'http://localhost:8000/find\', {\n' +
          '  headers: form.getHeaders(),\n' +
          '  data: form\n' +
          '})\n' +
          '.then(response => {\n' +
          '  console.log(response.data);\n' +
          '})\n' +
          '.catch(error => {\n' +
          '  console.error(error);\n' +
          '});\n' },
  { label: 'Dart', content: 'import \'dart:io\';\n' +
          'import \'package:http/http.dart\' as http;\n' +
          '\n' +
          'void main() async {\n' +
          '  var request = http.MultipartRequest(\'GET\', Uri.parse(\'http://localhost:8000/find\'));\n' },
];
    const add_tabs: Tab[] = [
        { label: 'cUrl', content: 'curl -X POST http://localhost:8000/add_media -F "file=@path/to/your/media/file"\n' },
        { label: 'Python', content: 'import requests\n' +
                '\n' +
                'url = \'http://localhost:8000/add_media\'\n' +
                'files = {\'file\': open(\'path/to/your/media/file\', \'rb\')}\n' +
                'response = requests.post(url, files=files)\n' +
                'print(response.json())\n' },
        { label: 'Javascript', content: <div>
                <p>const axios = require(&apos;axios&apos;);</p>
                <p>const FormData = require(&apos;form-data&apos;);</p>
                <p>const fs = require(&apos;fs&apos;);</p>
                <br/>
                <p>const form = new FormData();</p>
                <p>form.append(&apos;file&apos;, fs.createReadStream(&apos;path/to/your/media/file&apos;));</p>
                <p>{"axios.post('http://localhost:8000/add_media', form, {"}</p>
                <p>{"    headers: form.getHeaders()"}</p>
                <p>{"    .then(response => {"}</p>
                <p>{"    console.log(response.data);"}</p>
                <p>{"   })"}</p>
                <p>{"    .catch(error => {"}</p>
                <p>{"     console.error(error);"}</p>
                <p>{"});"}</p>
            </div> },
        { label: 'Dart', content: <div>
                <p>import &apos;dart:io&apos;;</p>
                <p>import &apos;package:http/http.dart&apos; as http;</p>
                <br/>
                <p>{"void main() async {"}</p>
                <p>    var request = http.MultipartRequest(&apos;POST&apos;, Uri.parse(&apos;http://localhost:8000/add_media&apos;));</p>
                <br/>
                <p>    var response = await request.send();</p>
                <p>    print(await response.stream.bytesToString());</p>
            </div> },
    ]

    return (
        <>
            <section className="mt-28 md:mt-40 lg:mt-48 xl:mt-52 overflow-y-hidden">
                <div className="my-8 text-[#9e99a6] text-sm font-medium border rounded-lg px-6 py-3 drop-shadow-2xl">
                    How it works
                </div>
                <h1 className="text-center flex items-center justify-center">
                    Works like
                    <span className={`mx-1`}>
                        <svg className={`text-primary hidden md:flex md:w-10 lg:w-14 xl:w-full`} width="54" height="80"
                             viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M26.749 49.358c-.263.124-.521.27-.795.366-4.325 1.52-7.86-.21-9.075-4.604-.515-1.87-.725-3.838-.978-5.774-.327-2.49-.848-3.44-2.095-3.262-1.843.26-1.751 1.79-1.907 3.154-.5 4.4-1.413 8.691-3.433 12.675-.951 1.876-1.967 3.623-4.503 3.532-.838-.027-1.73.188-2.525.485-.564.21-1.332.668-1.424 1.137-.102.496.355 1.467.801 1.65 1.23.507 2.6.652 3.89 1.04 1.069.324 2.39.513 3.084 1.251 1.096 1.165 2.122 2.637 2.52 4.157.612 2.334.671 4.814.967 7.235-.06.011-.113.022-.172.027-.102 1.467-.269 2.928-.296 4.394-.021 1.499.726 2.486 1.86 2.54 1.256.064 1.97-.675 2.33-1.812.12-.372.221-.75.307-1.132 2.069-9.236 6.383-17.172 13.491-23.49.897-.798 1.386-1.742.752-2.841-.628-1.095-1.665-1.246-2.794-.718l-.005-.01zM15.026 63.612c-1.553-2.285-3.095-4.55-4.782-7.03l3.508-7.418c1.086 1.083 2.02 2.302 3.224 3.127 1.241.846 2.75 1.31 4.223 1.973l-6.173 9.348zM51.769 16.034c-.473.021-.93.27-1.402.372-4.164.9-7.5-.712-8.833-4.74-.785-2.371-.924-4.965-1.295-7.466-.145-.96.07-2.016-.236-2.9C39.798.716 38.966.004 38.407 0c-.559-.005-1.257.7-1.644 1.267-.296.431-.194 1.132-.269 1.714-.57 4.292-1.633 8.454-3.546 12.347-1.042 2.124-2.245 4.113-4.862 4.706-1.015.232-2.423 3.04-2.085 4.098.156.48.984 1.148 1.376 1.072 2.874-.566 4.336 1.337 5.7 3.235 1.736 2.42 2.628 5.23 3.009 8.173.22 1.742.28 3.51.467 5.257.172 1.59.92 2.367 2.225 2.286 1.461-.21 1.687-1.499 2.074-2.728 2.455-7.84 6.232-14.956 11.578-21.204.44-.512.924-1.046 1.166-1.66.553-1.402-.344-2.615-1.816-2.54l-.011.01zm-8.623 10.432c-1.166 1.979-2.22 4.027-3.59 6.54-1.541-4.556-3.153-8.524-6.892-10.794 1.746-3.024 3.39-5.87 5.06-8.766 1.124 1.386 2.171 3.17 3.676 4.394 1.456 1.191 3.379 1.806 5.383 2.82-1.123 1.784-2.428 3.763-3.632 5.8l-.005.006z"
                            fill="currentColor"></path></svg>
                    </span>
                    magic
                    <span className={`hidden md:flex`}>
                        <svg className={`text-primary md:w-14 lg:w-16 xl:w-full`} width="72" height="59"
                             viewBox="0 0 72 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M71.354 45.065C70.342 44.01 69.387 42.862 68.22 42a489.485 489.485 0 00-12.163-8.697C38.455 21.121 31.18 15.134 12.222 2.174 9.58.368 9.29.404 7.005 2.618c-.349.34-.67.713-.956 1.108-1.594 2.219-3.17 4.452-4.763 6.67-.757 1.055-.68 2.014.296 2.852 1.55 1.331 3.04 2.764 4.715 3.917 10.941 7.549 40.974 30.301 54.244 39.804 2.34 1.675 2.877 1.835 4.675-.335 2.295-2.768 4.209-5.851 6.236-8.838.303-.453.325-1.1.476-1.654-.212-.408-.32-.812-.574-1.077zM27.225 27.13c-7.451-5.01-14.709-9.891-22.143-14.892l4.866-7.501c7.387 5.15 14.59 10.166 22.08 15.382-1.682 2.457-3.166 4.616-4.803 7.006v.005z"
                            fill="#5550FF"></path></svg>
                    </span>
                </h1>
                <p className={`text-center my-2 text-md md:text-lg lg:px-12`}>
                    Audio and video fingerprinting is a process of extracting unique identifiers from media files, which
                    can be used to recognize and identify them. This project implements fingerprinting for both audio
                    and video files, allowing you to upload a media file, generate fingerprints, and later recognize it
                    by matching against stored fingerprints.
                </p>


                <FingerprintCards/>
                {/*<div*/}
                {/*    className={`mt-16 md:mt-20 lg:mt-28 xl:mt-32 w-full flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-4`}>*/}
                {/*    <div className={`p-4 lg:p-8 border rounded-lg`}>*/}
                {/*        <svg className={`text-primary`} width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                {/*             xmlns="http://www.w3.org/2000/svg">*/}
                {/*            <path d="M12 10v4M15 5v14M6 10v4M9 7v10M18 8v8" stroke="currentColor" strokeWidth="2"*/}
                {/*                  strokeLinecap="round" strokeLinejoin="round"></path>*/}
                {/*        </svg>*/}
                {/*        <h2 className={`text-md md:text-lg mt-1`}>Audio fingerprinting</h2>*/}
                {/*        <p>Audio fingerprinting involves converting an audio signal into a compact digital summary,*/}
                {/*            known as a fingerprint. These fingerprints can be matched against a database to identify the*/}
                {/*            audio. </p>*/}
                {/*        <h2 className={`text-md md:text-lg mt-4 text-primary`}>Processes</h2>*/}
                {/*        <ul>*/}
                {/*            <li className={``}>Audio Preprocessing</li>*/}
                {/*            <li className={`mt-2`}>Spectrogram Generation</li>*/}
                {/*            <li className={`mt-2`}>Peak Detection</li>*/}
                {/*            <li className={`mt-2`}>Hash Generation</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    <div className={`p-4 lg:p-8 border rounded-lg`}>*/}
                {/*        <svg className={`text-primary`} width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                {/*             xmlns="http://www.w3.org/2000/svg">*/}
                {/*            <path clipRule="evenodd"*/}
                {/*                  d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"*/}
                {/*                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                {/*                  strokeLinejoin="round"></path>*/}
                {/*            <path clipRule="evenodd" d="M13.5 14L11 15.5v-3l2.5 1.5z" stroke="currentColor"*/}
                {/*                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>*/}
                {/*            <path d="M5 9h14M7 5l2 4M11 5l2 4M15 5l2 4" stroke="currentColor" strokeWidth="2"*/}
                {/*                  strokeLinecap="round" strokeLinejoin="round"></path>*/}
                {/*        </svg>*/}
                {/*        <h2 className={`text-md md:text-lg mt-1`}>Video fingerprinting</h2>*/}
                {/*        <p>Video fingerprinting is similar but involves extracting unique features from the video*/}
                {/*            frames.*/}
                {/*            These features are then stored and can be matched against a database to identify the*/}
                {/*            video.</p>*/}
                {/*        <h2 className={`text-md md:text-lg mt-4 text-primary`}>Processes</h2>*/}
                {/*        <ul>*/}
                {/*            <li className={``}>Frame Extraction</li>*/}
                {/*            <li className={`mt-2`}>Feature Extraction</li>*/}
                {/*            <li className={`mt-2`}>Hash Generation</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={`mt-16 md:mt-20 lg:mt-28 xl:mt-32 w-full`}>
                    <div className={`flex flex-col items-start`}>
                        <svg className={`text-primary w-14 md:w-16 lg:w-20 xl:w-32`} viewBox="0 0 232 232" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100.835 73.24c10.415 25.932 22.545 49.787 35.188 74.721M100.811 72.274c7.67-18.413 40.696-30.742 59.483-30.812M161.719 42.012c9.874 17.194 18.142 35.35 27.347 52.895 5.608 10.683 11.969 21.048 17.436 31.787M138.076 149.602c12.836-13.5 49.341-29.162 68.156-22.637M100.161 73.109c-20.355-10.75-43.253-16.341-65.558-9.263M34.943 64.222c1.432 5.958 4.76 11.462 7.35 16.97 8.07 17.152 16.749 34.219 24.358 51.568.635 1.444 10.02 21.512 10.542 21.296 9.62-3.919 18.001-5.751 23.887-6.839 11.729-2.175 25.2-3.113 36.595 2.874"
                                stroke="currentColor" strokeWidth="4.833" strokeMiterlimit="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M145.146 153.477c6.051-3.862 24.932-12.834 40.668-15.97 13.509-2.691 24.56-1.496 25.342-1.327.094.019-4.667-5.532-7.52-9.343M37.741 73.484c-2.613.108-4.586.858-6.964 1.824-1.737.708-7.463 3.202-8.226 4.753-1.13 2.306 4.845 10.529 12.43 26.504 2.765 5.832 7.803 15.062 10.586 20.813 2.782 5.757 12.572 24.775 15.693 30.672 1.14 2.151 2.755 6.834 4.958 8.264 1.352.872 3.847-.853 5.03-1.392 4.1-1.866 8.31-3.282 12.665-4.439 11.635-3.085 22.837-5.598 34.909-5.677 4.37-.024 9.639-.094 13.881.998"
                                stroke="currentColor" strokeWidth="4.833" strokeMiterlimit="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M22.288 80.137c-2.62 1.931-7.651 7.965-7.783 8.86-.525 3.478 5.223 12.619 7.59 17.813 4.445 9.755 7.942 16.622 13.465 27.666 5.593 11.176 9.508 19.262 15.49 30.226 1.318 2.41 8.317 15.432 8.73 15.873.857.919 10.08-2.25 15.658-3.61 6.934-1.687 12.546-3.154 22.508-5.784 9.499-2.503 15.378-3.629 30.174-6.643 7.998-1.626 16.61-3.243 24.477-5.414 14.777-4.073 28.626-6.216 43.675-9.131 4.328-.839 19.114-2.916 19.316-3.315 1.031-2.011-3.469-8.447-4.491-10.125"
                                stroke="currentColor" strokeWidth="4.833" strokeMiterlimit="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M21.682 80.754c-3.833 1.664-5.034 1.88-10.849 3.712-.96.305-6.761 1.496-7.143 2.64-.438 1.33 1.45 4.054 1.992 5.207 2.387 5.11 5.876 12.062 8.377 17.11 4.52 9.15 10.73 21.798 13.39 26.621 2.327 4.215 7.662 15.451 9.71 19.768 1.803 3.783 7.33 14.382 12.185 23.443 1.23 2.297 3.805 8.396 7.011 11.115 1.328 1.125 18.976-3.619 29.278-6.202 7.299-1.833 14.578-4.172 21.942-5.705 12.666-2.63 25.337-5.049 37.951-7.96 7.665-1.767 15.322-3.797 23.086-5.119 12.887-2.189 25.417-5.545 38.332-7.678 9.577-1.58 20.972-3.624 21.387-4.43.743-1.453-8.047-14.696-10.957-19.158-3.193-4.889-10.077-14.621-13.424-19.342-6.277-8.845-18.609-30.615-23.915-38.068"
                                stroke="currentColor" strokeWidth="4.833" strokeMiterlimit="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                            <path fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M180.035 76.708s21.41 40.431 24.48 46.014c3.07 5.583 1.139 5.681 1.473 6.085.339.403 9.676 18.085 9.667 18.033-.009-.056-18.853 3.52-27.851 5.26-9.003 1.739-44.83 7.94-53.098 10.369-8.264 2.428-43.45 10.214-53.828 13.148-13.495 3.816-20.643 5.757-21.373 4.149-1.3-2.864-29.273-55.985-33.605-65.538-4.331-9.549-11.046-19.627-10.81-24.418.24-4.795 5.824-8.953 5.824-8.953-1.045.553-4.266 1.776-10.08 3.61-.961.304-6.762 1.495-7.144 2.638-.438 1.331 1.45 4.055 1.992 5.208 2.387 5.11 5.876 12.062 8.377 17.11 4.52 9.15 10.73 21.798 13.39 26.621 2.327 4.215 7.662 15.451 9.71 19.768 1.803 3.783 7.33 14.382 12.185 23.443 1.23 2.297 3.805 8.396 7.011 11.115 1.328 1.125 18.976-3.619 29.278-6.202 7.299-1.833 14.578-4.172 21.942-5.705 12.666-2.63 25.337-5.049 37.951-7.96 7.665-1.767 15.322-3.797 23.086-5.119 12.887-2.189 25.417-5.545 38.332-7.678 9.577-1.58 20.972-3.624 21.387-4.43.743-1.453-8.047-14.696-10.957-19.158-3.193-4.889-10.077-14.621-13.424-19.342-6.277-8.845-23.915-38.068-23.915-38.068z"
                                  fill="currentColor"></path>
                            <path
                                d="M131.281 163.027c.368-6.53 7.119-10.36 13.565-8.85 2.75.642 4.469 2.601 6.122 4.706"
                                stroke="currentColor" strokeWidth="4.833" strokeMiterlimit="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <h1 className={`text-left`}>API documentation</h1>
                        <div
                            className={`mt-8 md:mt-12 lg:mt-14 xl:mt-18 w-full flex flex-col gap-y-12`}>
                            <div>
                                <div>
                                    <h2 className={`text-md md:text-lg lg:text:xl`}><code>find</code> Endpoint (GET):
                                    </h2>
                                    <p>Finds and recognizes a media file by matching it against stored fingerprints.</p>
                                    <p className={`mt-2`}>URL: <code>/find</code></p>
                                    <p className={`mt-2`}>Method: <code>GET</code></p>
                                    <p className={`mt-2`}>Parameters: <code>file</code> (The media file to be
                                        recognized.)</p>
                                    <h2 className={`text-md md:text-lg lg:text:xl mt-6`}>Responses:</h2>
                                    <p className={`mt-2`}><code className={`font-bold`}>200 OK:</code> Media file
                                        recognized and information returned.</p>
                                    <p className={`mt-2`}><code className={`font-bold`}>400 Bad Request:</code>No file
                                        submitted.</p>
                                    <p className={`mt-2`}><code className={`font-bold`}>500 Internal Server
                                        Error:</code> An error occurred during processing.</p>
                                </div>
                            </div>
                            <Tabs tabs={find_tabs}/>
                        </div>

                        <div
                            className={`mt-8 md:mt-12 lg:mt-14 xl:mt-18 w-full flex flex-col gap-y-12`}>
                            <div className={`w-full`}>
                                <h2 className={`text-md md:text-lg lg:text:xl`}><code>add_media</code> Endpoint (GET):</h2>
                                <p>Uploads a media file, generates fingerprints, and stores them in the database.</p>
                                <p className={`mt-2`}>URL: <code>/add_media</code></p>
                                <p className={`mt-2`}>Method: <code>POST</code></p>
                                <p className={`mt-2`}>Parameters: <code>file</code> (The media file to be uploaded.)
                                </p>
                                <h2 className={`text-md md:text-lg lg:text:xl mt-6`}>Responses:</h2>
                                <p className={`mt-2`}><code className={`font-bold`}>200 OK:</code> Media file recognized
                                    and information returned.</p>
                                <p className={`mt-2`}><code className={`font-bold`}>400 Bad Request:</code>No file submitted.</p>
                                <p className={`mt-2`}><code className={`font-bold`}>500 Internal Server Error:</code> An error occurred during processing.</p>
                            </div>
                            <Tabs tabs={add_tabs}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


interface Tab {
    label: string;
    content: React.ReactNode;
}

const Tabs: React.FC<{ tabs: Tab[]; defaultSelectedTab?: number }> = ({tabs, defaultSelectedTab = 0}) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(defaultSelectedTab);

    const handleClick = (index: number) => {
        setSelectedTabIndex(index);
    };

    return (
        <div className="border p-3 rounded-lg bg-[#0C0020] text-white">
            <ul className="tabs-list flex gap-8 border-b p-1">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tabs-list-item ${selectedTabIndex === index ? 'text-primary bg-media_grey rounded-lg font-bold' : ''} px-4 py-2 cursor-pointer`}
                        onClick={() => handleClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tabs-content">
        {tabs.map((tab, index) => (
          <div key={index} className={`tab-panel ${selectedTabIndex === index ? 'active' : 'hidden'}`}>
              <code>{tab.content}</code>
          </div>
        ))}
      </div>
    </div>
  );
};