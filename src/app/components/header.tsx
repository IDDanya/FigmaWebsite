interface PropsHeader {
    news?: string
    img?: string
    text: string[]
    img_header: {
        img: string;
        href: string;
    }[];
}

const Header: React.FC<PropsHeader> = ({
    news,
    img,
    text,
    img_header
}) => {
    return (
        <header>
            <div className="flex items-center justify-center bg-blue-500 text-white text-[16px] h-[54px]">
                <label>{news}</label>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[14px] h-[56px] font-['Arial'] text-[#3C4043]">
                <div className="flex col-span-3 items-center justify-start">
                    <img className="h-[24px] w-[24px] ml-[8px]" src={img} />
                    {text.map (item => (
                        <div className="px-2">
                            <a>{item}</a>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-end">
                    {img_header.map (items => (
                        <div className="mr-[20px]">
                            <a href={items?.href}><img className="h-[24px] w-[24px] p-0.5" src={items?.img} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </header>
	);
}

export default Header