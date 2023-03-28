import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export default function Map() {

    return (
        <MapContainer className="map" center={[52.5200, 13.4050]} zoom={12} scrollWheelZoom={false} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.4966, 13.4221]}>
            <Popup>
            SO36 <br /> Concert Hall
            </Popup>
        </Marker>
        <Marker position={[52.5004, 13.4518]}>
            <Popup>
            Festaal Kreuzberg <br /> Concert Hall
            </Popup>
        </Marker>
        </MapContainer>
    )
}
