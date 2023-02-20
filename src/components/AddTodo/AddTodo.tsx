import React, { ChangeEvent, ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/listSlice';






const AddTodo: React.FC = (): ReactElement => {

  const [todo, setToDo] = useState<string>('');
  const handleChangeToDo = (event: ChangeEvent<HTMLInputElement>) => setToDo(event.target.value);


  const dispatch = useDispatch();

  const handleAddItemToList = (event: React.FormEvent): void => {
    event.preventDefault();
    if (!todo || todo.trim() === '') return;
    
    dispatch(addItem(todo));
    setToDo('');
  }






    
  return (
    <form className='max-w-5xl mx-auto px-6 py-6' onSubmit={handleAddItemToList}>
      <h2 className='text-3xl text-slate-600 border-b pb-2 border-slate-600'>Add a new todo here</h2>

      {/* Input wrapper */}
      <div className='mt-5 flex flex-wrap'>

        <input 
          onChange={handleChangeToDo}
          value={todo}
          className='border border-slate-600 rounded-md px-3 py-1 mx-2 my-1'
          type='text'
          placeholder='Write your goal...'
          minLength={5}
          required/>
        
        <input type='submit' value='Add todo' 
          className='bg-slate-800 max-w-fit px-7 py-1 rounded-md text-white mx-2 my-1'/>
      </div>
    </form>
  )
}

export default AddTodo