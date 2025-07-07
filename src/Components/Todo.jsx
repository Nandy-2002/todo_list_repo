import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../media/todo_icon.png'
import TodoItems from './TodoItems'
const Todo = () => {
   const inputRef = useRef();

   const [todoList,settodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos") ) : [] );

   const add=()=>{
      const inputtext = inputRef.current.value.trim();

      if(inputtext===""){
        return null;
      }

      const newTodo={
        id: Date.now(),
        text : inputtext,
        isComplete:false,
      }

      settodoList((prev)=>[...prev,newTodo]);
      inputRef.current.value="";
      
   }

   const deleteTodo =(id)=>{

    settodoList((prevTodos)=>{
        return  prevTodos.filter((todo)=> todo.id !== id)
    })

   }


   const toggle =(id)=>{
    settodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo,isComplete: !todo.isComplete}
        }
        return todo;
      })

    })
   }

   useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todoList))
     
   },[todoList])



  return (
    <>
    <div className="outer">
        <div className="inner">
            <div className="title">
                <img src={todo_icon} alt="" className='todo-img' />
                 <h1>To-Do List</h1>
            </div>

            <div className="inputs">
                <input ref={inputRef} type="text" className='task' placeholder='Add your task'/>
                <button onClick={add} className='add'>Add +</button>
            </div>

            <div className="todolist">
                {todoList.map((items,index)=>{
                    return <TodoItems key={index} text={items.text} id={items.id} isComplete={items.isComplete} deleteTodo={deleteTodo}
                    toggle={toggle}/>
                })}

            </div>
        </div>
    </div>
    </>
  )
}

export default Todo