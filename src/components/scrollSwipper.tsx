import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

type CardType = {
  url: string;
  // title: string;
};


type Props = {
  cards: string[]
}


export const ScrollSwipper = ({cards}:Props) => {
  return (
    <div className="bg-neutral-800 w-full">
      <div className="bg-gray-700 flex h-48 items-center justify-center rounded-2xl">
        <span className="font-semibold uppercase text-white">
          Scroll Up
        </span>
      </div>
      <HorizontalScrollCarousel  cards={cards} />
      <div className="bg-gray-700 flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-white">
          Scroll Down
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = ({cards}:Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const background = useTransform(scrollYProgress, [0,0.3], ["#C0C0C0", "#000000"]);

  return (
    <motion.section ref={targetRef}   className="relative h-[300vh] ">
      <motion.div  style={{background:background}} className="sticky top-0 flex h-[100vh] items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-0">
          {cards.map((card,idx) => {
            return <Card card={card} id={idx+1} key={idx+1} />;
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const Card = ({ card ,id}: { card: string ,id:number}) => {
  return (
    <div
      key={id}
      className="group  relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center"> */}
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg"> */}
          {/* {card.title} */}
        {/* </p> */}
      {/* </div> */}
    </div>
  );
};



