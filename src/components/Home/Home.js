import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__image"
      />

      <div className="home__row">
        <Product
          id={11111}
          title={"Xiaomi Mi Band"}
          image={
            "https://m.media-amazon.com/images/I/41f0QNTny1L._AC_SR500,460_.jpg"
          }
          price={22.03}
          rating={5}
        />
        <Product
          id={22222}
          title={"Harry Potter Collection"}
          image={
            "https://images-eu.ssl-images-amazon.com/images/I/91hXrdv2jbL._AC_SY400_.jpg"
          }
          price={18.99}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={33333}
          title={"Apple iPad Pro"}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._AC_SL1500_.jpg"
          }
          price={853.0}
          rating={5}
        />
        <Product
          id={44444}
          title={"AFFINEST Air"}
          image={
            "https://m.media-amazon.com/images/I/61Wje47D7WL._AC_UL640_FMwebp_QL65_.jpg"
          }
          price={32.99}
          rating={5}
        />
        <Product
          id={55555}
          title={"SALEWA"}
          image={
            "https://m.media-amazon.com/images/I/81a1R8plDTL._AC_UL640_FMwebp_QL65_.jpg"
          }
          price={74.98}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={66666}
          title={"Samsung Curved Monitor"}
          image={
            "https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UL640_FMwebp_QL65_.jpg"
          }
          price={783.6}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
