interface PropsProducts {
  product: {
    img: string;
    a_text: string;
    title: string;
    title_two: string;
    subtitle: string;
  }[];
}

const Products: React.FC<PropsProducts> = ({ product }) => {
  return (
    <div className="laptop:mt-[80px] phone:mt-0 flex-center text-[#3C4043]">
      <div className="phone:grid phone:grid-cols-1 tablet:flex">
        {product.map((item) => (
          <div className="grid grid-cols-1 content-between bg-[#E9E3DB] laptop:h-[692px] laptop:max-w-[395px] phone:max-w-[400px] mx-[12px] phone:mt-6 laptop:mt-0 text-center border-solid rounded-3xl">
            <div>
              <div className="mt-5">
                <label className="text-[16px]">{item?.subtitle}</label>
              </div>
              <div className="mt-5 leading-tight laptop:text-[40px] phone:text-[32px] px-1 text-center">
                <div>
                  <label>{item?.title}</label>
                </div>
                <div>
                  <label>{item?.title_two}</label>
                </div>
              </div>
            </div>
            <div className="mt-11">
                <a className="border-standard px-5 py-0.5 text-[16px]">{item?.a_text}</a>
            </div>
            <div className="max-h-[460px] max-w-[395px] object-cover">
              <img src={item?.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
