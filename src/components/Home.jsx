import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1>Track your packages</h1>
      <p>
        Are you expecting delivery of a package? Great! Click the button below
        to track your packages.
      </p>
      <Link to="/packagesList">
        <button className='primary-button'>Track your packages</button>
      </Link>
    </div>
  );
}
