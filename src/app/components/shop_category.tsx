export default function ShopCategory() {
    return(
        <div className="mt-[120px] text-center">
            <label className="text-[40px] text-[#3C4043]">Shop by category.</label>
            <div className="flex items-center justify-center">
                <div className="mt-10 mx-[12px] max-h-[173px] max-w-[237px] object-cover">
                    <img src="../images/shop_category/img-1.png" />
                    <div className="mt-5">
                        <a className="text-[14px]">Cameras</a>
                    </div>
                </div>
                <div className="mt-10 mx-[12px] max-h-[173px] max-w-[237px] object-cover">
                    <img src="../images/shop_category/img-2.png" />
                    <div className="mt-5">
                        <a className="text-[14px]">Doorbells</a>
                    </div>
                </div>
                <div className="mt-10 mx-[12px] max-h-[173px] max-w-[237px] object-cover">
                    <img src="../images/shop_category/img-3.png" />
                    <div className="mt-5">
                        <a className="text-[14px]">Streaming</a>
                    </div>
                </div>
                <div className="mt-10 mx-[12px] max-h-[173px] max-w-[237px] object-cover">
                    <img src="../images/shop_category/img-4.png" />
                    <div className="mt-5">
                        <a className="text-[14px]">Packages</a>
                    </div>
                </div>
            </div>
        </div>
    )
}