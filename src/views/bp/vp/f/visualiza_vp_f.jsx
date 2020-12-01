import React, { useState,  useLayoutEffect } from 'react';
import api from '../../../../services/api';
import {useParams} from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment'
// import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
// import { styles } from '../../../../variables/MaterialTable';



import  '../../styles.css'
import {
  Grid,
  Row,
  Col,
  NavItem,
  Nav,
  Tab
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import TableDocsDesFotos from '../../../Components/TablesImagens/index';

function Visualiza_vp_f() {
	const {idBem2, IDVersao} = useParams();
	const [valorBP, setValorBP] = useState([]);
	// const [valorIncorporacao, setValorIncorporacao] = useState([]);
	const [valorInicioValidade, setValorInicioValidade] = useState([]);
	const [valorFimValidade, setValorFimValidade] = useState([]);
	// const [valorNumFicha, setValorNumFicha] = useState([]);
	// const [valorLogin, setValorLogin] = useState([]);
	// const [valorMotivoVersao, setValorMotivoVersao] = useState([]);
	const [valorVersao, setValorVersao] = useState([]);
	// const [valorQtdeFotos, setValorQtdeFotos] = useState([]);
	// const [valorIDVersao, setValorIDVersao] = useState([]);
	const [valorFacilRemocao, setValorFacilRemocao] = useState([]);  // FAREM
	const [valorCorredor, setValorCorredor] = useState([]);  // CDCRR
	const [valorTpPosOcupacao, setValorTpPosOcupacao] = useState([]);  // TPPOC
	const [valorPrincipalAcesso, setValorPrincipalAcesso] = useState([]);
	const [valorSiglaPatio, setValorSiglaPatio] = useState([]);  // RESLC
	const [valorSiglaPatioPrx, setValorSiglaPatioPrx] = useState([]);  // RESLC
	const [valorEndereco, setValorEndereco] = useState([]);
	const [valorComplemento, setValorComplemento] = useState([]);
	const [valorBairro, setValorBairro] = useState([]);
	const [valorMunicipio, setValorMunicipio] = useState([]);  // RESID
	const [valorUF, setValorUF] = useState([]);  // GUF
	const [valorZona, setValorZona] = useState([]);  // LOCZO
	const [valorCoordenadas, setValorCoordenadas] = useState([]);
	const [valorPosicaoKmIni, setValorPosicaoKmIni] = useState([]);
	const [valorPosicaoKmFim, setValorPosicaoKmFim] = useState([]);
	const [valorPosicaoKmIniHistorico, setValorPosicaoKmIniHistorico] = useState([]);
	const [valorPosicaoKmFimHistorico, setValorPosicaoKmFimHistorico] = useState([]);
	const [valorPassNivel, setValorPassNivel] = useState([]);  // SNNID
	const [valorPassPedestre, setValorPassPedestre] = useState([]);  // SNNID
	const [valorTipoInvasao, setValorTipoInvasao] = useState([]);  // TPIVS
	const [valorCodTipoInvasao, setValorCodTipoInvasao] = useState([]);  // TPIVS
	const [valorDistBoletoExtIniInvasao, setValorDistBoletoExtIniInvasao] = useState([]);
	const [valorAreaTotal, setValorAreaTotal] = useState([]);
	const [valorAreaEdificada, setValorAreaEdificada] = useState([]);
	const [valorAreaNaoEdificada, setValorAreaNaoEdificada] = useState([]);
	const [valorLargura, setValorLargura] = useState([]);
	const [valorExtensao, setValorExtensao] = useState([]);
	const [valorAnoConstrucao, setValorAnoConstrucao] = useState([]);
	const [valorGaragem, setValorGaragem] = useState([]);  // SNNID
	const [valorTipoEstrutura, setValorTipoEstrutura] = useState([]);  // TIPES
	const [valorTipoCobertura, setValorTipoCobertura] = useState([]);  // TPCOB
	const [valorRevInternoParedes, setValorRevInternoParedes] = useState([]);  // RVIPD
	const [valorInstEletrica, setValorInstEletrica] = useState([]);  // SNNID
	const [valorIlumPublica, setValorIlumPublica] = useState([]);  // SNNID
	const [valorInstHidraulica, setValorInstHidraulica] = useState([]);  // SNNID
	const [valorDescEsgoto, setValorDescEsgoto] = useState([]);  // SNNID
	const [valorLixoResiduos, setValorLixoResiduos] = useState([]);  // SNNID
	const [valorSegPublica, setValorSegPublica] = useState([]);  // SNNID
	const [valorTpVAcesso, setValorTpVAcesso] = useState([]);  // TPVAC
	const [valorAcessoFLFerrea, setValorAcessoFLFerrea] = useState([]);  // SNNID
	const [valorObservacoes, setValorObservacoes] = useState([]);


  useLayoutEffect(() => {
		api.get(`/faixadominio/${idBem2}`, {

		}).then(response => {

	setValorBP(response.data.BP);
	// setValorIncorporacao(response.data.Incorporacao);
	setValorInicioValidade(moment(response.data.InicioValidade).format('DD/MM/YYYY'));
	setValorFimValidade(response.data.FimValidade);
	// setValorNumFicha(response.data.NumFicha);
	// setValorLogin(response.data.Login);
	// setValorMotivoVersao(response.data.MotivoVersao);
	setValorVersao(response.data.Versao);
	// setValorQtdeFotos(response.data.QtdeFotos);
	// setValorIDVersao(response.data.IDVersao);
	setValorPrincipalAcesso(response.data.PrincipalAcesso);
	setValorEndereco(response.data.Endereco);
	setValorComplemento(response.data.Complemento);
	setValorBairro(response.data.Bairro);
	setValorCoordenadas(response.data.Coordenadas);
	setValorPosicaoKmIni(response.data.PosicaoKmIni);
	setValorPosicaoKmFim(response.data.PosicaoKmFim);
	setValorPosicaoKmIniHistorico(response.data.PosicaoKmIniHistorico);
	setValorPosicaoKmFimHistorico(response.data.PosicaoKmFimHistorico);
	setValorDistBoletoExtIniInvasao(response.data.DistBoletoExtIniInvasao);
	setValorAreaTotal(response.data.AreaTotal);
	setValorAreaEdificada(response.data.AreaEdificada);
	setValorAreaNaoEdificada(response.data.AreaNaoEdificada);
	setValorLargura(response.data.Largura);
	setValorExtensao(response.data.Extensao);
	setValorAnoConstrucao(response.data.AnoConstrucao);
	setValorObservacoes(response.data.Observacoes);

	setValorFacilRemocao(response.data.FacilRemocao);  // FAREM
	setValorCorredor(response.data.Corredor);  // CDCRR
	setValorTpPosOcupacao(response.data.TpPosOcupacao);  // TPPOC
	setValorSiglaPatio(response.data.SiglaPatio);  // RESLC
	setValorSiglaPatioPrx(response.data.SiglaPatioPrx);  // RESLC
	setValorMunicipio(response.data.Municipio);  // RESID
	setValorUF(response.data.UF);  // GUF
	setValorZona(response.data.Zona);  // LOCZO
	setValorPassNivel(response.data.PassNivel);  // SNNID
	setValorPassPedestre(response.data.PassPedestre);  // SNNID
	setValorTipoInvasao(response.data.TipoInvasao);  // TPIVS
	setValorCodTipoInvasao(response.data.CodTipoInvasao);  // TPIVS
	setValorGaragem(response.data.Garagem);  // SNNID
	setValorTipoEstrutura(response.data.TipoEstrutura);  // TIPES
	setValorTipoCobertura(response.data.TipoCobertura);  // TPCOB
	setValorRevInternoParedes(response.data.RevInternoParedes);  // RVIPD
	setValorInstEletrica(response.data.InstEletrica);  // SNNID
	setValorIlumPublica(response.data.IlumPublica);  // SNNID
	setValorInstHidraulica(response.data.InstHidraulica);  // SNNID
	setValorDescEsgoto(response.data.DescEsgoto);  // SNNID
	setValorLixoResiduos(response.data.LixoResiduos);  // SNNID
	setValorSegPublica(response.data.SegPublica);  // SNNID
	setValorTpVAcesso(response.data.TpVAcesso);  // TPVAC
	setValorAcessoFLFerrea(response.data.VAcessoFLFerrea);  // SNNID
    })
    // eslint-disable-next-line
  }, [])

    const history = useHistory();

    const usuario = sessionStorage.getItem('@sispatgeo-app/usuario');

    var perfilUsuario = true

    if (usuario === 'admin') perfilUsuario = false


    const routeEditar = () =>{
      let path = `/admin/bp/vp/f/cadastro/${idBem2}/${IDVersao}`;
      history.push(path);
    }
    const routeMapaGeo = () =>{
      let path = `/map/mapa-geo/${idBem2}/${valorCodTipoInvasao}`;
      history.push(path);
    }

    const InfoGerais = (
      <div>
        <FormInputs
          ncols={["col-md-4", "col-md-4", "col-md-4"]}
          proprieties={[
          {
            label: "CORREDOR",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorCorredor,
            disabled: true
          },
          {
            label: "PÁTIO ANTERIOR",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorSiglaPatio,
            disabled: true
          },
          {
            label: "PÁTIO POSTERIOR",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorSiglaPatioPrx,
            disabled: true
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-4", "col-md-2", "col-md-2", "col-md-2", "col-md-2"]}
          proprieties={[
          {
            label: "COORDENADAS",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorCoordenadas,
            disabled: true
          },

          {
            label: "KM INICIAL",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmIni,
            disabled: true
          },

          {
            label: "KM FINAL",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmFim,
            disabled: true
          },
          {
            label: "KM INICIAL HISTORICO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmIniHistorico,
            disabled: true
          },

          {
            label: "KM FINAL HISTORICO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmFimHistorico,
            disabled: true
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-3", "col-md-3",  "col-md-3", "col-md-3"]}
          proprieties={[
          {
            label: "ACESSO PRINCIPAL",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorPrincipalAcesso,
            disabled: true
          },
          {
            label: "LOGRADOURO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorEndereco,
            disabled: true
          },
          {
            label: "NÚMERO/COMPLEMENTO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorComplemento,
            disabled: true
          },
          {
            label: "BAIRRO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorBairro,
            disabled: true
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-3", "col-md-1",  "col-md-2", "col-md-3","col-md-3"]}
          proprieties={[
          {
            label: "MUNICIPIO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorMunicipio,
            disabled: true
          },
          {
            label: "ESTADO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorUF,
            disabled: true
          },
          {
            label: "LOCALIZAÇÃO ZONAL",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorZona,
            disabled: true
          },
          {
            label: "FACIL REMOÇÃO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorFacilRemocao,
            disabled: true
          },
          {
            label: "TIPO POSIÇÃO OCUPAÇÃO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorTpPosOcupacao,
            disabled: true
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-3", "col-md-3",  "col-md-3", "col-md-3"]}
          proprieties={[
          {
            label: "PASSAGEM EM NÍVEL",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorPassNivel,
            disabled: true
          },
          {
            label: "PN - PEDESTRE",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorPassPedestre,
            disabled: true
          },
          {
            label: "TIPO VIA DE ACESSO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorTpVAcesso,
            disabled: true
          },
          {
            label: "VIA DE ACESSO FORA VIA FÉRREA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorAcessoFLFerrea,
            disabled: true
          },
          ]}
        />
      </div>
    )

    const Caracteristicas = (
      <div>
            <FormInputs
              ncols={["col-md-3","col-md-3","col-md-3","col-md-3"]}
              proprieties={[
                {
                  label: "TIPO INVASÃO",
                  type: "text",
                  bsClass: "form-visualiza form-control",
                  placeholder: "",
                  defaultValue: valorTipoInvasao,
                },
                {
                  label: "DISTÂNCIA DO BOLETO",
                  type: "text",
                  bsClass: "form-visualiza form-control",
                  placeholder: "",
                  defaultValue: valorDistBoletoExtIniInvasao,
                  onChange: e => setValorDistBoletoExtIniInvasao(e.target.value)
                },
                {
                  label: "ANO CONSTRUÇÃO",
                  type: "text",
                  bsClass: "form-visualiza form-control",
                  placeholder: "",
                  defaultValue: valorAnoConstrucao,
                  onChange: e => setValorAnoConstrucao(e.target.value)
                },
                {
                  label: "ÁREA TOTAL",
                  type: "text",
                  bsClass: "form-visualiza form-control",
                  placeholder: "",
                  defaultValue: valorAreaTotal,
                  onChange: e => setValorAreaTotal(e.target.value)
                },
              ]}
            />
        <FormInputs
          ncols={["col-md-3","col-md-3","col-md-3","col-md-3"]}
          proprieties={[
          {
            label: "ÁREA EDIFICADA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorAreaEdificada,
            disabled: true
          },

          {
            label: "ÁREA NÃO EDIFICADA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorAreaNaoEdificada,
            disabled: true
          },

          {
            label: "LARGURA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorLargura,
            disabled: true
          },

          {
            label: "EXTENSÃO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorExtensao,
            disabled: true
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-3","col-md-3","col-md-3","col-md-3"]}
          proprieties={[
          {
            label: "GARAGEM",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorGaragem,
            disabled: true
          },
          {
            label: "TIPO ESTRUTURA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorTipoEstrutura,
            disabled: true
          },
          {
            label: "TIPO COBERTURA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorTipoCobertura,
            disabled: true
          },
          {
            label: "PAREDE",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorRevInternoParedes,
            disabled: true
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-3","col-md-3","col-md-3","col-md-3"]}
          proprieties={[
          {
            label: "INSTALAÇÃO ELÉTRICA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorInstEletrica,
            disabled: true
          },
          {
            label: "ILUMINAÇÃO PUBLICA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorIlumPublica,
            disabled: true
          },
          {
            label: "INSTALAÇÃO HIDRAULICA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorInstHidraulica,
            disabled: true
          },
          {
            label: "DESCARTE ESGOTO",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorDescEsgoto,
            disabled: true
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-3","col-md-3", "col-md-6"]}
          proprieties={[
          {
            label: "LIXO E RESIDUOS",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorLixoResiduos,
            disabled: true
          },
          {
            label: "SEGURANÇA PUBLICA",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorSegPublica,
            disabled: true
          },
          {
            label: "OBSERVAÇÕES",
            type: "text",
            bsClass: "form-visualiza form-control",
            placeholder: "",
            defaultValue: valorObservacoes,
            disabled: true
          },
          ]}
        />
      </div>
    )

    const Imagens_Desenhos = (
      <div>
        <TableDocsDesFotos />
      </div>
    )

    const headerBP = (
      <div class="header-bp">
          <Row>
            <Col md={11}>
              <FormInputs
                ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                proprieties={[
                  {
                    label: "Número da Ficha",
                    type: "text",
                    bsClass: "form-visualiza form-control",
                    placeholder: "Ficha",
                    defaultValue: valorBP,
                    disabled: true
                  },
                  {
                    label: "Versão",
                    type: "text",
                    bsClass: "form-visualiza form-control",
                    placeholder: "",
                    defaultValue: valorVersao,
                    disabled: true
                  },
                  {
                    label: "Início Validade",
                    type: "text",
                    bsClass: "form-visualiza form-control",
                    placeholder: "",
                    defaultValue: valorInicioValidade,
                    disabled: true
                  },
                  {
                    label: "Fim Validade",
                    type: "text",
                    bsClass: "form-visualiza form-control",
                    placeholder: "",
                    defaultValue: valorFimValidade,
                    disabled: true
                  },

                ]}
              />
            </Col>
            <Col md={1}>
              <Link bsClass="col-md-1" to="/admin/bp/vp/f/consulta/">
                <i className="pe-7s-angle-left-circle icone-voltar"></i>
              </Link>
            </Col>
          </Row>
        </div>
      )

    const InputForm = (
      <form>
        <Tab.Container id="nav-with-icons" defaultActiveKey="info-gerais">
          <div>
            <div className="nav-container">
              <Nav bsStyle="tabs" bsClass="nav nav-icons">
                <NavItem eventKey="info-gerais" active="true">
                  <i className="fa fa-info-circle" />
                  <br /> Informações Gerais
                </NavItem>
                <NavItem eventKey="location">
                  <i className="fa fa-gears" />
                  <br /> Características
                </NavItem>
                <NavItem eventKey="Img-Dsn">
                  <i className="fa fa-file-photo-o" />
                  <br /> Imagens/Desenhos
                </NavItem>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="info-gerais">
                <Card
                  title=""
                  category=""
                  content= {InfoGerais}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="location">
                <Card
                  content={Caracteristicas}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="Img-Dsn">
                  {Imagens_Desenhos}
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
        <Button disabled={perfilUsuario} bsStyle="primary" pullRight fill  onClick={routeEditar}>
          Editar
        </Button>
        <Button bsStyle="primary" pullRight fill  onClick={routeMapaGeo}>
          Mapa Geo
        </Button>
          {/* <Link to={'/map/mapa-geo'}>{<MapOutlinedIcon style={styles.iconTable} />}</Link> */}

        <div className="clearfix" />
      </form>
    );
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              {/* <HeaderBP /> */}
              <Card
                title={headerBP}
                content={InputForm}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
}

export default Visualiza_vp_f;







