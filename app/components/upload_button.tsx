'use client'
import React, {useEffect, useRef, useState} from 'react';
import {toast} from 'sonner';
import SuccessModal from "@/app/components/modal";
import {apiEndpoint} from "@/app/components/api_endpoint";
export default function UploadButton(){
    // State to store the selected file
    const [file, setFile] = useState<File | null>(null);

    // State to track the loading status
    const [loading, setLoading] = useState<boolean>(false);

    // State to store any error messages
    const [error, setError] = useState<string>('');

    // State to track the upload progress
    const [progress, setProgress] = useState<number>(0);

    // State to store the AbortController for cancelling the upload
    const [abortController, setAbortController] = useState<AbortController | null>(null);

    // State to control the visibility of the modal
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    // State to control dragging and dropping
    const [isDragging, setIsDragging] = useState<boolean>(false);

    // Ref to access the file input element
    const inputFileRef = useRef<HTMLInputElement>(null);

    // useEffect hook to add a keydown event listener on letter B
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check if the 'B' key is pressed
            if (event.key.toLowerCase() === 'u') {
                // Simulate a click on the file input element
                inputFileRef.current?.click();
            }
        };

        // Add event listener for 'keydown'
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Handler for file input change event
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            // Set the selected file and start the upload process
            setFile(selectedFile);
            await handleSubmit(selectedFile);
        }
    };

    // Handler for file upload submission
    const handleSubmit = async (selectedFile?: File) => {
        // Set loading state and initialize progress
        setLoading(true);
        setProgress(0);
        const controller = new AbortController();
        setAbortController(controller);

        // Check if a file is selected
        if (!selectedFile && !file) {
            setError('Please select a file.');
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', selectedFile || (file as File));

            // Create a new XMLHttpRequest for file upload
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `${apiEndpoint}/add/`);

            // Track the upload progress
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentCompleted = Math.round((event.loaded * 100) / event.total);
                    setProgress(percentCompleted);
                }
            };

            // Handle successful upload response
            xhr.onload = () => {
                if (xhr.status === 200) {
                    setModalVisible(true);
                    setFile(null);
                    setError('');
                } else {
                    handleError('Failed to upload file.');
                }
                setLoading(false);
                setProgress(0);
                setAbortController(null);
            };

            // Handle upload error
            xhr.onerror = () => handleError('Failed to upload file.');

            // Handle upload cancellation
            xhr.onabort = () => handleError('Upload cancelled.');

            // Send the form data
            xhr.send(formData);
        } catch (error: any) {
            handleError('An error occurred. Please try again.');
        }
    };

    // Function to handle errors
    const handleError = (message: string) => {
        setError(message);
        setLoading(false);
        toast.error(message);
    };

    // Handler for card click event to trigger file input click
    const handleCardClick = () => {
        inputFileRef.current?.click();
    };

    // Handler to cancel the ongoing upload
    const handleCancelUpload = () => {
        if (abortController) {
            abortController.abort();
            setAbortController(null);
            setLoading(false);
            window.location.reload();
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // Function to Handle file drop
    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const selectedFile = event.dataTransfer.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            await handleSubmit(selectedFile);
        }
    };


    return (
        <>
            <div
                className="my-8 bg-transparent flex flex-col items-center justify-center"
                onClick={handleCardClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
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
                    {error && <div className="text-red-500 mt-2">Error: {error}</div>}
                </div>
                {loading ? (
                    <div className="w-full mt-4">
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                  <span
                      className="text-xs font-semibold inline-block py-1 px-4 uppercase rounded-full text-blue-600 bg-blue-200">
                    Uploading {progress}%
                  </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                <div
                                    style={{width: `${progress}%`}}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                ></div>
                            </div>
                            <button
                                className="rounded-lg text-xs bg-red-700 px-12 lg:px-40 py-4 lg:py-4 btn cta-btn text-white font-medium lg:text-2xl"
                                onClick={handleCancelUpload}
                            >
                                Cancel Upload
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        className={`btn cta-btn my-4 px-16 lg:px-44 py-3 lg:py-4 bg-primary text-white text-xl font-medium lg:text-2xl rounded-lg`}
                        onClick={() => file && handleSubmit(file)}
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                )}
            </div>
            <SuccessModal
                isVisible={modalVisible}
                onClose={() => {
                    setModalVisible(false);
                    window.location.reload();
                }}
                message="Media file uploaded successfully to our database! People can now easily match this file."
            />
        </>
    );
}