import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';

export const GalleryCarrousel = ({
  srcImages
}: {
  srcImages: string[]
}) => {

  // const [count, setCount] = useState(initialCount);
  const [LayoutId, setLayoutId] = useState<number | null>(null)

  const [popUp, setPopUp] = useState(false)

  const poper = (id: number, inside = false) => {
    if (popUp == false) {
      setLayoutId(id)
      setPopUp(prev => !prev)
    } else {
      if (inside) {
        setLayoutId(id)
      } else {
        setPopUp(prev => !prev)
        setLayoutId(null)
      }
    }
  }


  // console.log("GAA")
  // console.log(data)
  // const newChildren = React.Children.forEach(data , child => console.log(child.props.value))
  // console.log(newChildren)


  return (
    <div className="w-full h-full">

    <LayoutGroup>
      <div className="grid grid-cols-4 gap-y-3 gap-x-2 w-2/3 m-auto">
        {srcImages.map((ele, idx) => (<div className=" h-full" onClick={() => poper(idx)} ><motion.img layout src={ele} alt="gaa" className="object-cover rounded-2xl"/></div>))}
      </div>
      <div className="popUp">
        <AnimatePresence>
          {popUp && <ImagePopUp poper={poper} LayoutId={LayoutId} miniTabsSrc={srcImages} lengthArr={srcImages.length}/>}
        </AnimatePresence>
      </div>
    </LayoutGroup>
    
    </div>
  );
}
