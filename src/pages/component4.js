import useCounter from './useCounterWithMemo';


export default function Component4({caption}) {

    const {currentValue, setCount} = useCounter();

    return (
      <>
        <button onClick={() => setCount(currentValue+1)} >{caption} {currentValue}</button>
      </>
    )
  }
  