export default function PixelNestFitbit() {
    return (
        <div className="mt-[160px] flex items-center justify-center">
            <div className="max-w-[1280px] mx-[24px] text-left content-center grid grid-cols-2 gap-1 text-[#3C4043]">
                <div className="max-h-[604px] max-w-[604px] object-cover">
                    <img src="../images/pixel_nest_fitbit/img-1.png" />
                </div>
                <div className="px-[120px] content-center">
                    <h3 className="text-[40px] leading-tight">
                        Putting sustainability to work.
                    </h3>
                    <div className="mt-6">
                        <label className="text-[16px]">
                            We’re committed to using recycled or renewable material in all Pixel, Nest, and Fitbit products by 2025.
                        </label>
                    </div>
                    <div className="mt-8">
                        <a className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-2 text-[16px]">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}