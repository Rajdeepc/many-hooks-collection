import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFetch } from '../src/hooks/useFetchHook/useFetch';


function App() {

  const [isLoading, fetchData] = useFetch('api',[]);
  /** you have  fetchData data here*/
  /** please check for null pointer of fetchdata since it is initialised as null in the custom hook */
  const selectedData = fetchData ? fetchData.results : null;

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
