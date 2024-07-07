'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/components/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1 md:grid-cols-8 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: Number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // lottie copy
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('bernardacero@rocketmail.com');
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(1, 25, 35)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      
      
      {/* Grid images */}
      <div className={`${id === 6  && 'flex justify-center'} h-full}`}>
        <div className="w-full h-full absolute"> 
          {img && (
            <img 
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover sm:object-contain, object-center, opacity-80')}
            />
          )}
        </div>

        {/* Grid 5 */}
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacit-80'}`} >
          {spareImg && (
            <img 
            src={spareImg}
            alt={spareImg}
            className={'object-cover, object-center, w-full h-full'}/>
          )}
        </div>
       
        <div className="group-hover/bento:translate-x-2 transition duration-200">     
        </div>

        {/* Grid 6 background animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold ">
            </div>
          </BackgroundGradientAnimation>
        )}        

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          {/* Description  */}
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-with-96 z-10">
            {title}
          </div>

          {/* Grid 2 Globe */}
          {id === 2 && <GlobeDemo />}          

          {/* Grid 3 My tech stack array map*/}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-0 lg:-right-2 lg:top-0"
            >
              {/* 1st array map */}
              <div className="flex flex-col gap-2 lg:gap-6 opacity-75 mb-3 md:-mt-3">              
               {['React.js', 'Next.js', 'TypeScript', 'Tailwind'].map((item) => <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black-300">{item}</span>)
               }
               {/*Span below title and description  */}
               {/* <span className="py-4 px-3 rounded-lg lg:h-28 text-center bg-black-250"/> */}
              </div>
              
              {/* 2nd array map */}
              <div className="flex flex-col gap-2 lg:gap-6 opacity-75 mt-3">
                
                {['JavaScript', 'HTML', 'CSS', 'BootStrap'].map((item) => <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black-300">{item}</span>)
                }
              </div>              
            </div>
          )}  

          {/* Grid 6 Copy Email */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData, /**json object */
                  rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div>

              <MagicButton 
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline/>} //from react icons
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}  
        </div>
      </div>
    </div>
  );
};
