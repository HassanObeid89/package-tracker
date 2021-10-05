import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { useFetch } from "./scripts/useFetch";
import Header from "./components/Header";
import PackagesList from "./pages/PackagesList";
import Item from "./pages/Item";

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
        {/* Nesting -1 why the header is wrapped up in a div with a class called header? */}
        <Header />

        <Switch>
          <Route path="/" exact>
            <PackagesList data={data} />
          </Route>
          {/* Naming Item should not be the name of a page, it goes against naming conventions. Ask any fellow developer what Item.jsx do and they will tell you is an individual list item not the full item information page -1 */}
          {/* By your own naming PackagesList this should be called PackageDetail */}
          <Route path="/item/:id">
            <Item data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
