import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TrendingProductSection from "@/components/HomePageSections/TrendingProductSection";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scaling for Hero Image (Full Screen -> Tablet Frame Size)
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const combinedYEffect = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7], ["0%", "10%", "10%", "-100%"]);

  
  // Tablet Frame Visibility
  const frameOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  const logoOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const blackLogoOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const slideUpEffect = useTransform(scrollYProgress, [0.5, 0.7], ["0%", "-100%"]);
  const productsOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);


  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div ref={containerRef} className="h-[400vh] relative overflow-hidden"
    >
      {/* Hero Banner */}
      <motion.div
      
        className="fixed bottom-2.5 left-0 w-full h-[120vh] flex items-center justify-center"
        // style={{ scale: heroScale, y: combinedYEffect,(scrollPosition != 0 ? (border:'50px solid black', borderRadius:"40px") : null)}}
          
        style={{
          scale: heroScale,
          transformOrigin: 'center',

          y: combinedYEffect,
          ...(scrollPosition !== 0 
              ? { border: '50px solid black', borderRadius: '40px' } 
              : {})
      }}
        
        
      >
      {/* // backgroundImage: "url(/Images/tablate.png)", backgroundSize:"contain", backgroundPosition: "center",backgroundRepeat:'no-repeat' */}

        <div className="relative w-full h-full overflow-hidden" 
        // style={{ backgroundImage: "url(/Images/tablate.png)", backgroundSize: "cover", backgroundPosition: "center",backgroundRepeat:'no-repeat' }}
        //  style={{ backgroundImage: "url(/Images/tablate.png)"}}
        >
          <Image
            src="/Images/HeroBanner.png"
            alt="Hero Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>

      {/* Tablet Frame */}
      <motion.div
        className="fixed top-10 left-0 w-full h-screen flex items-center justify-center"
        style={{ opacity: frameOpacity, y: slideUpEffect }}
      >
        {/* <Image
          src="/Images/tablate.png"
          alt="Tablet Frame"
          height={500}
          width={800}
          className="bg-black/65 rounded-[35px]"
        /> */}
      </motion.div>

      {/* Nike Logos */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
        style={{ opacity: logoOpacity, y: slideUpEffect }}
      >
        <Image
          src="/Logo/nike large white.png"
          alt="Nike Logo"
          height={250}
          width={400}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
        style={{ opacity: blackLogoOpacity }}
      >
        <Image
          src="/Logo/nike large.png"
          alt="Nike Logo"
          height={250}
          width={400}
        />
      </motion.div>

      {/* Trending Product Section */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-end"
        style={{ opacity: productsOpacity }}
      >
        <TrendingProductSection />
      </motion.div>
    </div>
  );
}
