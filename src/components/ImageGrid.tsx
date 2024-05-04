import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';
import { GalleryCarrousel } from './GalleryCarrousel';
import  {useCheckMobileScreen} from './useCheckMobileScreen';

export default function ImageGrid({
  srcImages=[],
  srcLabelImages=[],
  label
}: {
  srcImages?: string[],
  srcLabelImages?: any[],
  label:boolean,
}) {
  
  const isMobile = useCheckMobileScreen()
  console.log(isMobile)
  return isMobile ? <SwipeCarousel imgs={srcImages} labelImgs={srcLabelImages} label={label}  />  : <GalleryCarrousel srcImages={srcImages} srcLabelImages={srcLabelImages} label={label}/>
}
