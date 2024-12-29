export default function ProductAccessory({
  prod_access,
}: {
  prod_access: {
    p_text: string;
    label_text: string[];
    a_text: string;
    img: {
      src: string;
      height: string;
      bg: string;
      mt: string;
    };
  }[];
}) {
  return (
    <div className="tablet:mt-[120px] phone:mt-6 phone:grid phone:grid-cols-1 tablet:flex items-center justify-center text-center text-[#3C4043]">
      {prod_access.map((items) => (
        <div
          className={`grid grid-cols-1 content-between ${items?.img?.bg} tablet:max-w-[604px] laptop:h-[733px] tablet:h-[650px] phone:h-[600px] mx-[12px] phone:mt-6 tablet:mt-0 border-solid rounded-t-3xl`}
        >
          <div>
            <div className="mt-11">
              <label className="text-[16px]">{items?.p_text}</label>
            </div>
            <div className="mt-5 leading-tight laptop:text-[40px] phone:text-[32px]">
              {items?.label_text.map((item) => (
                <div>
                  <label>{item}</label>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a className="border-standard px-5 py-0.5 text-[16px]">
                {items?.a_text}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className={`${items?.img?.mt} max-h-[${items?.img?.height}] phone:max-w-[400px] tablet:max-w-[604px] object-cover`}
            >
              <img className="" src={items?.img?.src} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
