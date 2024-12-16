interface PropsProducts {
    img: string;
    a_text: string;
    title: string;
    title_two: string;
    subtitle: string;
}[];

const Products: React.FC<PropsProducts> = ({
    production
}) => {
    return(
        <div className="mt-[80px] flex items-center justify-center text-[#3C4043]">
            {production.map (items => (
                <div className="bg-[#E9E3DB] max-h-[692px] max-w-[395px] mx-[12px] text-center border-solid rounded-3xl">
                    <div className="mt-5">
                        <label className="text-[16px]">{items?.subtitle}</label>
                    </div>
                    <div className="mt-5 leading-tight text-[40px] px-1 text-center">
                        <div>
                            <label>{items?.title}</label>
                        </div>
                        <div>
                            <label>{items?.title_two}</label>
                        </div>
                    </div>
                    <div className="mt-11">
                        <a className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-0.5">{items?.a_text}</a>
                    </div>
                    <div className="max-h-[460px] max-w-[395px] object-cover">
                        <img src={items?.img} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products