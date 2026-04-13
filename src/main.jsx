import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import './index.css'
import RootLayout from './layout/RootLayout';
import ErrorPage from './errorPages/ErrorPage';
import HomePage from './pages/HomePage';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/stats",
        element: <Stats />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
