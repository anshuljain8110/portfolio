import { React } from 'react';
import './App.css';
import Blog from './components/blogs/Blog';
import Hero from './components/hero/Hero';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
