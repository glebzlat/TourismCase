import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import styles from "./App.scss";

function App() {
  let position = [51.09, 71.41];

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Hello, World!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
