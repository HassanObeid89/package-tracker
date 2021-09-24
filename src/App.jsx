import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { useFetch } from "./scripts/useFetch";
import Header from "./components/Header";
import PackagesList from "./components/PackagesList";
import Item from "./components/Item";

import "./css/style.css";

export default function App() {
  const uri = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const { loading, data, error } = useFetch(uri);
  if (loading)
    return (
      <div className="spinner">
        <HashLoader />
      </div>
    );
  if (error) return <p>ooopppss</p>;
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact>
            <PackagesList data={data} />
          </Route>
          <Route path="/item/:id">
            <Item data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
