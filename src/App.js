import { React, useContext } from 'react';
import './App.css';
import Blog from './components/blogs/Blog';
import Hero from './components/hero/Hero';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Data } from './context/Userdata';

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: (<Hero/>)
  },
  {
    path: "/blog",
    element: (<Blog/>)
  }
])


function App() {
  const data = useContext(Data)
  return (
    <div className={`${data.theme?"dark":""}`}>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
