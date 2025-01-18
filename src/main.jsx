import { createRoot } from 'react-dom/client'
import Header from "./Header/Header.jsx";
import TableData from "./TableData/TableData.jsx";
import TableHead from "./App/TableHead.jsx";
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
<StrictMode>
        <Header />
        <TableHead />
        <TableData />
</StrictMode>
)

