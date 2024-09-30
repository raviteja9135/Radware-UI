import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products.lazy';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

let router = createBrowserRouter(
[
  {
    path:'/',
    element: <Products/>
  }
]  
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
  
    </div>
  );
}

export default App;
