import { FONT_WEIGHTS } from "@constants";
import gsap from "gsap";
import { useEffect, useRef } from "react";



const renderText = (text: string, className: string, baseWeight = 400) => {
   return [...text].map((char, i) => (
      <span 
      key={i} 
      className={className}
      style={{ fontVariationSettings: `"wght" ${baseWeight}`}}>
      {char === ' ' ? '\u00A0': char}
      </span>
   ))
};


const setupTextHover = (container: HTMLElement | null, type: keyof typeof FONT_WEIGHTS) => {

   if(!container) return () => {};

   const letters = container.querySelectorAll("span");
   const { min, max, default: base} = FONT_WEIGHTS[type];

   const animateLetter = (letter: HTMLSpanElement, weight: number, duration = 0.25) => {
      return gsap.to(letter, {
         duration,
         ease: "power2.out",
         fontVariationSettings: `"wght" ${weight}`,
      });
};

   
   const handleMouseMove = (event: MouseEvent) => {

      const { left } = container.getBoundingClientRect();
      const mouseX = event.clientX - left;

      letters.forEach((letter) => {
         const { left: l, width: w} = letter.getBoundingClientRect();
         const distance  = Math.abs(mouseX - (l -left + w/2 ));
         const intensity = Math.exp(-(distance ** 2) / 4000);
         animateLetter(letter, min + (max- min)* intensity)
      })
   };
   const handleMouseleave = () => {
      letters.forEach((letter) => (
         animateLetter(letter, base, 0.3)
      ))
   }
   container.addEventListener("mousemove", handleMouseMove);
   container.addEventListener("mouseleave", handleMouseleave);
   
   return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseleave);
   }
}

const Welcome = () => {

   const titleRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);

   useEffect(() => {
      const titleCleanup = setupTextHover(titleRef.current, "title");
      const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

      return () => {
         titleCleanup();
         subtitleCleanup();
      }
   },[])

  return (
    <section id="welcome">
      <p ref={subtitleRef}>{renderText("Hey I'm Prince, Welcome to my",'text-3xl font-georama',100)}</p>
      <h1 ref={titleRef} className="mt-7">{renderText('Portfolio', 'text-9xl font-georama italic')}</h1>
      <div className="small-screen">
         <p>This Portfolio is designed for desktop/tablet screen only.</p>
      </div>
    </section>
  );
}

export default Welcome;
