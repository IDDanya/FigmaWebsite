import Header from "./header";
import ProductAdvertising from "./product_advertising";
import ProductSelect from "./product_select";
import HolidaySeason from "./holiday_season";
import Products from "./products";
import ProductNews from "./product_news";
import ShopCategory from "./shop_category";
import ProductAccessory from "./product_accessory";
import PixelNestFitbit from "./pixel_nest_fitbit";

const headers = {
  news: "Free shipping. Simple returns. Holiday shopping has never been easier. Shop now.",
  img: "../images/icons/google-img.png",
  text: [
    "Phones",
    "Earbuds",
    "Watches",
    "Smart Home",
    "Laptops",
    "Accessories",
    "Subscriptions",
    "Offers",
  ],
  img_header: [
    {
      img: "../images/icons/img-4.png",
      href: "http://localhost:3000/",
    },
    {
      img: "../images/icons/img-3.png",
      href: "http://localhost:3000/",
    },
    {
      img: "../images/icons/img-2.png",
      href: "http://localhost:3000/",
    },
    {
      img: "../images/icons/img-1.png",
      href: "http://localhost:3000/",
    },
  ],
};

const product_advertising = {
  p_text: "Inhale. Gift. Exhale.",
  label_text:
    "The gifts you need, stress-free. Shop the best of Google with ease.",
  button: "Browse deals",
  link_guide: "Browse the gift guide",
};

const product_select = {
  p_text: "Sneak a peek. For you or for them.",
  products: [
    {
      img: "../images/product_select/img-1.png",
      a_text: "New",
      text_product: "Google Pixel Watch",
    },
    {
      img: "../images/product_select/img-2.png",
      a_text: "New",
      text_product: "Pixel 7 Pro",
    },
    {
      img: "../images/product_select/img-3.png",
      a_text: "New",
      text_product: "Pixel 7",
    },
    {
      img: "../images/product_select/img-4.png",
      text_product: "Pixel Buds Pro",
    },
    {
      img: "../images/product_select/img-5.png",
      a_text: "New",
      text_product: "Nest Doorbells",
    },
    {
      img: "../images/product_select/img-6.png",
      a_text: "New",
      text_product: "Nest Wifi Pro",
    },
  ],
};

const holiday_season = {
  p_text: "This holiday season, Google Pixel is giving back.",
  label_text:
    "We're contributing $1 million to the NBA Foundation to help advance HBCU students in their careers across STEM, sports, and media industries.",
  img: "../images/holiday_season/img-1.png",
  a_text: "Learn more",
};

const production = {
  product: [
    {
      img: "../images/products/img-1.png",
      a_text: "Learn more",
      title: "Help by Google.",
      title_two: "Health by Fitbit.",
      subtitle: "Google Pixel Watch",
    },
    {
      img: "../images/products/img-2.png",
      a_text: "Learn more",
      title: "The better way",
      title_two: "to Wi-Fi.",
      subtitle: "Nest Wifi Pro with Wi-Fi 6E",
    },
    {
      img: "../images/products/img-3.png",
      a_text: "Learn more",
      title: "Know more.",
      title_two: "No charging.",
      subtitle: "Nest Doorbell (wired)",
    },
  ],
};

const category = {
  p_text: "Shop by category.",
  text: ["Cameras", "Doorbells", "Streaming", "Packages"],
};

const product_news = {
  prod_news: [
    {
      p_text: "Pixel Pass",
      label_text: ["One price for", "all things Pixel."],
      a_text: "Learn more",
      img: {
        src: "../images/product_news/img-1.png",
        height: "461px",
        bg: "bg-[#D6E2DB]",
      },
    },
    {
      p_text: "Switch to Pixel",
      label_text: ["Here’s what #TeamPixel has to say about it."],
      a_text: "Learn more",
      img: {
        src: "../images/product_news/img-2.png",
        height: "411px",
        bg: "bg-[#EFDDCD]",
      },
    },
  ],
};

const product_accessory = {
  prod_access: [
    {
      p_text: "Watches",
      label_text: ["Keep moving.", "Keep improving."],
      a_text: "Explore watches",
      img: {
        src: "../images/product_accessory/img-1.png",
        height: "461px",
        bg: "bg-[#F3F2F1]",
        mt: "mt-[30px]",
      },
    },
    {
      p_text: "Earbuds",
      label_text: ["Great sound.", "All around."],
      a_text: "Explore watches",
      img: {
        src: "../images/product_accessory/img-2.png",
        height: "420px",
        bg: "bg-[#E7EBEE]",
        mt: "mt-[72px]",
      },
    },
  ],
};

const pixel_nest_fitbit = {
  img: "../images/pixel_nest_fitbit/img-1.png",
  p_text: "Putting sustainability to work.",
  label_text:
    "We’re committed to using recycled or renewable material in all Pixel, Nest, and Fitbit products by 2025.",
  a_text: "Learn more",
};

export {
  Header,
  ProductAdvertising,
  ProductSelect,
  HolidaySeason,
  Products,
  ProductNews,
  ShopCategory,
  ProductAccessory,
  PixelNestFitbit,
};

export {
  headers,
  holiday_season,
  pixel_nest_fitbit,
  product_accessory,
  product_advertising,
  product_news,
  product_select,
  production,
  category,
};
