import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LivingRoom from "./screens/LivingRoom/LivingRoom";

import Kitchen from "./screens/Kitchen/KitchenScreen";
import Bedroom from "./screens/Bedroom/BedroomScreen";
import Cart from "./screens/Cart/Cart";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import ManagerScreen from "./screens/ManagerScreen/ManagerScreen";
import CartSummary from "./screens/CartSummary/CartSummary";
import SignIn from "./screens/SignIn/SignIn";
function App() {
  return (
    <Router>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/living_room' exact component={LivingRoom} />
      <Route path='/kitchen' exact component={Kitchen} />
      <Route path='/bedroom' exact component={Bedroom} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/productscreen/:name' exact component={ProductScreen} />
      <Route path='/managerscreen' exact component={ManagerScreen} />
      <Route path='/cartsummary' exact component={CartSummary} />
      <Route path='/signin' exact component={SignIn} />
    </Router>
  );
}

export default App;
