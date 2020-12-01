import React, { forwardRef, useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../../services/api';
import MaterialTable from 'material-table';
import { Modal, Button } from "react-bootstrap";
import Carousel from '../../../../components/CustomCarousel/Carousel';
import brLocale from 'date-fns/locale/pt-BR';
import  '../../styles.css';


import {localization, options, styles } from '../../../../variables/MaterialTable';

import { AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList,
		 FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn}
from '@material-ui/icons'

import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    SaveAlt: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const extendedLocalization = {
  body: {
    emptyDataSourceMessage: 'Nenhum registro para exibir',
    dateTimePickerLocalization: brLocale
  },
  ...localization
};

function DataTable_VP_F() {
  const [filtro, setFiltro] = useState("T");

  const [bemPatrimonial, setBemPatrimonial] = useState([])
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // let mounted = true;
    const tipo = filtro;
    const data = { tipo };
    //// console.log('Filtro IMB: ', data);
    setLoading(true);
    api.patch('/faixadominio/filtro', data)
      .then(res => {
        setBemPatrimonial(res.data);
        setLoading(false);
      })
      // eslint-disable-next-line
  }, [filtro]);


	const [valorCDCRR, setValorCDCRR] = useState([]);  // CDCRR
	const [valorRESLC, setValorRESLC] = useState([]);  // RESLC
	const [valorTPIVS, setValorTPIVS] = useState([]);  // TPIVS
	const [valorRESID, setValorRESID] = useState([]);  // RESID




  useLayoutEffect(() => {
		api.get(`/dominiogrid/`, {

		}).then(response => {

    const dominioCDCRR =  response.data.filter(dom => dom.dominio === 'CDCRR');
	  setValorCDCRR(JSON.parse(dominioCDCRR.map(dom => dom.conteudo)));
    const dominioRESLC =  response.data.filter(dom => dom.dominio === 'RESLC');
	  setValorRESLC(JSON.parse(dominioRESLC.map(dom => dom.conteudo)));
    const dominioRESID =  response.data.filter(dom => dom.dominio === 'RESID');
	  setValorRESID(JSON.parse(dominioRESID.map(dom => dom.conteudo)));
    const dominioTPIVS =  response.data.filter(dom => dom.dominio === 'TPIVS');
	  setValorTPIVS(JSON.parse(dominioTPIVS.map(dom => dom.conteudo)));
    })
    // eslint-disable-next-line
  }, [])


const columnsDominios = [
  {
    field: "BP", title: "Ficha",
    cellStyle: {
      width: 5,
      maxWidth: 5
    },
  },
  {
    field: "Versao", title: "Versão", hidden:true, hiddenByColumnsButton: true,
    cellStyle: {
      width: 5,
      maxWidth: 5
    },
    headerStyle: {
      width: 5,
      maxWidth: 5
    }
  },
  { field: "Corredor", title: "Corredor", lookup: valorCDCRR,
    cellStyle: {
      width: 50,
      maxWidth: 50
    },
    headerStyle: {
      width: 50,
      maxWidth: 50
    }
  },
  { field: "TipoInvasao", title: "Tipo Invasão", lookup: valorTPIVS,
    cellStyle: {
      width: 50,
      maxWidth: 50
    },
    headerStyle: {
      width: 50,
      maxWidth: 50
    }
  },
  { field: "Municipio", title: "Municipio", lookup: valorRESID,
    cellStyle: {
      width: 50,
      maxWidth: 50
    },
    headerStyle: {
      width: 50,
      maxWidth: 50
    }
  },
  { field: "SiglaPatio", title: "Pátio Anterior", lookup: valorRESLC},
  { field: "SiglaPatioPrx", title: "Pátio Posterior", lookup: valorRESLC, hidden:true, hiddenByColumnsButton: true },
  { field: "PosicaoKmIni",
    title: "Km Inicial",
  },
  { field: "DistBoletoExtIniInvasao", title: "Boleto (<)",
    customFilterAndSearch: (term, rowData) => term >= rowData.DistBoletoExtIniInvasao
  },
  {
    field: "InicioValidade", title: "Inicio Validade", type: 'date'
  },
];


  return (
    <div style={{ maxWidth: '100vw' }}>
      <MaterialTable
        columns={columnsDominios}
        localization={extendedLocalization}
        data={bemPatrimonial}
        icons={tableIcons}
        title={
          <Select
            labelId="select-filter-label"
            id="select-filter"
            value={filtro}
            // style={{  width: 200, marginBottom: 10, marginRight: 10}}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <MenuItem value={"U"}>Consultar Última versão</MenuItem>
            <MenuItem value={"T"}>Consultar Todas as versões</MenuItem>
            <MenuItem value={"B"}>Consultar Baixados</MenuItem>
          </Select>
        }
        options={options}
        isLoading={loading}
        actions={[
          {
            icon: () => <Link to={'/admin/bp/vp/f/cadastro/'}>{<AddBoxTwoToneIcon style={styles.iconAdd} />}</Link>,
            tooltip: 'Inserir Registro',
            isFreeAction: true,
            onClick: () => { }
          },
          rowData => ({
            icon: () => <Link to={'/admin/bp/vp/f/visualiza/' + rowData.BP + '/' + rowData.IDVersao }>{<AssignmentOutlinedIcon style={styles.iconTable} />}</Link>,
            tooltip: 'Ver Detalhes',
          }),
          rowData => ({
            icon: () => <Link to={'/map/mapa-geo/'+ rowData.BP + '/' + rowData.CodTipoInvasao}>{<MapOutlinedIcon style={styles.iconTable} />}</Link>,
            tooltip: 'Mapa Georreferenciado',
          }),
          rowData => ({
            icon: () => {
              if (rowData.QtdeFotos > 0) {
                return <PhotoLibraryOutlinedIcon style={styles.iconTable} />
              } else {
                return <PhotoLibraryOutlinedIcon style={styles.iconTableDisabled} />
              }
            },
            tooltip: 'Ver Fotos',
            onClick: (event, rowData) => {
              sessionStorage.setItem('@sispatgeo-app/idversao', rowData.IDVersao);
              if (rowData.QtdeFotos > 0) { handleShow() };
            }
          })
        ]}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Fotos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fechar
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
	 );
}

export default DataTable_VP_F;
