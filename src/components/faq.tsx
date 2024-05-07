
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


type Props = {
  ga: {q:string,a:string}[]
}


export const FAQ = ({ga}:Props) => {
  const [expanded, setExpanded] = useState(Array.from(ga,(x)=>false));
  const accordionIds =  ga


  const changeState = (index:number)=>{
    setExpanded(prev => prev.map((ele:boolean,idx:number)=>{
      if(idx == index){
        return !ele
      }else{
        return ele
      }
    }))
  }
  return (
    <div>
      <div className="mx-10 divide-gray-400 divide-y-2">
        {accordionIds.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded[i]!}
            setExpanded={changeState}
            title={item.q}
            description={item.a}
          />
        ))}
      </div>
    </div>
  );
};



const Accordion = ({ i, expanded, setExpanded, title, description }:{i:number,expanded:boolean,setExpanded:(index:number)=>void,title:string,description:string}) => {
  const isOpen = expanded == true

  return (
    <div>
      <motion.div
        initial={false}
        onClick={() => setExpanded(i)}
        className="py-4"
      >
        {title}
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1,height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4 }}
            style={{
              // backgroundColor: "white",
              // padding: "0 2rem",
            }}
          >
            <div dangerouslySetInnerHTML={{__html:description}}></div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

