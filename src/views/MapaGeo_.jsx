import React, { Component }  from "react";
import api from '../services/api';

// react components used to create a google map
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   GroundOverlay,
//   // Marker,
//   KmlLayer,
//   // MapControl
// } from "react-google-maps";
// import { createTrue } from "typescript";
//import { MeasureTool } from "measuretool-googlemaps-v3";

const baseURL = process.env.REACT_APP_BASE_URL;

//const malha_vli = 'https://www.dropbox.com/s/99eufwwt4kj1z3p/MALHA_VLI_COMPLETO.kml?dl=0';

//// console.log('malha vli: ', malha_vli);

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

// const CustomMap = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={6}
//       // defaultCenter={{ lat: -19.9025412, lng: -44.03409 }}
//       defaultCenter={{lat: 40.740, lng: -74.18}}
//       defaultOptions={{
//         scrollwheel: true,
//         zoomControl: true,
//         fullscreenControl: false,
//         streetViewControl: false,
//         scaleControl: true,
//         styles: styles["hide"],
//         // restriction: {
//         //   latLngBounds: { north: -4.97, south: -26.72, west: -54.29, east: -33.30 },
//         // },
//       }}
//       >

//       <KmlLayer
//         url='http://www.felgoulart.com.br/sysfer/MRS/RESIDENCIA3.kml'
//         options={{ preserveViewport: true }}
//       />

//       <GroundOverlay
//       defaultUrl="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
//       defaultBounds={new window.google.maps.LatLngBounds(
//         new window.google.maps.LatLng(40.712216, -74.22655),
//         new window.google.maps.LatLng(40.773941, -74.12544)
//       )}
//       defaultOpacity={1}
//     />
//     </GoogleMap>
//   ))
// );

// function GoogleMaps({ ...props }) {
//   return (
//     <CustomMap
//       isMarkerShown
//       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXFxk7BvScu1Jqe_C1GAbCQXwn4Gf8yd4&libraries=geometry,drawing,places"
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `92%` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//     />

//   );
// }


