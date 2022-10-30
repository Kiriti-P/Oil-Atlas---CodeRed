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
            <Route element={<Petrol />} />
            <Route element={<NetProd />} />
            <Route element={<Stocks />} />
            <Route element={<Status />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
