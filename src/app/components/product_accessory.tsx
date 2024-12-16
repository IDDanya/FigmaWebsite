export default function ProductAccessory() {
    return(
        <div className="mt-[120px] flex items-center justify-center text-center text-[#3C4043]">
            <div className="bg-[#F3F2F1] max-w-[604px] max-h-[733px] mx-[12px] border-solid rounded-t-3xl">
                <div className="mt-11">
                    <label className="text-[16px]">Watches</label>
                </div>
                <div className="mt-5 leading-tight text-[40px] px-36">
                    <div>
                        <label>Keep moving.</label>
                    </div>
                    <div>
                        <label>Keep improving.</label>
                    </div>
                </div>
                <div className="mt-8">
                    <a className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-0.5 text-[16px]">Explore watches</a>
                </div>
                <div className="mt-8 max-h-[461px] max-w-[604px] object-cover">
                    <img src="../images/product_accessory/img-1.png" />
                </div>
            </div>
            <div className="bg-[#E7EBEE] max-w-[604px] max-h-[733px] mx-[12px] border-solid rounded-t-3xl">
                <div className="mt-11">
                    <label className="text-[16px]">Earbuds</label>
                </div>
                <div className="mt-5 leading-tight text-[40px] px-36">
                    <div>
                        <label>Great sound.</label>
                    </div>
                    <div>
                        <label>All around.</label>
                    </div>
                </div>
                <div className="mt-8">
                    <a className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-0.5 text-[16px]">Explore watches</a>
                </div>
                <div className="mt-[72px] max-h-[420px] max-w-[604px] object-cover">
                    <img src="../images/product_accessory/img-2.png" />
                </div>
            </div>
        </div>
    )
}