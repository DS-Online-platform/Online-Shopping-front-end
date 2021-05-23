import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import AddItem from "./components/AddItem";
import ItemList from "./components/Items/Item";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Headers from "./components/Header";
import CheckoutCart from "./components/CheckoutCart";
import {
  ContextProvider,
  cartState,
  reducer,
} from "./components/ContextProvider";

function App() {
  return (
    <ContextProvider reducer={reducer} cartState={cartState}>
      <div>
        <Router>
          <Route component={AddItem} path="/add" />
          <Route component={ItemList} path="/items" />
          <Route component={Home} path="/Home" />
          <Route component={Login} path="/Login" />
          <Route component={Checkout} path="/checkout/:id" />
          <Route component={Checkout} path="/addtocart" />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
