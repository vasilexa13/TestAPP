import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/TableHead.jsx'
import Header from "./Header/Header.jsx";
import TableData from "./TableData/TableData.jsx";
// import AddNewField from "./AddNewField/AddNewField.jsx";
// import ModalWraper from "./ModalWraper/ModalWraper.jsx";
import TableHead from "./App/TableHead.jsx";
import ModalFormic from "./Modal/ModalFormic.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/*<ModalFormic/>*/}
      <Header/>
      <TableHead />
      <TableData/>
  </StrictMode>,
)
