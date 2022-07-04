import './App.css';
import Navbar from "./components/Navbar"
import News from "./components/News"
import React, { useState } from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [q, setQ] = useState(" ")
  const [sortBy,setSortBy] = useState("popularity")
  const [language,setLanguage] = useState("en")
  const [country,setCountry] = useState("in")

  const setProps=(Q,co,la,sb)=>{
    setQ(Q);
    setCountry(co);
    setLanguage(la);
    setSortBy(sb)
  }
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar setProps={setProps}/>
      <Routes>
          <Route path="/" element={ <News category="general" q={q} sortBy={sortBy} language={language} country={country}/>} />
          <Route path="/business" element={ <News category="business" q={q} sortBy={sortBy} language={language} country={country}/>} />
          <Route path="/entertainment" element={ <News category="entertainment" q={q} sortBy={sortBy} language={language} country={country}/>} />
          <Route path="/health" element={ <News category="health" q={q} sortBy={sortBy} language={language} country={country}/>} />
          <Route path="/science" element={ <News category="science" q={q} sortBy={sortBy} language={language} country={country}/>} />
          <Route path="/sports" element={ <News category="sports" q={q} sortBy={sortBy} language={language} country={country}/>} />
          <Route path="/technology" element={ <News category="technology" q={q} sortBy={sortBy} language={language} country={country}/>} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
