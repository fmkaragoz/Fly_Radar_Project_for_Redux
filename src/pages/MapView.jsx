import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "leaflet";
import { cleanPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);

  const dispatch = useDispatch();

  const planceIcon = icon({
    iconUrl: "/plane-icon.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={[38.934879, 35.411594]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flightState.flights.map((flight) => (
        <Marker
          icon={planceIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Kod: {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)} className="w-100">
                Detay
              </button>
              {flightState.path.length > 0 && (
                <button onClick={() => dispatch(cleanPath())}>
                  Rotayı Temizle
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      <Polyline positions={flightState?.path} />
    </MapContainer>
  );
};

export default MapView;
