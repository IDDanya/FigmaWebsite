interface PropsHolidaySeason {
  p_text: string;
  label_text: string;
  img: string;
  a_text: string;
}

export default function HolidaySeason({
  holiday_season,
}: {
  holiday_season: PropsHolidaySeason;
}) {
  return (
    <div className="laptop:mt-[80px] phone:mt-6 phone:mx-2 flex-center">
      <div className="max-w-[1232px] bg-[#F8F9FA] text-left content-center grid laptop:grid-cols-2 phone:grid-cols-1 gap-1 border-solid rounded-3xl text-[#3C4043]">
        <div className="tablet:max-h-[616px] tablet:max-w-[616px] phone:max-h-[400px] phone:max-w-[400px] object-cover">
          <img src={holiday_season?.img} />
        </div>
        <div className="flex items-center justify-center py-1 px-3 phone:min-h-[400px]">
          <div className="tablet:max-w-[370px] phone:max-w-[350px]">
            <p className="tablet:text-[32px] phone:text-[24px] tablet:max-w-[350px] phone:max-w-[300px]">{holiday_season?.p_text}</p>
            <div className="mt-8">
              <label className="text-[16px]">{holiday_season?.label_text}</label>
            </div>
            <div className="mt-8">
              <a className="text-[16px]">{holiday_season?.a_text}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
