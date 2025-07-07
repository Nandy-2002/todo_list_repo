import React from 'react'
import tick from '../media/tick.png'
import not_tick from '../media/not_tick.png'
import delete_icon from '../media/delete.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {

  return (
    <>
      <div className="listitems">
        <div onClick={()=>{toggle(id)}} className="todolist-left">
        <img src={isComplete ? tick : not_tick} alt="" className='tick-icon' />
        <p className={`task-text ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='delete-icon'/>
      </div>

    </>
  )
}

export default TodoItems