import React, { ReactElement } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/listSlice';


interface ItemProps {
  text: string,
  index: number
}



const ItemCard: React.FC<ItemProps> = ({text, index}): ReactElement => {


  const dispatch = useDispatch();


  const handleDeleteTodo = ():void => {
    dispatch(removeItem(index));
  }

  return (
    <h2 className='border border-dashed border-slate-400 rounded-md max-w-[600px] px-6 py-2 text-slate-700 flex justify-between my-2'>
      { text }
      
      <span className='text-slate-700 '>
        <AiOutlineDelete size={25} onClick={handleDeleteTodo}/>
      </span>
    </h2>
  )
}

export default ItemCard;