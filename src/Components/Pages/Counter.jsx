import './Counter.css';
import Button from '../Molecules/Button/Button';
import { useState } from 'react';


function App() {

  const [counterInitial,setCounter]=useState(0)

  const handleClick =()=>{
      setCounter(
        counterInitial+1
      )
  }

  const handleClickM =()=>{
    setCounter(
      counterInitial-1
    )
}
  return (
    <div className="App"> 
       <p className='numberc'>{counterInitial}</p>
        <div className='btncontainer'>
            <Button icon= "+"  iconstyle={"btnplus"} 
            onClick={
              handleClick
            }/>
            <Button icon= "-" iconstyle={"btnminus"} 
             onClick={
              handleClickM
            }/>
        </div>
    </div>
  );
}

export default App;
