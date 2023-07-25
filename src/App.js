import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const[data,setData] = useState({})
  useEffect(() => {
    fetch()
    },[]);



  function fetch() {
    axios.get("https://live-jvfm.onrender.com/").then(function (response) {
      // handle success
      setData(response)
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
  }
  
  return (
 
        <p>
        {data.data}
        </p>
  
  );
}

export default App;
