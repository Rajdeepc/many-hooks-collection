import React from 'react';
import './App.css';
import { useFetch } from '../src/hooks/useFetchHook/useFetch';
import { useWindowResize } from '../src/hooks/useWindowSizeCalculatorHook/useWindowResizeCalculator';


function App() {
  const width =  useWindowResize();
  const [isLoading, fetchData] = useFetch('api',[]);

  /** you have  fetchData data here*/
  /** please check for null pointer of fetchdata since it is initialised as null in the custom hook */
  const selectedData = fetchData ? fetchData.results : null;

  return (
    <div className="App">
        <h1>SHowing window resize width: {width}</h1>
    </div>
  );
}

export default App;
