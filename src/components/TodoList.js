import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { remove , complete } from '../redux/todoSlice'
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


export default function TodoList() {
    const todolist = useSelector(state => state.todo)
    const dispatch = useDispatch()

    console.log(todolist)
    const trash = <FontAwesomeIcon icon={faTrashCan} />



    const todolistView = todolist.map((todo, idx) => (
        
    <li className={s.list}key={todolist[idx].id}>
        <input className={s.checkbox} type="checkbox" onChange={()=> dispatch(complete(todolist[idx].id))}/>
        <div className={s.todolist}>{todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}</div>
        <button className={s.deleteBtn} type="button" onClick={() => dispatch(remove(todolist[idx].id))}>{trash}</button>
    </li> 
    )
    )


  return (
      <>
     <ul>{todolistView}</ul>   
      </>
  )
}
