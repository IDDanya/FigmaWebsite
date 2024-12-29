interface PropsProductSelect {
  p_text: string;
  products: (
    | {
        img: string;
        a_text: string;
        text_product: string;
      }
    | {
        img: string;
        text_product: string;
        a_text?: undefined;
      }
  )[];
}

const ProductSelect: React.FC<PropsProductSelect> = ({ p_text, products }) => {
  return (
    <div className="laptop:mt-[80px] phone:mt-12">
      <div className="flex justify-center text-[#3C4043]">
        <p>{p_text}</p>
      </div>
      <div className="overflow-x-auto flex items-center justify-left p-3 laptop:ml-[117px] phone:ml-6 scrollbar">
        {products.map((items) => (
          <div className="ml-6 mt-10">
            <div className="relative">
              <div className="absolute mt-[28px] ml-[28px] text-[12px]">
                <a>{items?.a_text}</a>
              </div>
              <div className="flex items-center h-[254px] bg-[#F8F9FA] border-solid rounded-2xl">
                <div className="h-[214px] w-[183px]">
                  <img src={items?.img} />
                </div>
              </div>
            </div>
            <div className="mt-5 mb-5 text-[16px]">
              <label>{items?.text_product}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelect;
