import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import NetProd from "./pages/NetProd/NetProd";
import Petrol from "./pages/petrol/petrol";
import Stocks from"./pages/Stocks/stocks";
import Status from"./pages/Status/status";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path='/Petrol' element={<Petrol />} />
          <Route path="/NetProd" element={<NetProd />} />
          <Route path='/Stocks' element={<Stocks />} />
          <Route path='Status' element={<Status />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
