import React from "react";
import LeftBannar from "./LeftBannar";
import { RightBanner } from "./RightBanner";

const Bannar = () => {
  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 lg:px-16  pt-10 pb-20 border-b-[1px] 
      font-titleFont border-b-black overflow-hidden"
    >
      <div className="flex w-full max-w-screen-2xl mx-auto">
        <LeftBannar />
        <RightBanner />
      </div>
    </section>
  );
};

export default Bannar;
