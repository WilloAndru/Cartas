import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import Principal from "./pages/Principal";
import Mazo from "./pages/Mazo";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Mazo />,
    },
    {
      path: "/1",
      element: <Principal />,
    },
  ],
  {
    basename: "/Cartas/",
  }
);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
