interface PropsProduct {
  p_text: string;
  label_text: string;
  button: string;
  link_guide: string;
}

export default function ProductAdvertising({
  product_advertising,
}: {
  product_advertising: PropsProduct;
}) {
  return (
    <div
      className="flex flex-col bg-cover laptop:h-[600px] tablet:h-[400px] phone:h-[250px]"
      style={{
        backgroundImage: 'url("../images/product_advertising/img-1.png")',
      }}
    >
      <div className="tablet:text-[57px] laptop:ml-[129px] laptop:mt-[164px] tablet:max-w-[350px] tablet:ml-[70px] tablet:mt-[50px] phone:ml-[20px] phone:mt-[40px] phone:max-w-[225px] phone:text-[32px] text-[#3C4043] leading-none">
        <p>{product_advertising?.p_text}</p>
        <div className="tablet:mt-8 phone:mt-4 text-[16px] leading-normal">
          <label>{product_advertising?.label_text}</label>
        </div>
      </div>
      <div className="laptop:ml-[129px] tablet:ml-[70px] phone:ml-[20px] mt-4 text-[#3C4043]">
        <button className="border-standard tablet:px-5 tablet:py-2 phone:px-1 phone:py-0.5 text-[16px]">
          {product_advertising?.button}
        </button>
        <a className="tablet:px-7 phone:px-2 text-[16px]">{product_advertising?.link_guide}</a>
      </div>
    </div>
  );
}
