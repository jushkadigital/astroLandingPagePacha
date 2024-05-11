import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from './swiperCarrousel';

export const GalleryCarrousel = ({
  srcImages,
  srcLabelImages,
  label
}: {
  srcImages: string[],
  srcLabelImages: any[],
  label:boolean
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
    <div className=" h-full">

    <LayoutGroup>
        {label ? 
      <div className="grid grid-cols-3 gap-y-3 gap-x-2 w-full">
        {srcLabelImages.map((ele, idx) => (<div className={`relative h-full`} onClick={() => poper(idx)} ><motion.img  loading="lazy" decoding="async" src={ele.src} alt="gaa" className="object-cover rounded-2xl"/><p className="absolute bottom-5 left-2 text-white text-3xl font-bold">{ele.label}</p></div>))}
      </div>
        :
  <div className="grid grid-cols-3 gap-y-3 gap-x-2 w-full">
        {srcImages.map((ele, idx) => (<div className={`h-full`} onClick={() => poper(idx)} ><motion.img  src={ele} alt="gaa" className="object-cover rounded-2xl"/></div>))}
      </div>

        }
            <div className="popUp">
        <AnimatePresence>
          {popUp && <ImagePopUp poper={poper} LayoutId={LayoutId} miniTabsSrc={label ? srcLabelImages :srcImages} lengthArr={label ? srcLabelImages.length :srcImages.length} label={label}/>}
       </AnimatePresence>
      </div>
    </LayoutGroup>
    
    </div>
  );
}
