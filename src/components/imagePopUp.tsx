
import { motion } from "framer-motion"
type Props = {
  miniTabsSrc:string[]
  poper:(id:number,inside?:boolean)=>void
  LayoutId:number | null
}

export function ImagePopUp ({poper,LayoutId,miniTabsSrc}:Props){

  const SingleImage = miniTabsSrc[LayoutId || 0]

  return (
  <motion.div className="block fixed top-0 left-0 right-0 bottom-0 bg-black/90" 
        initial={{ opacity: 0 ,scale:0}}
        animate={{ opacity: 1 ,scale:1}}
        exit={{ opacity: 0 ,scale:0}}
>
      <div>
      <div onClick={()=>poper(100)} className="text-gray-400 text-3xl absolute top-3 left-3 cursor-pointer">X</div>
      </div>
      <div className="w-[40vw] m-auto">
        <motion.img layout src={SingleImage} className="w-[60%] m-auto rounded-2xl"/>
      </div>
      <div className="flex justify-evenly mt-10 w-2/3 m-auto">
        {miniTabsSrc.map((ele,idx)=><div className="w-24 h-24" onClick={()=>poper(idx,true)}><img className="rounded-2xl" src={ele}/></div>)}
      </div>
    </motion.div>
  )

}






