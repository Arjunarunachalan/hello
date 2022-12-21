import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./list/List";
const root = ReactDOM.createRoot(document.getElementById("root"));


  
root.render(
  <div className="app">

    <Header />
    
    <div className="app-body">
      <div className="app-list">

       <List />
       
      
      </div>
    </div>
    <hr />
    <Footer />







  </div>
);
