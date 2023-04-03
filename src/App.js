import { BrowserRouter, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Home from "./pages/Home";
import About from "./pages/About";
import MoneyTransfer from "./pages/MoneyTransfer";
import Dashboard from "./pages/Dashboard";
import TransactionHistory from "./pages/TransactionHistory";
import AccountView from "./pages/AccountView";
import React, { useState } from "react";
import CreateAccount from "./pages/CreateAccount";
import ServicesPage from "./pages/ServicePage";
import Authentication from "./pages/Authenticate";

export const UserContext = React.createContext(null);

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><Home/></UserContext.Provider>}/>
          <Route path="/auth" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><Authentication/></UserContext.Provider>}/>
          <Route path="/dashboard" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><Dashboard/></UserContext.Provider>}/>
          <Route path="/about" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><About/></UserContext.Provider>}/>
          <Route path="/moneyTransfer" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><MoneyTransfer/></UserContext.Provider>}/>
          <Route path="/transactionHistory" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><TransactionHistory/></UserContext.Provider>}/>
          <Route path="/accountview" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><AccountView/></UserContext.Provider>}/>
          <Route path="/createaccount" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><CreateAccount/></UserContext.Provider>}/>
          <Route path="/servicepage" element={<UserContext.Provider value={{ user: user, setUser: setUser }}><ServicesPage/></UserContext.Provider>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
