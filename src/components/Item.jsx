import { useParams, useHistory } from "react-router-dom";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { FcCalendar } from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";
import moment from "moment";
import Map from "./Map";

// By having this item inside the components folder, i would think is a normal component not a Route page -1
export default function Item({ data }) {
  const params = useParams();
  const location = useHistory();
  const item = data.filter((item) => item.id === parseInt(params.id));
  const date = moment(item[0].eta);
  const last_update = moment(item[0].last_updated);

  const coordinates = {
    lat: item[0].location_coordinate_latitude,
    lng: item[0].location_coordinate_longitude,
  };

  // Refactoring DRY and Abastraction -1
  // The component is too long, you have a lot of repetition, you could have created a component called ItemDetail (look sounds confusing when the parent page is called Item)
  // then you put the <li> and pass the icon and any kind of order text as props.
  return (
    <div className="item-wrapper">
      <ul>
        <li>
          <HiOutlineFingerPrint />
          <label>
            <p>Package id</p>
            <span>{item[0].parcel_id}</span>
          </label>
        </li>
        <li>
          <FaTruck />
          <label>
            <p>Status</p>
            <span>{item[0].status}</span>
          </label>
        </li>
        <li>
          <RiShoppingCartFill />
          <label>
            <p>From</p>
            <span>{item[0].sender}</span>
          </label>
        </li>
        <li>
          <FcCalendar />
          <label>
            <p>last update</p>
            <span>{last_update.format("do [of] MMM. [at] HH:mm")}</span>
          </label>
        </li>
        <li>
          <FcCalendar />
          <label>
            <p>ETA's</p>
            <span>{date.format("do [of] MMM. [at] HH:mm")} </span>
          </label>
        </li>
        <li>
          <GrMapLocation />
          <label>
            <p>Location</p>
            <span>{item[0].location_name}</span>
          </label>
        </li>
      </ul>
      <div>
        <Map coordinates={coordinates} />
      </div>
      <div className="button-wrapper">
        <button className="secondary-button" onClick={() => location.goBack()}>
          Go back
        </button>
      </div>
    </div>
  );
}
