import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';
import { GalleryCarrousel } from './GalleryCarrousel';
import  {useCheckMobileScreen} from './useCheckMobileScreen';

export default function ImageGrid({
  srcImages
}: {
  srcImages: string[]
}) {
    
  const isMobile = useCheckMobileScreen()
  console.log(isMobile)
  
  return isMobile ? <SwipeCarousel imgs={srcImages}/> : <GalleryCarrousel srcImages={srcImages}/>

}
