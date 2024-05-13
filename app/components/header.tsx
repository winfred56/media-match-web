import MediaUpload from "@/app/components/upload_button";

export default function Header() {

    return (
        <div className={`flex flex-col justify-center items-center w-full overflow-hidden`}>
            <div className={`w-[63%] flex flex-row gap-10 items-center justify-center`}>
                <div className={`h-96`}>
                    <h2 className={`text-6xl font-extrabold`}>Add Media For Others <br className={`hidden md:flex`}/>To
                        Easily Identify</h2>

                    <h2 className={`flex items-center relative`}>
                        Automatic and 100% free
                    </h2>
                </div>
                <div className={`w-96 mb-12 mt-60`}>
                    <div
                        className={`h-96 p-4 mb-4 drop-shadow-2xl bg-white border-0 rounded-3xl flex flex-col items-center justify-center`}>
                        <MediaUpload/>
                        <button className={`rounded-3xl bg-blue-700 px-6 py-3 font-bold text-white my-8`}>Upload media
                        </button>
                        <p className={`text-xs text-slate-700`}>You can only upload video and audio files</p>
                    </div>
                    <p className={`text-sm`}>By uploading an audio or video you agree to our Terms of Service. To learn
                        more about how we handles your personal data, check our Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}