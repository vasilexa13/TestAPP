import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.jsx'
import Header from "./Header/Header.jsx";
import TableData from "./TableData/TableData.jsx";
import AddNewField from "./AddNewField/AddNewField.jsx";
import ModalWraper from "./ModalWraper/ModalWraper.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <ModalWraper />
      <App />
      <TableData/>
  </StrictMode>,
)
