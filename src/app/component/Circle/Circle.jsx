"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase, MotionPathPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// CustomEase.create("customEase", "M0,0 C0.42,0 0.58,0.58 1,1");
CustomEase.create("pronouncedEase", "M0,0 C0.42,0 0.58,0.7 1,1");
export default function Circle() {
  // First
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle',{
  //       scale: 2,  
  //       yPercent:-120,
  //       xPercent:-160
  //     },{
  //        scale:1,
  //        xPercent:0,
  //        yPercent: 0,
  //       scrollTrigger: {
  //         trigger: ".circle",
  //         start: "top 70%",  
  //         end: "top top",  
  //         scrub: true, 
  //         markers:true
  //       }
  //     });
  //   });

  //   return () => ctx.revert();  
  // }, []); 


  // second
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const circle = document.querySelector('.circle');
  //     const radius = 90; // Adjust radius as needed
  //     const center = radius;
  //     const totalSteps = 90; // Total steps in the circular path
  //     const pathPoints = Array.from({ length: totalSteps }, (_, i) => {
  //       const angle = (i / totalSteps) * (2 * Math.PI);
  //       return {
  //         x: center + radius * Math.sin(angle),
  //         y: center - radius * Math.cos(angle),
  //       };
  //     });

  //     gsap.fromTo(
  //       '.circle',
  //       { motionPath: { path: pathPoints, autoRotate: true } },
  //       {
  //         motionPath: { path: pathPoints, autoRotate: true },
  //         scrollTrigger: {
  //           trigger: '.circle',
  //           start: 'top 50%',
  //           end: 'top top',
  //           scrub: true,
  //           markers: true,
  //         },
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  // Third
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle', {
  //       motionPath: {
  //         path: [
  //           { x: 0, y: 0 },
  //           { x: 100, y: -100 },
  //           { x: 200, y: 0 },
  //         ],
  //         align: "self",
  //         autoRotate: true
  //       },
  //       scale: 2,
  //       xPercent: -160,
  //       yPercent: -120
  //     }, {
  //       motionPath: {
  //         path: [
  //           { x: 0, y: 0 },
  //           { x: 100, y: -100 },
  //           { x: 200, y: 0 },
  //         ],
  //         align: "self",
  //         autoRotate: true
  //       },
  //       scale: 1,
  //       xPercent: 0,
  //       yPercent: 0,
  //       scrollTrigger: {
  //         trigger: ".circle",
  //         start: "top 70%",
  //         end: "top top",
  //         scrub: true,
  //         markers: true
  //       }
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  // fourths
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle',
  //       {
  //         x: 0,
  //         y: 0,
  //         scale: 2
  //       },
  //       {
  //         x: 200, // Final X position
  //         y: 0,   // Final Y position
  //         scale: 1,
  //         ease: "power1.inOut", // Smooth easing function
  //         onUpdate: function () {
  //           // Custom curve calculation
  //           const progress = this.progress();
  //           this.targets().forEach(el => {
  //             // Adjust the Y position based on a quadratic curve
  //             gsap.set(el, {
  //               y: -Math.pow(progress * 2 - 1, 2) * 100 // Example curve function
  //             });
  //           });
  //         },
  //         scrollTrigger: {
  //           trigger: ".circle",
  //           start: "top 70%",
  //           end: "top top",
  //           scrub: true,
  //           markers: true
  //         }
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  // fifth
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle',
  //       {
  //         scale: 2,
  //         x: 0,
  //         y: 0
  //       },
  //       {
  //         scale: 1,
  //         x: 200, // Final X position
  //         y: 0,   // Final Y position
  //         ease: "power1.inOut",
  //         onUpdate: function () {
  //           // Get the progress of the animation
  //           const progress = this.progress();

  //           // Define the curvature using a sine function
  //           const amplitude = 100; // Height of the curve
  //           const frequency = 4;   // Number of waves
  //           const curveY = amplitude * Math.sin(progress * frequency * Math.PI);

  //           // Set the new Y position to create a smooth curve
  //           gsap.set(this.targets(), {
  //             y: curveY
  //           });
  //         },
  //         scrollTrigger: {
  //           trigger: ".circle",
  //           start: "top 70%",
  //           end: "top top",
  //           scrub: true,
  //           markers: true
  //         }
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);


  // sixth
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle',
  //       {
  //         motionPath: {
  //           path: [{ x: 0, y: 0 }, { x: 100, y: 200 }, { x: 200, y: 100 }],
  //           curviness: 1.5
  //         },
  //         scale: 2,
  //       },
  //       {
  //         motionPath: {
  //           path: [{ x: 0, y: 0 }, { x: 100, y: 200 }, { x: 200, y: 100 }],
  //           curviness: 1.5
  //         },
  //         scale: 1,
  //         scrollTrigger: {
  //           trigger: ".circle",
  //           start: "top 70%",
  //           end: "top top",
  //           scrub: true,
  //           markers: true
  //         }
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  // seven
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle',
  //       {
  //         scale: 2,
  //         yPercent: -120,
  //         xPercent: -160
  //       },
  //       {
  //         scale: 1,
  //         xPercent: 0,
  //         yPercent: 0,
  //         ease: "power3.inOut", // Use an easing function for curved movement
  //         scrollTrigger: {
  //           trigger: ".circle",
  //           start: "top 70%",
  //           end: "top top",
  //           scrub: true,
  //           markers: true
  //         }
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  // nine
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle',
  //       {
  //         scale: 2,
  //         yPercent: -150,
  //         xPercent: -150
  //       },
  //       {
  //         scale: 1,
  //         xPercent: 0,
  //         yPercent: 0,
  //         ease: "customEase", // Use the custom easing function
  //         scrollTrigger: {
  //           trigger: ".circle",
  //           start: "top 70%",
  //           end: "top top",
  //           scrub: true,
  //           markers: true
  //         }
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  // ten
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.circle',
  //       {
  //         scale: 1.5,
  //         yPercent: -100,  // Increase the starting Y percent for a more dramatic curve
  //         xPercent: -100   // Increase the starting X percent for a more dramatic curve
  //       },
  //       {
  //         scale: 1,
  //         xPercent: 0,
  //         yPercent: 0,
  //         ease: "pronouncedEase",  
  //         scrollTrigger: {
  //           trigger: ".circle",
  //           start: "top 70%",
  //           end: "top top",
  //           scrub: true,
            
  //         }
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  // eleven
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.circle', {
        duration: 2, // Adjust duration for the animation
        xPercent: -100, // Adjust xPercent to control horizontal movement
        yPercent: -100, // Adjust yPercent to control vertical movement
        scale: 1, // Adjust scale as needed
        ease: "power3.inOut", // Smooth transition
        scrollTrigger: {
          trigger: ".circle",
          start: "top 70%",
          end: "top top",
          scrub: true,
          markers: true
        },
        modifiers: {
          xPercent: (xPercent) => {
            // Apply custom transformation to xPercent to create a curve
            return xPercent * 0.5; // Adjust the factor to control the curve
          },
          yPercent: (yPercent) => {
            // Apply custom transformation to yPercent to create a curve
            return yPercent * 1.5; // Adjust the factor to control the curve
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <div className="w-full h-[120vh] ">
      <section className="h-screen bg-white relative mt-[8rem] md:mt-[1.7rem]">
        <div className="flex items-center justify-center h-screen">
          <p className="text-[2.78rem] w-[8ch] mx-auto text-center lg:text-[76px] absolute">
            Join Circles
          </p>
          <div className="absolute flex items-center justify-center top-0 w-[calc(33vh+16rem)] h-[calc(33vh+16rem)] circles-container mobile:w-full mobile:h-[115vw]">
            {[
              { top: "2.5%", imgSrc: "./face/1.webp" },
              { top: "30.5%", left: "0%", translateY: "-50%", imgSrc: "./face/2.webp" },
              { bottom: "30.5%", left: "0%", translateY: "50%", imgSrc: "./face/3.webp" },
              { bottom: "2.5%", imgSrc: "./face/4.webp" },
              { bottom: "30.5%", right: "0%", translateY: "50%", imgSrc: "./face/5.webp" },
              { top: "30.5%", right: "0%", translateY: "-50%", imgSrc: "./face/6.webp" },
            ].map((style, index) => (
              <div
                key={index}
                className="circle absolute w-[5.47rem] h-[5.47rem] shadow-lg rounded-full bg-white border border-white  mobile:w-[4.8rem] mobile:h-[4.8rem]"
                style={{
                  top: style.top,
                  bottom: style.bottom,
                  left: style.left,
                  right: style.right,
                  transform: `translateY(${style.translateY || "0%"})`,
                }}
              >
                <img
                  loading="lazy"
                  width="868"
                  height="864"
                  decoding="async"
                  className="rounded-full"
                  srcSet={`${style.imgSrc} 1x, ${style.imgSrc} 2x`}
                  src={style.imgSrc}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  )
}
