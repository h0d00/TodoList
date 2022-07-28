import React , {useEffect, useState} from 'react'
import s from './TimeZone.module.css'


export default function TimeZone() {
    const [now, setNow] = useState(new Date())

    function tick() {
        setNow(new Date())
    }

    let year = now.getFullYear(); 
    let month = now.getMonth() + 1;  
    let date = now.getDate();  
    let day = now.getDay();  
    let second = now.getSeconds()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    const weeks = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]


    useEffect(() => {
        const timerID = setInterval(tick, 1000)
        return() => { clearInterval(timerID)}
      }, [])


    function secondStyle(second)
    {
        if(second<10)return <span className={s.second}>0{second}</span>
        if(second>49)return <span className={s.second} style={{color:"#ff8787"}}>{second}</span>
        else return <span className={s.second}>{second}</span>
    }
    
    


  return (
      
    <div className={s.TimeZone}>
    <div className={s.secondzone}>
    {hours}:
    {minutes<10 ? <>0{minutes}</> : <>{minutes}</>}:
    {secondStyle(second)}</div>
    <div className={s.year}>{year}년 {month}월 {date}일</div>
    <div className={s.weeks}>{weeks[day]}</div>
    </div>
  )
}
