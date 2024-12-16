interface PropsProduct {
    p_text: string;
    label_text: string;
    button: string;
    link_guide: string;
}

export default function ProductAdvertising({product_advertising} : {product_advertising : PropsProduct}) {
	return (
        <div className="flex bg-cover h-[600px]" style={{ backgroundImage: 'url("../images/product_advertising/img-1.png")' }}>
            <div className="text-[57px] ml-[129px] mt-[164px] max-w-[350px] text-[#3C4043] leading-none">
                <p>{product_advertising?.p_text}</p>
                <div className="mt-8 text-[16px] leading-normal">
                    <label>{product_advertising?.label_text}</label>
                </div>
                <div className="mt-4">
                    <button className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-2 text-[16px]">
                        {product_advertising?.button}
                    </button>
                    <a className="px-7 text-[16px]">
                        {product_advertising?.link_guide}
                    </a>
                </div>
            </div>
        </div>
    )
}