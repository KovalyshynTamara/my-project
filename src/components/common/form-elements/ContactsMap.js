// import map_img from './../../../assets/imgs/map.png'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { iconPerson } from '../Icon';



function ContactsMap() {
    const position = [32.2929387654277, -90.21440669814707]
    // const size = [40,50]
    return (
         <MapContainer center={[32.2929387654277, -90.21440669814707]} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={iconPerson} />
        </MapContainer>
    )
}
export default ContactsMap