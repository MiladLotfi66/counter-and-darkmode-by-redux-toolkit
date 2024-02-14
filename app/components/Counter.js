"use client"

import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount , selectCounter} from '../Redux/features/Counter/counterSlice';
import {reverseDarkMode ,selectDarkMode} from '../Redux/features/DarkMode/darkModeSlice';


function Counter() {

    const [value,setValue] = useState(2);
    const counter = useSelector(selectCounter);
    const darkmode2=useSelector(selectDarkMode);
    const dispatch = useDispatch();



    console.log(darkmode2);
  return (
    <div>
      <h2>counter is{counter}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input
      type='number'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      
      />
      <button onClick={() => dispatch(incrementByAmount(+value))}>increment by amount</button>
      <button onClick={() => dispatch(reverseDarkMode())}>darkmodechange</button>
      <br/>
      <br/>
      <br/>
      





    </div>
  )
}

export default Counter
