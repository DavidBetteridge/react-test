import {useState} from 'react';


export default function Component1({caption}) {

    const [count, setCount] = useState(0);

    return (
      <>
        <button onClick={() => setCount(count+1)} >{caption} {count}</button>
      </>
    )
  }
  