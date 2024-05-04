import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';
import { GalleryCarrousel } from './GalleryCarrousel';
import { useCheckMobileScreen } from './useCheckMobileScreen';

export const DesktopIti = ({
  srcImagesDesk,
}: {
  srcImagesDesk: any[],
}) => {
  return (
    srcImagesDesk.map((ele, index) => (
      <div className="flex flex-row w-full mb-8 ml-3">

        {index % 2 == 0 ? <>
          <div className="w-1/2 flex justify-center">
            <img src={ele.src} width="350" />
          </div>
          <div className="w-1/2 px-10 mt-3">
            <p className="font-bold text-[#54595F] text-3xl mb-2">{ele.title}</p>
            <p className="text-xl text-[#6B7280]">{ele.desc}</p>
          </div>
        </>
          :
          <>
            <div className="w-1/2 px-10 mt-3">
              <p className="font-bold text-[#54595F] text-3xl mb-2">{ele.title}</p>
              <p className="text-xl text-[#6B7280]">{ele.desc}</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={ele.src} width="350"/>
            </div>
          </>
        }
      </div>))
  )
}


