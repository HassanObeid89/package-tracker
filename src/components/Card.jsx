import { Link } from "react-router-dom";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
export default function Card({ parcel }) {
  const { parcel_id, status, sender } = parcel;
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
        <Link to="/packageItem">
          <button className="secondary-button">View more</button>
        </Link>
      </div>
    </div>
  );
}
