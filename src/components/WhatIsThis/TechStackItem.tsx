import React, { ReactElement, ReactNode } from 'react'

interface TextStackProps {
    icon:       ReactNode,
    title:      string
}


const TechStackItem: React.FC<TextStackProps> = ({ icon, title }): ReactElement => {
  return (
    <p className='flex bg-gray-50 rounded-md px-6 py-2 max-w-fit text-slate-600 items-center gap-3 m-2'>
        { icon }
        { title }
    </p>
  )
}

export default TechStackItem