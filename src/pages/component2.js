import useCounter from './useCounter';


export default function Component2({caption}) {

    const {count, setCount} = useCounter();

    return (
      <>
        <button onClick={() => setCount(count+1)} >{caption} {count}</button>
      </>
    )
  }
  