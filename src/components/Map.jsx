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
        bootstrapURLKeys={{ key: `AIzaSyDjS78sgnz9N94HIs4yaeGEcDqiAF7R-w4` }}
        defaultCenter={coordinates}
        defaultZoom={6}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={coordinates.lat} lng={coordinates.lng} />
      </GoogleMapReact>
    </div>
  );
}
