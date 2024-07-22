import React from 'react'
import { workExperience } from './data'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div id='experience' className='py-20'>
        <h1 className='heading pb-10'>
            My 
            <span className='text-[#d9ed92]'> work experiences</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map(({ id, title, desc, thumbnail, className}) => (
                <Button 
                key={id}
                borderRadius='2rem'
                duration={Math.floor(Math.random() * 10000) + 2000}
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={thumbnail} alt={thumbnail} className='lg:w-32 md:w-20 w-16' />

                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl sm:text-2xl font-bold'>
                                {title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))
            }
        </div>
    </div>
  )
}

export default Experience