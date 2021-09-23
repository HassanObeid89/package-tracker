import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useFetch } from "./scripts/useFetch";
import Header from "./components/Header";
import Home from "./components/Home";
import PackagesList from "./components/PackagesList";
import Item from "./components/Item";
import "./css/style.css";

export default function App() {
  const uri = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const { loading, data, error } = useFetch(uri);
  
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/packagesList/">
            <PackagesList loading={loading} data={data} error={error} />
          </Route>
          <Route path="/item/:id">
            <Item data={data}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
