import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';
import { GalleryCarrousel } from './GalleryCarrousel';
import { useCheckMobileScreen } from './useCheckMobileScreen';

export const BallNumbers = ({
  srcImagesDesk,
}: {
  srcImagesDesk: any[],
}) => {
  return (
    <div className="flex flex-col gap-y-[300px]">
    {srcImagesDesk.map((ele, index) => (
        index == 0 ? 
        <div className="w-11 h-11 shrink-0 grow-0 rounded-full bg-[#B65F00] flex items-center justify-center text-white z-10 mt-[100px] font-bold text-xl">{index + 1}</div>
        :
        <div className="w-11 h-11 shrink-0 grow-0 rounded-full bg-[#B65F00] flex items-center justify-center text-white z-10 font-bold text-xl">{index + 1}</div>
        
))}
  </div>
  )
}


