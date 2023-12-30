import Test, { x } from "./test";
import './App.css';

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { createContext, useEffect, useRef, useState } from "react";
export const alertMe = createContext();

function App() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

// Start useEffect
 useEffect(()=>{
  console.log("Test");
 },[count]) // in this case of useEffect print Test only one ,
  // With One Render,if an array is empty
  // , if not array can take state and this case will re-render only state

 useEffect(()=>{
  console.log("Test");
 }); // in this case of useEffect print Test with each render on page 
// End  useEffect


// End useRef
 const focus = useRef(null); // like a pointer to element and can control in this element 
 useEffect(()=> {
  focus.current.focus();
 },[focus])
 // End useRef

 
  return (
    <div className="App">
      <alertMe.Provider value="alert Me"></alertMe.Provider>
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
