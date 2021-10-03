import { Link } from "react-router-dom";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";

// More repetition and nesting -1 here that can be refactored, even if the componet is only 40 lines, it could be even better with just 5-10 min of refactoring
export default function Card({ parcel }) {
  const { id, parcel_id, status, sender } = parcel;
  return (
    <div className="card-wrapper">
      <li>
        <HiOutlineFingerPrint />
        <label>
          <p>Package id</p>
          <span>{parcel_id}</span>
        </label>
      </li>
      <li>
        <FaTruck />
        <label>
          <p>Status</p>
          <span>{status}</span>
        </label>
      </li>
      <li>
        <RiShoppingCartFill />
        <label>
          <p>From</p>
          <span>{sender}</span>
        </label>
      </li>
      <div className="line"></div>
      <div className="button-wrapper">
        <Link to={`/item/${id}`}>
          <button className="secondary-button">View more</button>
        </Link>
      </div>
    </div>
  );
}
