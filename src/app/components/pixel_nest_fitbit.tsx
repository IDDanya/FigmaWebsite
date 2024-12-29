export default function PixelNestFitbit({
  pixel_nest_fitbit,
}: {
  pixel_nest_fitbit: {
    img: string;
    p_text: string;
    label_text: string;
    a_text: string;
  };
}) {
  return (
    <div className="laptop:mt-[160px] phone:mt-6 flex items-center justify-center">
      <div className="max-w-[1280px] text-left grid tablet:grid-cols-2 phone:grid-cols-1 gap-1 text-[#3C4043]">
        <div className="max-h-[604px] max-w-[604px] content-center object-cover">
          <img src={pixel_nest_fitbit?.img} />
        </div>
        <div className="flex-center py-1 laptop:px-3 phone:px-6 min-h-[400px]">
          <div className="max-w-[390px]">
            <h3 className="laptop:text-[40px] phone:text-[32px] leading-tight">
              {pixel_nest_fitbit?.p_text}
            </h3>
            <div className="mt-6">
              <label className="text-[16px]">
                {pixel_nest_fitbit?.label_text}
              </label>
            </div>
            <div className="mt-8">
              <a className="border-standard px-5 py-2 text-[16px]">
                {pixel_nest_fitbit?.a_text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
