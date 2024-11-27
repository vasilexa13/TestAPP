import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import TableData from "./TableData.jsx";
import AddNewField from "./AddNewField.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <App />
      <TableData/>
      <AddNewField/>
      <Footer/>
  </StrictMode>,
)
