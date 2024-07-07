import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from './data'

const Footer = () => {
  return (
    <footer id='contact' className='w-full pt-20 pb-10'>
       <div className='w-full absolute left-0 bottom-0 min-h-96 h-[588px]'>
            <img 
            src='./footer-grid.svg'
            alt='grid'
            className='w-full h-full opacity-50'
            />
       </div>

       <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vh]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5'>
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>
            <a href="https://www.linkedin.com/in/bernardacero/" target='_blank'>
                <MagicButton
                    title="Lets get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
       </div>

        {/* Copyright and Socials */}
       <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:textbase text-sm md:font-normal font-light'>
                Copyright &copy; 2024 Bernard
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a href={profile.link} target='_blank' key={profile.id}
                    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt='profile image' width={20} height={20}
                        
                    />
                    </a>
                ))}
            </div>
       </div>
    </footer>
  )
}

export default Footer