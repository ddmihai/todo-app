import React, { ReactElement } from 'react'





const Header: React.FC = (): ReactElement => {
  return (
    <header>
      {/* Top elements */}
      <div className='bg-black text-white text-sm px-6 py-2'>
        <p className='max-w-6xl'>Wellcome to my TODO app</p>
      </div>


      {/* Banner */}
      <section className='mx-auto max-w-5xl flex flex-wrap min-h-[450px]'>
        <div className='flex-1  basis-[400px] items-center justify-center flex px-6 flex-col py-10'>
          <h1 className='mb-4 text-3xl text-slate-600'>Increase your productivity with our new ToDo web app</h1>
          <p>Built on top of Redux Toolkit, the to do items will dissapear if you refresh the page or close it. Try now.</p>
        </div>

        <div className='flex-1 basis-[450px] flex justify-center'>
          <img src='https://source.unsplash.com/1r0aLUYxUH0' alt='Pen and paper' height={550} width={300} />
        </div>
      </section>
    </header>
  )
}

export default Header