import React from 'react';
import { useFetch } from '../src/hooks/useFetchHook/useFetch';
import { useWindowResize } from '../src/hooks/useWindowSizeCalculatorHook/useWindowResizeCalculator';
import useCounterReducerHook from '../src/hooks/useReducerHook/useReducerHook';
import MyMemo from  './hooks/useMemo/myMemo';

function App() {
  const width =  useWindowResize();
  const [isLoading, fetchData] = useFetch('api',[]);
  //const count = useCounterReducerHook();
  /** you have  fetchData data here*/
  /** please check for null pointer of fetchdata since it is initialised as null in the custom hook */
  const selectedData = fetchData ? fetchData.results : null;

  return (
    <div className="App">
        {/* <p>{count}</p> */}
        {/* {useCounterReducerHook()}
        <h1>SHowing window resize width: {width}</h1> */}
        <MyMemo />
    </div>
  );
}

export default App;
