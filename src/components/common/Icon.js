import L from 'leaflet'
import marker from './../../assets/imgs/marker-icon.png'
import marker2 from './../../assets/imgs/marker-icon-2x.png'

const iconPerson = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker2,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 50),
    className: 'leaflet-div-icon-1'
});

export { iconPerson };