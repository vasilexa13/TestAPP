import { createRoot } from 'react-dom/client'
import Header from "./Components/Header/Header.jsx";
import TableHead from "./Components/TableHead/TableHead.jsx";
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
<StrictMode>
        <Header />
        <TableHead />
</StrictMode>
)
