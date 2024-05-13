'use client'
import React, {useRef, useState} from 'react';

const MediaUpload = () => {
    const[file, setFile] = useState<File>()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!file) return
        try{
            const data = new FormData()
            data.set("file", file)
            const response = await fetch("https://media-match-backend.onrender.com/add/", {
                method: "POST",
                body: data
            })
            if(!response.ok) throw new Error(await response.text())
        } catch (e:any){
            console.error(e.toString())
        }
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="file" accept="audio/*, video/*" name="file"
                   onChange={(event) => setFile(event.target.files?.[0])}/>
            <input type={`submit`} value={`upload`}/>
        </form>


      {/*<button*/}
      {/*  className={`rounded-3xl bg-blue-700 px-6 py-3 font-bold text-white my-8`}*/}
      {/*  // onClick={()=>fileInputRef.current} // Trigger file input dialog on button click*/}
      {/*>*/}
      {/*  Upload Media*/}
      {/*</button>*/}
    </div>
  );
};

export default MediaUpload;
