import Test, { x } from "./test";
import './App.css';

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/header" element={<Header />} />
            <Route index element={<Home />} /> {/* return to default page index */}
            <Route path="*" element={<NotFound />}/> {/* if path doesn't exist return NotFound */}
          </Routes>
        </BrowserRouter>

        <SearchBar></SearchBar>
      </>
    </div>
  );
}

export default App;
