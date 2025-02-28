import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/ItemDetails/:id" element={<ItemDetails />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
