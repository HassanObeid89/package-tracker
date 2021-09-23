import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Marker = () => (
  <div>
    <FaMapMarkerAlt />
  </div>
);
export default function Map({ coordinates }) {
  return (
    <div className="map-wrapper">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_KEY}` }}
        defaultCenter={coordinates}
        defaultZoom={6}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={coordinates.lat} lng={coordinates.lng} />
      </GoogleMapReact>
    </div>
  );
}
