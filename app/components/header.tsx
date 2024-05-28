'use client'
import React, { useRef, useState } from "react";

export default function Header() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [progress, setProgress] = useState<number>(0);
    const [abortController, setAbortController] = useState<AbortController | null>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        console.log(selectedFile);
        if (selectedFile) {
            setFile(selectedFile);
            await handleSubmit(selectedFile);  // Start upload immediately after file is selected
        }
    };

    const handleSubmit = async (selectedFile?: File) => {
        setLoading(true);
        setProgress(0);
        const controller = new AbortController();
        setAbortController(controller);

        if (!selectedFile && !file) {
            setError('Please select a file.');
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', selectedFile || file as File);

            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://media-match-backend.onrender.com/add/');
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentCompleted = Math.round((event.loaded * 100) / event.total);
                    setProgress(percentCompleted);
                }
            };
            xhr.onload = () => {
                if (xhr.status === 200) {
                    setFile(null);
                    setError('');
                    setLoading(false);
                    window.location.reload();
                } else {
                    throw new Error('Failed to upload file.');
                }
            };
            xhr.onerror = () => {
                setError('Failed to upload file.');
                setLoading(false);
            };
            xhr.onabort = () => {
                setError('Upload cancelled.');
                setLoading(false);
            };

            xhr.send(formData);
        } catch (error: any) {
            setError(error.toString());
            setLoading(false);
        }
    };

    const handleCardClick = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };

    const handleCancelUpload = () => {
        if (abortController) {
            abortController.abort();
            setAbortController(null);
            setLoading(false);
        }
    };

    return (
        <div className={`flex flex-col justify-center items-center w-full overflow-hidden`}>
            <div className={`w-[63%] flex flex-row gap-10 items-center justify-center`}>
                <div className={`h-96`}>
                    <h2 className={`text-6xl font-extrabold`}>Add Media For Others <br className={`hidden md:flex`} />To
                        Easily Identify</h2>

                    <h2 className={`flex items-center relative`}>
                        Automatic and 100% free
                    </h2>
                </div>
                <div className={`w-96 mb-12 mt-60`}>
                    <div
                        className={`h-96 p-4 mb-4 drop-shadow-2xl bg-white border-0 rounded-3xl flex flex-col items-center justify-center`}
                        onClick={handleCardClick}
                        style={{ cursor: 'pointer' }}
                    >
                        <div>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="file"
                                    accept="video/*"
                                    name="file"
                                    onChange={handleFileChange}
                                    ref={inputFileRef}
                                    style={{ display: 'none' }}
                                />
                            </form>
                            {error && <div className={`text-red-500 mt-2`}>Error: {error}</div>}
                        </div>
                        {loading ? (
                            <div className={`w-full mt-4`}>
                                <div className={`relative pt-1`}>
                                    <div className={`flex mb-2 items-center justify-between`}>
                                        <div>
                                            <span className={`text-xs font-semibold inline-block py-1 px-4 uppercase rounded-full text-blue-600 bg-blue-200`}>
                                                Uploading {progress}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200`}>
                                        <div style={{ width: `${progress}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600`}></div>
                                    </div>
                                    <button
                                        className={`rounded-3xl text-xs bg-red-700 px-4 py-3 font-bold text-white text-center`}
                                        onClick={handleCancelUpload}
                                    >
                                        Cancel Upload
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                className={`rounded-3xl text-xs bg-blue-700 px-4 py-3 font-bold text-white my-8`}
                                onClick={() => file && handleSubmit(file)}
                                disabled={loading}
                            >
                                {loading ? 'Uploading...' : 'Upload'}
                            </button>
                        )}
                        <p className={`text-xs text-slate-700`}>You can only upload video and audio files</p>
                    </div>
                    <p className={`text-sm`}>By uploading an audio or video you agree to our Terms of Service. To learn
                        more about how we handle your personal data, check our Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}
