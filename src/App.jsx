import {useState,useCallback,useMemo} from 'react';
import ShowCount from './showCount.jsx';
import Title from './title.jsx';
import Button from './button.jsx';
function App() {
  const [count1, setCount]=useState(0);
  const [count2, setCount2]=useState(0);
  //use Heigher callback function
 const IncrementCount=useCallback(()=>{
   setCount((prevCount)=>prevCount + 1)
  },[]);
  // use Heigher callback function 
  const decrimentCount=useCallback(()=>{
    setCount2((prevCount)=>prevCount - 5)
  },[]);
  const isEvent=useMemo(()=>{
  let i=0;
    while(i < 1000000000) i += 1; //costly operation
    return count1 % 2 === 0;
  },[count1])
  return ( <div>
  <Title title="counter process" />
  <ShowCount title="counter value Add" count={count1} />
  <span>{isEvent ? "Event":"Old"}</span>
  <Button handleClick={IncrementCount} >incrimentOne</Button>
  <hr />
 <Title title="counter process" />
  <ShowCount title="counter -5" count={count2} />
    <Button handleClick={decrimentCount} >decrimentFive</Button>
    </div>
  )
}

export default App;
