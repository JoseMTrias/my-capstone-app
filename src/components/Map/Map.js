import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export default function Map() {

    return (
        <MapContainer className="map" center={[52.5200, 13.4050]} zoom={11} scrollWheelZoom={false} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div>
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
            <Marker position={[52.5077, 13.4519]}>
                <Popup>
                Astra Kulturhaus <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5073, 13.4548]}>
                <Popup>
                Cassiopeia <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5078, 13.4516]}>
                <Popup>
                Urban Spree <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.4800, 13.5003]}>
                <Popup>
                Funkhaus <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.4869, 13.4214]}>
                <Popup>
                Huxleys Neue Welt <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5382, 13.4127]}>
                <Popup>
                Kulturbrauerei <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5063, 13.4436]}>
                <Popup>
                Mercedes-Benza-Arena <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5016, 13.3812]}>
                <Popup>
                Tempodrom Berlin <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.4807, 13.4330]}>
                <Popup>
                Loophole <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5449, 13.4043]}>
                <Popup>
                Max-Schmeling-Halle <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5298, 13.3971]}>
                <Popup>
                Schokoladen <br /> Concert Hall
                </Popup>
            </Marker>
        </div>
        <div>
            <Marker position={[52.53030788915409, 13.385275240530538]}>
                <Popup>
                Super-Sessions Proberäume <br /> Rehearsal Room
                </Popup>
            </Marker>
            <Marker position={[52.507274820757274, 13.455739289780476]}>
                <Popup>
                Noisy Rooms <br /> Rehearsal Room
                </Popup>
            </Marker>
            <Marker position={[52.5169, 13.3091]}>
                <Popup>
                Band Proberäume Berlin-Musikschule <br /> Rehearsal Room
                </Popup>
            </Marker>
        </div>
        </MapContainer>
    )
}
