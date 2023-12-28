import Test, { x } from "./test";
import './App.css';

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
function App() {

  return (
    <div className="App">
      <>
      <BrowserRouter>
       <Routes>
            <Route path="/header" element={<Header/>} />
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound></NotFound>}/>   {/*if  path doesn't exsit return NotFound */}
       </Routes>
      </BrowserRouter>

        <SearchBar></SearchBar>
      </>

    </div>
  );
}

export default App;
