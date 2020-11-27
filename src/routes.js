import MapaGeo from 'views/MapaGeo2.jsx'

import DataTable_VP_F from './views/bp/vp/f/consulta_vp_f';
import Cadastro_VP_F from './views/bp/vp/f/cadastro_vp_f';
import Visualiza_VP_F from './views/bp/vp/f/visualiza_vp_f';


var routes = [
  {
    path: '/mapa-geo/:idBem2/:tipoInvasao',
    layout: '/map',
    name: 'Mapa Geo',
    icon: 'fa fa-map',
    component: MapaGeo
  },
  {
    collapse: true,
    path: '/imoveis',
    name: 'Faixa de Domínio',
    state: 'imoveis',
    icon: 'fa fa-bacon',
    views: [
      {
        path: '/bp/vp/f/consulta',
        layout: '/admin',
        name: 'Ocupações',
        mini: 'OC',
        component: DataTable_VP_F
      },
      {
        path: '/bp/vp/f/cadastro/:idBem2',
        layout: '/admin',
        name: 'Ocupações',
        mini: 'OC',
        component: Cadastro_VP_F,
        invisible: true
      },
      {
        path: '/bp/vp/f/visualiza/:idBem2',
        layout: '/admin',
        name: 'Ocupações',
        mini: 'OC',
        component: Visualiza_VP_F,
        invisible: true
      },
      {
        path: '/bp/vp/f/cadastro',
        layout: '/admin',
        name: 'Ocupações',
        mini: 'OC',
        component: Cadastro_VP_F,
        invisible: true
      },
    ]
  },
];

export default routes;
