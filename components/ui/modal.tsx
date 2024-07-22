"use client"

import { workExperience } from '../data'

const Modal = ({  
    id, 
    handleModal
} : {
    id: number;
    handleModal: any;
}) => {
    return (         
        <div className='bg-gray-500 bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center text-white shadow-md z-50'>
            <div className='bg-slate-900 max-w-[80vw] max-sm:max-w-[460px] shadow-lg py-2 rounded-2xl pb-3'>
                <div className='border-b border-gray-300 px-3 pb-4 mb-4 mt-4'>
                    <h2 className='text-xl font-medium' >
                        {workExperience[id].title}
                    </h2>
                    <h3 className='text-lg'>  
                        {workExperience[id].company}
                    </h3>
                    <p className='text-base'>  
                        {workExperience[id].duration}
                    </p>
                </div>

                <div className='px-4 pb-4'>  
                    <ul className='px-4 list-disc'>
                    <li className='text-sm font-medium leading-7'>  
                        {workExperience[id].desc1}
                    </li>
                    <li className='text-sm font-medium leading-7'>  
                        {workExperience[id].desc2}
                    </li>
                    </ul>                 
                    
                </div>

                <div className='border-t border-gray-300 flex justify-end items-center px-4 pt-2 '>
                    <button
                      type='button'
                      className='h-8 px-2 text-sm rounded-md    bg-gray-700 text-white border hover:border-white'
                      onClick={handleModal}                      
                    >
                    Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal