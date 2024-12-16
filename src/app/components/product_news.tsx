import "../globals.css";

export default function ProductNews() {
    return (
        <div className="flex items-center justify-center text-center text-[#3C4043] mt-6">
            <div className="bg-[#D6E2DB] max-w-[604px] max-h-[733px] mx-[12px] border-solid rounded-t-3xl">
                <div className="mt-11">
                    <label className="text-[15px]">Pixel Pass</label>
                </div>
                <div className="mt-5 leading-tight text-[40px] px-36">
                    <div>
                        <label>One price for</label>
                    </div>
                    <div>
                        <label>all things Pixel.</label>
                    </div>
                </div>
                <div className="mt-8">
                    <a className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-0.5">Learn more</a>
                </div>
                <div className="mt-8 max-h-[461px] max-w-[604px] object-cover">
                    <img src="../images/product_news/img-1.png" />
                </div>
            </div>
            <div className="bg-[#EFDDCD] max-w-[604px] max-h-[733px] mx-[12px] border-solid rounded-t-3xl">
                <div className="mt-11">
                    <label className="text-[15px]">Switch to Pixel</label>
                </div>
                <div className="mt-5 leading-tight text-[40px] px-36">
                    <label>Here’s what #TeamPixel has to say about it.</label>
                </div>
                <div className="mt-8">
                    <a className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-0.5">Learn more</a>
                </div>
                <div className="mt-8 max-h-[411px] max-w-[604px] object-cover">
                    <img src="../images/product_news/img-2.png" />
                </div>
            </div>
        </div>
    )
}