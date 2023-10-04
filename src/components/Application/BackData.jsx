import React from "react";
import GlobalStyles from "./GlobalStyles";
import ImageSlide from "./ImageSlide";

import Image2 from "../Image/2.jpg";
import Image1 from "../Image/1.jpg";
import Image3 from "../Image/3.jpg";
import Image4 from "../Image/4.jpg";
import Image5 from "../Image/5.jpg";
import Image6 from "../Image/6.jpg";
import Image7 from "../Image/7.jpg";

const BackData = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <ImageSlide
          images={[Image1, Image2, Image3, Image4, Image5, Image6, Image7]}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <h1 className="text-4xl font-bold leadi sm:text-5xl">
              God unlimited success outreach ministry.
            </h1>
            <p className="px-8 mt-4 mb-12 text-lg">
              Places covered_We have covered more than two hundred villages
              (200)ranging from Osun,Kwara, Oyo etc.
            </p>
          </div>
        </ImageSlide>

        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt=""
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={Image2}
              />
              <div class="flex flex-col justify-center pl-16 p-8 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leadi sm:text-6xl uppercase">
                  mi
                  <span className="text-violet-400">ssi</span>on
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  The mission To help the less privileged one through giving to
                  them in cash and in kind,bringing them to the knowledge of
                  Christ.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BackData;
