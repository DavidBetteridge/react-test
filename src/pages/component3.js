import useCounter from './useCounterNoMemo';


export default function Component3({caption}) {

    const {count, setCount} = useCounter();

    return (
      <>
        <button onClick={() => setCount(count()+1)} >{caption} {count()}</button>
      </>
    )
  }
  