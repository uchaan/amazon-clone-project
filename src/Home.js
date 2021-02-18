import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="SAMSUNG SM-T290NZKAXAR, Galaxy Tab A 8.0 32 GB Wifi Android 9.0 Pie Tablet Black 2019"
            price={119.99}
            image="https://m.media-amazon.com/images/I/41UPtXbP4LL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="38911812"
            title="
            Rii RK907 Ultra-Slim Compact USB Wired Keyboard for Mac and PC,Windows 10/8 / 7 / Vista/XP (Black)
            "
            price={10.99}
            image="https://m.media-amazon.com/images/I/61Utx1xPgML._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49385561"
            title="
            Logitech G502 Hero High Performance Gaming Mouse
            "
            price={48.33}
            image="https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY436_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="58774485"
            title="
            Amazon Basics Rubber Encased Hex Dumbbell Hand Weight
            "
            price={42.99}
            image="https://m.media-amazon.com/images/I/81YvGI3D0HL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="94853932"
            title="
            Black+Decker TO1313SBD Toaster Oven, 16.4 Inch, Silver
            "
            price={34.98}
            image="https://m.media-amazon.com/images/I/81A+eYM4cqL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="29810499"
            title="
            LG Electronics USA 65UT570H Plasma/LCD/CRT TV, 65 inches
            "
            price={(1, 340.1)}
            image="https://m.media-amazon.com/images/I/613AHlD4XYL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