class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IDVersao: ""
    };
  }





  // state = {
  //   venues: []
  // }

  componentDidMount() {
    this.renderMap()
    this.handleButtonClick()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
    window.initMap = this.initMap
  }


  handleButtonClick = () => {
    const fetchUserEmail = async () => {
      // const response = await fetch(baseURL+`/faixadominio/ficha/${ficha}`);
      const response = await fetch(baseURL+`/faixadominio/ficha/601184800`);
      // // console.log(response.json())
      const { IDVersao } = await response.json();
      // // console.log(IDVersao)
      this.setState({
        IDVersao
      });
    };
    fetchUserEmail();
  };


  initMap = () => {
    var   setIDVersao = 0;



    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: { lat: -22.8059377, lng: -43.3884751 },
    });
    // map.data.loadGeoJson("./15metros.geojson");
    // map.data.loadGeoJson("./malha.geojson");
    // map.data.loadGeoJson("./ALTERACAO_DA_MALHA.geojson");
    // map.data.loadGeoJson("./AREA_DE_RISCO.geojson");
    map.data.loadGeoJson("./COMERCIO.geojson");
    // map.data.loadGeoJson("./ORGAO_PUBLICO.geojson");
    // map.data.loadGeoJson("./OUTROS.geojson");
    // map.data.loadGeoJson("./RESIDENCIA.geojson");
    // map.data.loadGeoJson("./SEM_ACESSO.geojson");
    // map.data.loadGeoJson("./TERRENO_CERCADO.geojson");
    // map.data.loadGeoJson("./VIA_PUBLICA.geojson");


    // *** DRONE ***
    const bounds = {
      8: [        [95, 97],        [142, 144],      ],
      9: [        [191, 194],        [285, 289],      ],
      10: [        [383, 388],        [570, 579],      ],
      11: [        [766, 777],        [1141, 1158],      ],
      12: [        [1533, 1555],        [2282, 2316],      ],
      13: [        [3066, 3111],        [4564, 4633],      ],
      14: [        [6132, 6222],        [9128, 9267],      ],
      15: [        [12265, 12445],        [18257, 18534],      ],
      16: [        [24531, 24890],        [36515, 37069],      ],
      17: [        [49062, 49781],        [73031, 74139],      ],
      18: [        [98125, 99563],        [146062, 148278],      ],
      19: [        [196251, 199126],        [146062, 148278],      ],
      20: [        [392502, 398253],        [146062, 148278],      ],
    };
    const imageMapType = new window.google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        if (
          zoom < 8 ||
          zoom > 18 ||
          bounds[zoom][0][0] > coord.x ||
          coord.x > bounds[zoom][0][1] ||
          bounds[zoom][1][0] > coord.y ||
          coord.y > bounds[zoom][1][1]
        ) {
          return "";
        }
        return [
          "http://www.ativosferroviarios.com.br:8090/sispat_geo_drone/drone/" + zoom + "/" + coord.x + "/" + coord.y + ".png"
        ].join("");
      },
      tileSize: new window.google.maps.Size(256, 256),
    });
    map.overlayMapTypes.push(imageMapType);

    // *** FIM DO DRONE ***

    const getPosition = function(feature) {
      if (feature.getGeometry().getType() == 'Point') {
        var position = feature.getGeometry().get();
      } else {/* Others */
        var bounds = new window.google.maps.LatLngBounds();
        feature.getGeometry().forEachLatLng(
            function(latlng) {
              bounds.extend(latlng);
            });
        position = bounds.getCenter();
      }
      return position;
    }


    var infowindow = new window.google.maps.InfoWindow({
      content: " "
    });


    map.data.addListener('click', ev => {
      const f = ev.feature;
      const tipo = f.getProperty('IDI');
      const ficha = f.getProperty('N_FICHA');
      const kminicial = f.getProperty('KM_INICIAL');
      const kmfinal = f.getProperty('KM_FINAL');
      const position = getPosition(f);
      // async function fetchIDVersao () {
      //   const getIDVersao = await fetch(baseURL+`/faixadominio/ficha/${ficha}`)
      //     .then(function(response){
      //       response.json().then(function(data){
      //         setIDVersao = data.IDVersao;
      //         // console.log(getIDVersao);
      //         return setIDVersao
      //         });
      //       })
      //     .catch(function(err){
      //       console.error('Falhou', err);
      //                       });
      //                     }

      // // // console.log('getidversao2: ',getIDVersao)
      // // console.log('setidversao2: ',setIDVersao)






      // console.log(this.IDVersao)


      // const fetch = require('node-fetch');

      // async function getIDVersao() {
      //   const response = await fetch(baseURL+`/faixadominio/ficha/${ficha}`);
      //   const versao = await response.json();
      //   return versao;
      // }

      // setIDVersao =  getIDVersao()
      //   .then(versao => versao.IDVersao);


      // // console.log(setIDVersao)

      // let myVal; // undefined until myAsyncFunc is called

      // const myAsyncFunc = (result) => {
      //    // console.log(result);
      //    myVal = result;
      //    setIDVersao = myVal;

      //    // ...
      // };

      // getIDVersao().then(myAsyncFunc); // async call of myAsyncFunc

      // // // console.log(myVal);


      // // console.log(myVal)


      // (async () => {
      //   var data2 = await fetch(baseURL+`/faixadominio/ficha/${ficha}`)
      //               .then(data => {
      //                 return data;
      //               })
      //               .catch(error => {
      //                 console.error(error);
      //               });

      //             })();

      //             // console.log(data2)

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>${tipo}</h5>
                            <b>Número da Ficha: </b>${ficha}
                            <br/><b>KM Inicial: </b>${kminicial}
                            <br/><b>KM Final: </b>${kmfinal}</div>
                            <b float:right><a href="#/admin/bp/vp/f/visualiza/${setIDVersao}" style="float:right">Ver Ficha</a></b></br>
                            `);
      // Hat tip geocodezip: http://stackoverflow.com/questions/23814197
      // infowindow.setPosition(f.getGeometry().getAt(0).getAt(0).getArray());
      infowindow.setPosition(position);
      infowindow.setOptions({
        pixelOffset: new window.google.maps.Size(0, -10)
      });
      infowindow.open(map);
    });
    window.google.maps.event.trigger('click');


  }

  render() {
    return (
        <div id="map"></div>
    )
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default GoogleMaps;


