
import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';
import { GalleryCarrousel } from './GalleryCarrousel';
import { useCheckMobileScreen } from './useCheckMobileScreen';

export const MobileIti = ({
  srcImagesMobile,
}: {
  srcImagesMobile: any[],
}) => {
  const valueWithZero = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16']
  
  return (
    srcImagesMobile.map((ele, index) => (<div className="flex flex-col items-center gap-y-5">
      <div className="w-4/5 px-10 flex flex-row items-center justify-center">
        <div className="shrink-0 grow-0 rounded-full border p-1 px-3  flex flex-col justify-center items-center text-center border-[#B65F00] border-2 mr-2 ml-5">
      <span className="font-extrabold leading-tight text-[13px] text-[#B65F00]">DÍA</span><span className="font-extrabold leading-tight text-[24px] text-[#B65F00]">{valueWithZero[index]}</span>
        </div>
        <p className="font-bold text-[#54595F] text-[20px] w-fit">{ele.title}</p>
      </div>
      <img src={ele.src}/>
      <p className="font-semibold text-[#7C7B80] mx-10">{ele.desc}</p>
    </div>))
  )
}


