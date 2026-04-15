import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import { router } from './router/Routes';
import ContactHistoryProvider from './context/ContactHistoryProvider';








createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ContactHistoryProvider>
    <RouterProvider router={router} />

    </ContactHistoryProvider>
    
  </StrictMode>,
)
