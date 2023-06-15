import logo from './logo.svg';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import axios from "axios";
import { useEffect, useState } from 'react';
import Post from './compotent/post';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

    let[data,setSate] = useState([])

    const fetchData = async()=>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(response);
      setSate(response.data);
    }

  useEffect(()=>{
          fetchData();
  },[])



  return (
    <div className="App">
     {/* <Post userId={123} Id={30568} title={"Keerthi"} />*/ }
      {
        data.map((post,index)=>{
             return <Post userId={post.userId} id={post.id} title={post.title} body={post.body} />
        })
      }
    </div>
  );
}

export default App;
