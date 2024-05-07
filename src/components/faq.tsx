
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
      <h2 className="heading">Frequently Asked Questions</h2>
      <div className="faq-items">
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
    <>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "white" : "gray",
        }}
        onClick={() => setExpanded(i)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 4rem",
          cursor: "pointer",
        }}
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
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              backgroundColor: "white",
              padding: "0 2rem",
            }}
          >
            {description}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
