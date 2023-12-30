import Test, { x } from "./test";
import './App.css';

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
 useEffect(()=>{
  console.log("Test");
 },[count]) // in this case of useEffect print Test only one ,
  // With One Render,if an array is empty
  // , if not array can take state and this case will re-render only state

//  useEffect(()=>{
//   console.log("Test");
//  }); // in this case of useEffect print Test with each render on page 
 const focus = useRef(null);
 useEffect(()=> {
  focus.current.focus();
 },[focus])
  return (
    <div className="App">
      <p>{count}</p>
      <button onMouseDown={handleIncrement}>+</button>
      <button onMouseDown={handleDecrement}>-</button>
      <input ref={focus}/>
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
