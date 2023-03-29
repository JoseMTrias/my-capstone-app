import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet'
import L from "leaflet"
import "leaflet/dist/leaflet.css";

export default function Map() {

    // const markerIcon = new L.Icon({
    //     iconUrl: require("../Map/Icon/mapmarker.png"),
    //     iconSize: [50, 82]
    // })

    return (
        <MapContainer className="map" center={[52.5200, 13.4050]} zoom={11} scrollWheelZoom={false} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={[52.4966, 13.4221]}>
                <Popup>
                <a href="https://www.so36.com/tickets">SO36</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5004, 13.4518]}>
                <Popup>
                <a href="https://festsaal-kreuzberg.de/">Festaal Kreuzberg</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5077, 13.4519]}>
                <Popup>
                <a href="https://www.astra-berlin.de/">Astra Kulturhaus </a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5073, 13.4548]}>
                <Popup>
                <a href="https://www.cassiopeia-berlin.de/">Cassiopeia</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5078, 13.4516]}>
                <Popup>
                <a href="https://www.urbanspree.com/">Urban Spree</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.4800, 13.5003]}>
                <Popup>
                <a href="https://www.funkhaus-berlin.net/">Funkhaus</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.4869, 13.4214]}>
                <Popup>
                <a href="https://huxleysneuewelt.com/">Huxleys Neue Welt</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5382, 13.4127]}>
                <Popup>
                <a href="https://www.kulturbrauerei.de/">Kulturbrauerei</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5063, 13.4436]}>
                <Popup>
                <a href="https://www.mercedes-benz-arena-berlin.de/">Mercedes-Benza-Arena</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5016, 13.3812]}>
                <Popup>
                <a href="https://www.tempodrom.de/">Tempodrom Berlin</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.4807, 13.4330]}>
                <Popup>
                <a href="https://www.facebook.com/berlin.loophole/?locale=de_DE">Loophole</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5449, 13.4043]}>
                <Popup>
                <a href="https://www.max-schmeling-halle.de/">Max-Schmeling-Halle</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.5298, 13.3971]}>
                <Popup>
                <a href="https://www.schokoladen-mitte.de/">Schokoladen</a> <br /> Concert Hall
                </Popup>
            </Marker>
            <Marker position={[52.53030788915409, 13.385275240530538]}>
                <Popup>
                <a href="https://super-sessions.de/">Super-Sessions Proberäume</a> <br /> Rehearsal Room
                </Popup>
            </Marker>
            <Marker position={[52.507274820757274, 13.455739289780476]}>
                <Popup>
                <a href="https://noisy-rooms.com/">Noisy Rooms</a> <br /> Rehearsal Room
                </Popup>
            </Marker>
            <Marker position={[52.5169, 13.3091]}>
                <Popup>
                <a href="https://www.berlin-musikschule.com/proberaeume/bandproberaeume.html">Band Proberäume Berlin-Musikschule</a> <br /> Rehearsal Room
                </Popup>
            </Marker>
            <Marker position={[52.5312, 13.4115]}>
                <Popup>
                <a href="https://www.8mmbar.de/">8mm bar</a> <br /> Concert Hall
                </Popup>
            </Marker>
        </MapContainer>
    )
}
