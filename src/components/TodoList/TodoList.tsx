import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ItemCard from '../ItemCard/ItemCard';




const TodoList: React.FC = (): ReactElement => {

  const list = useSelector((state: RootState) => state.list.value);


  return (
    <section className='max-w-5xl mx-auto px-6 py-3 pb-10'>
        {list.map((item: string, index: number) => (
          <ItemCard key={index} text={item} index={index}/>
        ))}
    </section>
  )
}

export default TodoList