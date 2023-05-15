
import { useMemo } from "react";

class MemoState
{
  constructor()
  {
    this.state = 22;
  }
}

export default function useCounterWithMemo() {

  const stateObject = useMemo(() => {
    return new MemoState()
  }, []);

    function count()
    {
      return stateObject.state;
    }

    function setCount(value)
    {
      stateObject.state =value;
    }

    return {currentValue: count(), setCount}
  }
  