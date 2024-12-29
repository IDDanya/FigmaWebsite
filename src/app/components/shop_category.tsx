export default function ShopCategory({
  p_text,
  text,
}: {
  p_text: string;
  text: string[];
}) {
  const img = text.map(
    (item, i) => (item = `../images/shop_category/img-${i + 1}.png`)
  );
  return (
    <div className="tablet:mt-[120px] phone:mt-6 text-center">
      <p className="laptop:text-[40px] phone:text-[32px] text-[#3C4043]">{p_text}</p>
      <div className="flex-center">
        {text.map((items, i) => (
          <div className="mt-10 mx-[12px] max-h-[173px] max-w-[237px] object-cover">
            <img src={img[i]} />
            <div className="mt-5">
              <a className="text-[14px]">{items}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
