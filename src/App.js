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

function App() {
  return (
    <Router>
      <Route component={AddItem} path="/add" />
      <Route component={ItemList} path="/items" />
      <Route component={Home} path="/Home" />
      <Route component={Login} path="/Login" />
    </Router>
  );
}

export default App;
