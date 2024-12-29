import "../globals.css";

export default function ProductNews({
  prod_news,
}: {
  prod_news: {
    p_text: string;
    label_text: string[];
    a_text: string;
    img: {
      src: string;
      height: string;
      bg: string;
    };
  }[];
}) {
  return (
    <div className="flex items-center justify-center text-center text-[#3C4043] tablet:mt-6">
      <div className="phone:grid phone:grid-cols-1 phone:content-center tablet:flex">
        {prod_news.map((items) => (
          <div
            className={`grid grid-cols-1 content-between ${items?.img?.bg} tablet:max-w-[604px] laptop:h-[733px] tablet:h-[650px] phone:max-w-[400px] mx-[12px] phone:mt-6 tablet:mt-0 border-solid rounded-t-3xl`}
          >
            <div>
              <div className="mt-11">
                <label className="text-[15px]">{items?.p_text}</label>
              </div>
              <div className="mt-5 leading-tight laptop:text-[40px] phone:text-[32px] px-3 flex justify-center">
                <div className="max-w-[330px]">
                {items?.label_text.map((item) => (
                  <div>
                    <label>{item}</label>
                  </div>
                ))}
                </div>
              </div>
              <div className="mt-8">
                <a className="border-solid border-2 rounded-md border-[#5F6368] px-5 py-0.5">
                  {items?.a_text}
                </a>
              </div>
            </div>
            <div
              className={`mt-8 max-h-[${items?.img?.height}] max-w-[604px] object-cover`}
            >
              <img src={items?.img?.src} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
