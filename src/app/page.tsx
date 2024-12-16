import "./globals.css";
import {
  Header,
  HolidaySeason, 
  ProductAdvertising, 
  ProductSelect, Products, 
  ProductNews, ShopCategory, 
  ProductAccessory, 
  PixelNestFitbit 
} from './components/.';


export default function Main() {
  
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
      "Offers"
    ],
    img_header: [
      {
        img: "../images/icons/img-4.png",
        href:"http://localhost:3000/"
      },
      {
        img: "../images/icons/img-3.png",
        href:"http://localhost:3000/"
      },
      {
        img: "../images/icons/img-2.png", 
        href:"http://localhost:3000/"
      },
      {
        img: "../images/icons/img-1.png", 
        href:"http://localhost:3000/"
      }
    ]
  }

  const product_advertising = {
    p_text: "Inhale. Gift. Exhale.",
    label_text: "The gifts you need, stress-free. Shop the best of Google with ease.",
    button: "Browse deals",
    link_guide: "Browse the gift guide"
  }

  const product_select = {
    p_text: "Sneak a peek. For you or for them.",
    products: [
      {
        img: "../images/product_select/img-1.png",
        a_text: "New",
        text_product: "Google Pixel Watch"
      },
      {
        img: "../images/product_select/img-2.png",
        a_text: "New",
        text_product: "Pixel 7 Pro"
      },
      {
        img: "../images/product_select/img-3.png",
        a_text: "New",
        text_product: "Pixel 7"
      },
      {
        img: "../images/product_select/img-4.png",
        text_product: "Pixel Buds Pro"
      },
      {
        img: "../images/product_select/img-5.png",
        a_text: "New",
        text_product: "Nest Doorbells"
      },
      {
        img: "../images/product_select/img-6.png",
        a_text: "New",
        text_product: "Nest Wifi Pro"
      },
    ]
  }

  const holiday_season = {
    p_text: "This holiday season, Google Pixel is giving back.",
    label_text: "We're contributing $1 million to the NBA Foundation to help advance HBCU students in their careers across STEM, sports, and media industries.",
    img: "../images/holiday_season/img-1.png",
    a_text: "Learn more"
  }

  const production = [
    {
      img: "../images/products/img-1.png",
      a_text: "Learn more",
      title: "Help by Google.",
      title_two: "Health by Fitbit.",
      subtitle: "Google Pixel Watch"
    },
    {
      img: "../images/products/img-2.png",
      a_text: "Learn more",
      title: "The better way",
      title_two: "to Wi-Fi.",
      subtitle: "Nest Wifi Pro with Wi-Fi 6E"
    },
    {
      img: "../images/products/img-3.png",
      a_text: "Learn more",
      title: "Know more.",
      title_two: "No charging.",
      subtitle: "Nest Doorbell (wired)"
    }
  ]

  return (
    <div>
      <Header 
        text={headers?.text} 
        news={headers?.news} 
        img={headers?.img}
        img_header={headers?.img_header}
      />
      <ProductAdvertising 
        product_advertising={product_advertising} 
      />
      <ProductSelect 
        p_text={product_select?.p_text}
        products={product_select?.products} 
      />
      <HolidaySeason
        holiday_season={holiday_season}
       />
      <Products 
        production={production}
      />
      <ProductNews />
      <ShopCategory />
      <ProductAccessory />
      <PixelNestFitbit />
    </div>
  );
}
