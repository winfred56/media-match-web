'use client'
import React, {useRef, useState} from 'react';
import {toast} from "sonner";

const Modal = ({isVisible, onClose, message}: {
    isVisible: boolean,
    onClose: () => void,
    message: string,

}) => {
    if (!isVisible) return null;
    return (
        <div
            className="fixed inset-0 flex items-center justify-center text-black bg-opacity-50 bg-black overflow-y-auto h-full w-full">
            <div className="bg-white p-6 rounded-lg shadow-lg mx-auto border w-96">
                <div className="mt-3 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                    <h2 className="text-lg md:text-xl mt-2 text-black leading-6 font-medium mb-4">Success</h2>
                </div>
                <p className={`text-center`}>{message}</p>
                <div className="text-xs md:text-sm items-center px-4 py-3">
                    <button id="ok-btn" onClick={onClose} className="mt-4 px-4 py-2 bg-primary cta-btn text-white
                            text-base font-medium rounded-md w-full
                            shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
                        OK
                    </button>

                </div>
            </div>
        </div>
    );
};

const MediaUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [progress, setProgress] = useState<number>(0);
    const [abortController, setAbortController] = useState<AbortController | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
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
                    setModalVisible(true);
                    setFile(null);
                    setError('');
                    setLoading(false);
                    setProgress(0);
                    setAbortController(null);
                    abortController?.abort();
                } else {
                    throw new Error('Failed to upload file.');
                }
            };
            xhr.onerror = () => {
                setError('Failed to upload file.');
                setLoading(false);
                toast.error('Failed to upload file.');
            };
            xhr.onabort = () => {
                setError('Upload cancelled.');
                setLoading(false);
                toast.error('Upload cancelled.');
            };

            xhr.send(formData);
        } catch (error: any) {
            setError(error.toString());
            setLoading(false);
            toast.error('An error occurred. Please try again.');
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
            window.location.reload();
        }
    };

    return (
        <>
            <div
                className={`h-fit w-fit xl:px-32 xl:py-6 p-4 mb-4 drop-shadow-2xl bg-transparent border-2 border-dashed border-[#4B4B4B] rounded-3xl flex flex-col items-center justify-center`}
                onClick={handleCardClick}
                style={{cursor: 'pointer'}}
            >
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="file"
                            accept="audio/* video/*"
                            name="file"
                            onChange={handleFileChange}
                            ref={inputFileRef}
                            style={{display: 'none'}}
                        />
                    </form>
                    {error && <div className={`text-red-500 mt-2`}>Error: {error}</div>}
                </div>
                {loading ? (
                    <div className={`w-full mt-4`}>
                        <div className={`relative pt-1`}>
                            <div className={`flex mb-2 items-center justify-between`}>
                                <div>
                                    <span
                                        className={`text-xs font-semibold inline-block py-1 px-4 uppercase rounded-full text-blue-600 bg-blue-200`}>
                                        Uploading {progress}%
                                    </span>
                                </div>
                            </div>
                            <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200`}>
                                <div style={{width: `${progress}%`}}
                                     className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600`}></div>
                            </div>
                            <button
                                className={`rounded-3xl text-xs bg-red-700 px-4 py-3 btn cta-btn text-center`}
                                onClick={handleCancelUpload}
                            >
                                Cancel Upload
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        className={`cta-btn btn`}
                        onClick={() => file && handleSubmit(file)}
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                )}
                <p className={`text-xs text-slate-700`}>You can only upload video and audio files</p>
            </div>
            <Modal
                isVisible={modalVisible}
                onClose={() => {
                    setModalVisible(false);
                    window.location.reload();
                }}
                message="Media file uploaded successfully to our database! People can now easily match this file"
            />
        </>
    );
};

export default MediaUpload;
