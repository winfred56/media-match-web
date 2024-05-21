'use client'
import React, { useState, useRef } from 'react';
const MediaUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        console.log(selectedFile)
        if (selectedFile) {
            setFile(selectedFile);
            /// Call Method to upload file straightaway
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        if (!file) {
            setError('Please select a file.');
            setLoading(false);
            return;
        }
        try {
            const formData = new FormData();
            formData.append('file', file as File);
            const response = await fetch('https://media-match-backend.onrender.com/add/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload file.');
            }
            setFile(null);
            setError('');
            setLoading(false);
        } catch (error: any) {
            setError(error.toString());
            setLoading(false);
        }
    };

    const handleButtonClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();  // Programmatically trigger file input click
    }
  };

    return (
        <>
            <form className={`h-72`} action={``} onSubmit={handleSubmit} >
                <input className={`flex flex-row items-center justify-center cursor-pointer`}
                    type="file"
                    accept="audio/* video/*"
                    name="file"
                    onChange={handleFileChange}
                    ref={inputFileRef}
                />
                <button type={'submit'} className={`input-field rounded-3xl bg-blue-700 px-6 py-3 font-bold text-white my-8`}>
                    {loading ? 'Uploading...' : 'Upload media'}
                </button>
            </form>
            {error && <div>Error: {error}</div>}
        </>
    );
};

export default MediaUpload;
