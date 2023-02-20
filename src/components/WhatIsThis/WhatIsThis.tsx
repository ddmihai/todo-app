import React, { ReactElement } from 'react'
import TechStackItem from './TechStackItem'


import { SiTailwindcss, SiTypescript, SiRedux, SiReact } from 'react-icons/si';




const WhatIsThis: React.FC = (): ReactElement => {
  return (
    <section>
        <div className='flex flex-wrap max-w-5xl mx-auto'>
            <div className='text-slate-600 basis-[400px] flex-1 px-6 py-10'>
                <h2 className='text-3xl'>What is this?</h2>
                <p className=' mt-6'>
                Welcome to our ReactJS todo list web app prototype! I utilized modern technologies such as TypeScript, Tailwind, and Redux Toolkit to create an efficient and 
                user-friendly app. As a prototype, I continuously refining and improving the user experience. I'd love to hear your feedback to help us create a final product that 
                meets your needs and expectations. Thank you for trying out our todo list web app prototype!
                </p>
            </div>
            
            <div className='basis-[400px] flex-1 flex justify-center'>
                <img height={550} width={300} src='https://source.unsplash.com/7esRPTt38nI' alt='Question mark'/>
            </div>                
        </div>


        <div className='mt-auto max-w-5xl mx-auto p-6'>
            <h2 className='text-3xl text-slate-600'>Tech stack</h2>

            <div className='flex flex-wrap'>
                <TechStackItem 
                    icon={<SiTailwindcss size={30}/>} 
                    title='Tailwind Css'/>

                <TechStackItem 
                    icon={<SiTypescript size={30}/>} 
                    title='Typescript'/>

                <TechStackItem 
                    icon={<SiRedux size={30}/>} 
                    title='React Redux'/>

                <TechStackItem 
                    icon={<SiReact size={30}/>} 
                    title='ReactJS'/>
            </div>
        </div>
    </section>
  )
}

export default WhatIsThis