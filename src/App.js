import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
