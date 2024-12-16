interface PropsHolidaySeason {
    p_text: string;
    label_text: string;
    img: string;
    a_text: string;
}

export default function HolidaySeason({holiday_season} : {holiday_season : PropsHolidaySeason}) {
    return (
        <div className="mt-[80px] flex items-center justify-center">
            <div className="max-w-[1232px] bg-[#F8F9FA] text-left content-center grid grid-cols-2 gap-1 border-solid rounded-3xl text-[#3C4043]">
                <div className="max-h-[616px] max-w-[616px] object-cover">
                    <img src={holiday_season?.img} />
                </div>
                <div className="px-28 content-center">
                    <p className="text-[32px]">
                        {holiday_season?.p_text}
                    </p>
                    <div className="mt-8">
                        <label className="text-[16px]">
                            {holiday_season?.label_text}
                        </label>
                    </div>
                    <div className="mt-8">
                        <a className="text-[16px]">
                            {holiday_season?.a_text}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}