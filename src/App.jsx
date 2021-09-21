import Header from './components/Header';
import Home from './components/Home';
import PackagesList from './components/PackagesList';
import PackageItem from './components/PackageItem';
import './css/style.css';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      {/* <PackagesList />
      <PackageItem/> */}
    </div>
  );
}
