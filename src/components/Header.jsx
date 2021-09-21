import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-wrapper">
      <Link to="/">
        <h1>boxTracker</h1>
      </Link>
    </div>
  );
}
