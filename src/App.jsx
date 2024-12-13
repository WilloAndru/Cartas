import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import Principal from './pages/Principal';
import Mazo from './pages/Mazo';

const router = createBrowserRouter([
  {
    path: '/mazo',
    element: <Mazo />,
  },
  {
    path: '/',
    element: <Principal />,
  },
]);

function App() {
  return (
    <ContextProvider>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </ContextProvider>
  );
}

export default App;

