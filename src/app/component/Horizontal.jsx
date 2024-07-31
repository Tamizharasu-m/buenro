"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "./Horizontal.css";

gsap.registerPlugin(ScrollTrigger);

export default function Horizontal() {

    useEffect(() => {
        const pageContainer = document.querySelector(".container");
    
        // Initialize LocomotiveScroll
        const scroller = new LocomotiveScroll({
          el: pageContainer,
          smooth: true,
        });
    
        scroller.on("scroll", ScrollTrigger.update);
    
        ScrollTrigger.scrollerProxy(pageContainer, {
          scrollTop(value) {
            return arguments.length
              ? scroller.scrollTo(value, 0, 0)
              : scroller.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              left: 0,
              top: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: pageContainer.style.transform ? "transform" : "fixed",
        });
    
        const pinWrap = document.querySelector(".pin-wrap");
        const pinWrapWidth = pinWrap.scrollWidth;
        const horizontalScrollLength = pinWrapWidth - window.innerWidth;
    
        // Pinning and horizontal scrolling for three images
        gsap.to(".pin-wrap", {
          scrollTrigger: {
            scroller: pageContainer, // locomotive-scroll
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            start: "left top ",
            end: `+=${pinWrapWidth}`,
            markers:true,
          },
          x: -horizontalScrollLength,
          ease: "none",
        });
    
        ScrollTrigger.addEventListener("refresh", () => scroller.update());
        ScrollTrigger.refresh();
    
        // Clean up on unmount
        return () => {
          scroller.destroy();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);

      

  return (
    <div className="container pt-[18.696px] pb-[56.088px] px-[18.645px] overflow-hidden">
      
      <div id="sectionPin">
      <h6 className='text-[23.9309px] leading-[35.8963px] max-w-[250px]'>Gather Globally in +50,000 Properties</h6>
        <div className="pin-wrap">
          <div className="image-box bg-1 ">
            <div>
              <div>
                <div>
                  <span>1 Spot left</span>
                </div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-box bg-2 h-[321.562px] w-[321.562px]">
          
          </div>
          <div className="image-box bg-3">
          
          </div>
          <div className="shadow-[xxsm] border-[#E6E6E6] border-[.06rem] py-[1.65rem] px-[1.5rem] image-box bg-4">
          
          </div>
        </div>
      </div>
    </div>
  );
};
