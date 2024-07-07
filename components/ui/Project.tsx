import { Key } from "react";
import { FaLocationArrow } from "react-icons/fa";

const Project = ({  
    title, 
    des, 
    img, 
    iconLists, 
    link
  }: {
    title?: string;
    href?: string;
    img?: any;
    des?: string;
    iconLists?: any;
    link?: string;
  }) => {
    return (
        <div className="flex flex-col opacity-50 hover:opacity-100 hover:scale-[1.2] transition duration-500 ease-in-out border border-slate-700 rounded-3xl overflow-hidden">
             {/* Cart image containter */}
             <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="./bg.png" alt="bg-img"/>
                  </div>
                  <img 
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 "
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 px-3">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 px-3">
                  {des}
                </p>

                {/* Small Icons */}
                <div className="flex items-center justify-between mt-7 mb-3 px-3">
                  <div className="flex items-center">
                    {/* map icon lists */}
                    {iconLists.map((icon: string, index: number) => (
                      <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{transform: `translateX(-${5 * index * 2}px)`}}>
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}

                    {/* Check GitHub */}
                    <button className=" border rounded-3xl p-2.5 hover:animate-pulse ">
                    <a href={link} target="_blank" className="w-full flex justify-center items-center m-0">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple ">Check GitHub</p>
                      <FaLocationArrow className="ms-3" color="#cbacf9"/>
                      </a>
                    </button>
                  </div>
                </div>
        </div>
    )
}

export default Project