import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import PackagesList from "./components/PackagesList";
import PackageItem from "./components/PackageItem";
import "./css/style.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/packagesList">
          <PackagesList />
        </Route>
        <Route>
          <PackageItem path="/packageItem" />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}
