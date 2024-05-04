import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';
import { GalleryCarrousel } from './GalleryCarrousel';
import  {useCheckMobileScreen} from './useCheckMobileScreen';
import { MobileIti } from './MobileIti';
import { DesktopIti } from './DesktopIti';
import { BallNumbers } from './BallNumberDesk';
import './reactStyles.css'

export default function Itinerario({
  srcImagesDesk,
  srcImagesMobile,
}: {
  srcImagesDesk: any[],
  srcImagesMobile: any[],
}) {
  
  const isMobile = useCheckMobileScreen()
  return isMobile ?  <MobileIti srcImagesMobile={srcImagesMobile}/> :<div className="relative"> <DesktopIti srcImagesDesk={srcImagesDesk}/> <div className="tripa">   <BallNumbers srcImagesDesk={srcImagesDesk}/> <div className="miniTripa"> </div>  </div> </div>
}
