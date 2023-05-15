
class State
{
  constructor()
  {
    this.state = 100;
  }
}

function CreateState()
{
  return new State();
}

export default function useCounterNoMemo() {

  const stateObject = CreateState();


    function count()
    {
      return stateObject.state;
    }

    function setCount(value)
    {
      stateObject.state =value;
    }

    return {count, setCount}
  }
  