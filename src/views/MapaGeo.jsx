import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GroundOverlay,
  // Marker,
  KmlLayer,
  // MapControl
} from "react-google-maps";
//import { MeasureTool } from "measuretool-googlemaps-v3";

//const baseURL = process.env.REACT_APP_BASE_URL;

//const malha_vli = 'https://www.dropbox.com/s/99eufwwt4kj1z3p/MALHA_VLI_COMPLETO.kml?dl=0';

//console.log('malha vli: ', malha_vli);

const styles = {
  default: [],
  hide: [
    {
      featureType: "poi",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.icon",
      stylers: [{ visibility: "true" }]
    },
  ]
};

/*
const createMeasureTool = () => {

  this.measureTool = new MeasureTool(this.props.map, {
    showSegmentLength: false,
    tooltip: false,
    contextMenu: false
  })
  this.measureTool._helper.formatLength =  (value) => {
    return this._formatLengthMetric(value) + " / " + this._formatLengthImperial(value * 3.28084)
  }
}
*/
// latLngBounds: { north: 85, south: -85, west: -180, east: 180 }, --> Mundo
// latLngBounds: { north: 5.24, south: -33.77, west: -73.99, east: -34.73 }, --> Brasil
// latLngBounds: { north: -22.45, south: -23.03, west: -43.97, east: -42.76 }, --> Supervia
// latLngBounds: { north: -4.97, south: -26.72, west: -54.29, east: -33.30 }, --> VLI

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={6}
      // defaultCenter={{ lat: -19.9025412, lng: -44.03409 }}
      defaultCenter={{lat: 40.740, lng: -74.18}}
      defaultOptions={{
        scrollwheel: true,
        zoomControl: true,
        fullscreenControl: false,
        streetViewControl: false,
        scaleControl: true,
        styles: styles["hide"],
        // restriction: {
        //   latLngBounds: { north: -4.97, south: -26.72, west: -54.29, east: -33.30 },
        // },
      }}
      >
      <KmlLayer
        url='http://www.felgoulart.com.br/sysfer/MRS/CPTM.kmz'
        options={{ preserveViewport: true }}
      />
      <KmlLayer
        url='http://www.felgoulart.com.br/sysfer/MRS/FAIXA_DE_15_METROS.kmz'
        options={{ preserveViewport: true }}
      />
      <KmlLayer
        url='http://www.felgoulart.com.br/sysfer/MRS/FAIXA_DOCUMENTAL.kmz'
        options={{ preserveViewport: true }}
      />
      <KmlLayer
        url='http://www.felgoulart.com.br/sysfer/MRS/FAIXA_PROPOSTA.kmz'
        options={{ preserveViewport: true }}
      />
      <KmlLayer
        url='http://www.felgoulart.com.br/sysfer/MRS/MALHA.kmz'
        options={{ preserveViewport: true }}
      />
      <KmlLayer
        url='http://www.felgoulart.com.br/sysfer/MRS/OCUPACOES_2.kmz'
        options={{ preserveViewport: true }}
      />
      <KmlLayer
        url='http://www.felgoulart.com.br/sysfer/MRS/OCUPACOES_IMAGEM.kmz'
        options={{ preserveViewport: true }}
      />

      {/* props.isMarkerShown && <Marker position={{ lat: -22.905016, lng: -43.192511 }} /> */}
      <GroundOverlay
      defaultUrl="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
      defaultBounds={new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(40.712216, -74.22655),
        new window.google.maps.LatLng(40.773941, -74.12544)
      )}
      defaultOpacity={1}
    />
    </GoogleMap>
  ))
);

function GoogleMaps({ ...props }) {
  return (
    <CustomMap
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXFxk7BvScu1Jqe_C1GAbCQXwn4Gf8yd4&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `92%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />

  );
}

export default GoogleMaps;


