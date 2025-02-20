import React from 'react';
import LeftBannar from './LeftBannar';
import { RightBanner } from './RightBanner';



const Bannar = () => {
  
  return (
    <section id="home" className="w-full items-center pt-10 pb-20 flex border-b-[1px] font-titleFont border-b-black ">
      <LeftBannar/>
      <RightBanner/>
    </section>
  );
};

export default Bannar;
