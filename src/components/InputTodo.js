import React, {useState} from 'react'
import {useDispatch  } from 'react-redux'
import {add} from '../redux/todoSlice'
import s from './InputTodo.module.css'

export default function InputTodo() {
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState(
    {
        id : 0,
        text : "",
    }
    )

    function handleText(e) {
        setTodolist({text : e.target.value})
    }

    function onReset () {
        setTodolist({text : ""})
    }
  
    
  return (
      <div className={s.InputTodo}>
      <form onSubmit={(e) => {
        e.preventDefault()
        if(todolist.text !== ""){dispatch(add(todolist.text))}
        else(alert("할 일을 입력해주세요!"))
        onReset()
        }}>
            <div>
            <input className={s.textbar} type="text"  value = {todolist.text} onChange={handleText}></input>
            <input className={s.submitbutton} type="submit" value="+"></input>
            </div>
        </form>
      </div>

    )
}
