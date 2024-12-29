import "./globals.css";
import {
  Header,
  HolidaySeason,
  ProductAdvertising,
  ProductSelect,
  Products,
  ProductNews,
  ShopCategory,
  ProductAccessory,
  PixelNestFitbit,
} from "./components/.";

import {
  headers,
  holiday_season,
  pixel_nest_fitbit,
  product_accessory,
  product_advertising,
  product_news,
  product_select,
  production,
  category,
} from "./components/.";

export default function Main() {
  return (
    <div>
      <Header
        text={headers?.text}
        news={headers?.news}
        img={headers?.img}
        img_header={headers?.img_header}
      />
      <ProductAdvertising product_advertising={product_advertising} />
      <ProductSelect
        p_text={product_select?.p_text}
        products={product_select?.products}
      />
      <HolidaySeason holiday_season={holiday_season} />
      <Products product={production?.product} />
      <ProductNews prod_news={product_news?.prod_news} />
      <ShopCategory p_text={category?.p_text} text={category?.text} />
      <ProductAccessory prod_access={product_accessory?.prod_access} />
      <PixelNestFitbit pixel_nest_fitbit={pixel_nest_fitbit} />
    </div>
  );
}
