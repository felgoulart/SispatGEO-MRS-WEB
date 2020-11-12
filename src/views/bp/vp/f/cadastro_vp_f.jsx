import React, { useState,  useLayoutEffect } from 'react';
import api from '../../../../services/api';
import {useParams} from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import Select from "react-select";
import swal from 'sweetalert';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import { styles } from '../../../../variables/MaterialTable';
import moment from 'moment';


import {
CDCRR,
FAREM,
GUF,
LOCZO,
RESID,
RESLC,
RVIPD,
SNNID,
TIPES,
TPCOB,
TPIVS,
TPPOC,
TPVAC
} from '../../../../variables/ValoresPredefinidos'

import  '../../styles.css'
import {
  FormGroup,
  ControlLabel,
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

function Cadastro_vp_f() {
	const {idBem2} = useParams();
	const [valorBP, setValorBP] = useState([]);
	const [valorIncorporacao, setValorIncorporacao] = useState([]);
	const [valorInicioValidade, setValorInicioValidade] = useState([]);
	const [valorFimValidade, setValorFimValidade] = useState([]);
	const [valorLogin, setValorLogin] = useState([]);
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

  const valorInicial = (coluna) => {
    const hasValue = typeof coluna === 'string' && coluna.trim() !== '';
    if (hasValue) {
      return JSON.parse(`{"label": "${coluna}", "value": "${coluna}"}`);
    } else {
      return JSON.parse(`{"label": "", "value": ""}`);
    }
  }

  const checkNullValue = (variable) => {
    return (variable == null || variable.trim() === 'null') ? '' : variable;
  }

  useLayoutEffect(() => {
		api.get(`/faixadominio/${idBem2}`, {

		}).then(response => {

	setValorBP(checkNullValue(response.data.BP));
	setValorIncorporacao(checkNullValue(response.data.Incorporacao));
	setValorInicioValidade(checkNullValue(response.data.InicioValidade));
	setValorFimValidade(checkNullValue(response.data.FimValidade));
	setValorLogin(checkNullValue(response.data.Login));
	// setValorMotivoVersao(checkNullValue(response.data.MotivoVersao));
	setValorVersao(response.data.Versao);
	// setValorQtdeFotos(response.data.QtdeFotos);
	// setValorIDVersao(checkNullValue(response.data.IDVersao));
	setValorPrincipalAcesso(checkNullValue(response.data.PrincipalAcesso));
	setValorEndereco(checkNullValue(response.data.Endereco));
	setValorComplemento(checkNullValue(response.data.Complemento));
	setValorBairro(checkNullValue(response.data.Bairro));
	setValorCoordenadas(checkNullValue(response.data.Coordenadas));
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
	setValorObservacoes(checkNullValue(response.data.Observacoes));

	setValorFacilRemocao(valorInicial(response.data.FacilRemocao));  // FAREM
	setValorCorredor(valorInicial(response.data.Corredor));  // CDCRR
	setValorTpPosOcupacao(valorInicial(response.data.TpPosOcupacao));  // TPPOC
	setValorSiglaPatio(valorInicial(response.data.SiglaPatio));  // RESLC
	setValorSiglaPatioPrx(valorInicial(response.data.SiglaPatioPrx));  // RESLC
	setValorMunicipio(valorInicial(response.data.Municipio));  // RESID
	setValorUF(valorInicial(response.data.UF));  // GUF
	setValorZona(valorInicial(response.data.Zona));  // LOCZO
	setValorPassNivel(valorInicial(response.data.PassNivel));  // SNNID
	setValorPassPedestre(valorInicial(response.data.PassPedestre));  // SNNID
	setValorTipoInvasao(valorInicial(response.data.TipoInvasao));  // TPIVS
	setValorGaragem(valorInicial(response.data.Garagem));  // SNNID
	setValorTipoEstrutura(valorInicial(response.data.TipoEstrutura));  // TIPES
	setValorTipoCobertura(valorInicial(response.data.TipoCobertura));  // TPCOB
	setValorRevInternoParedes(valorInicial(response.data.RevInternoParedes));  // RVIPD
	setValorInstEletrica(valorInicial(response.data.InstEletrica));  // SNNID
	setValorIlumPublica(valorInicial(response.data.IlumPublica));  // SNNID
	setValorInstHidraulica(valorInicial(response.data.InstHidraulica));  // SNNID
	setValorDescEsgoto(valorInicial(response.data.DescEsgoto));  // SNNID
	setValorLixoResiduos(valorInicial(response.data.LixoResiduos));  // SNNID
	setValorSegPublica(valorInicial(response.data.SegPublica));  // SNNID
	setValorTpVAcesso(valorInicial(response.data.TpVAcesso));  // TPVAC
	setValorAcessoFLFerrea(valorInicial(response.data.VAcessoFLFerrea));  // SNNID
    })
    // eslint-disable-next-line
  }, [])

    const history = useHistory();

    // var perfilUsuario = false

    async function handleCadastrar(e) {
      e.preventDefault();

    const tipo = 'vp'
    const subtipo = 'f'
	  const pipe = '|'

    const colunas = 'BP+pipe+Incorporacao+pipe+InicioValidade+pipe+pipe+Login+pipe+FacilRemocao+pipe+Corredor+pipe+TpPosOcupacao+pipe+PrincipalAcesso+pipe+SiglaPatio+pipe+SiglaPatioPrx+pipe+Endereco+pipe+Complemento+pipe+Bairro+pipe+Municipio+pipe+UF+pipe+Zona+pipe+Coordenadas+pipe+PosicaoKmIni+pipe+PosicaoKmFim+pipe+PosicaoKmIniHistorico+pipe+PosicaoKmFimHistorico+pipe+PassNivel+pipe+PassPedestre+pipe+TipoInvasao+pipe+DistBoletoExtIniInvasao+pipe+AreaTotal+pipe+AreaEdificada+pipe+AreaNaoEdificada+pipe+Largura+pipe+Extensao+pipe+AnoConstrucao+pipe+Garagem+pipe+TipoEstrutura+pipe+TipoCobertura+pipe+RevInternoParedes+pipe+InstEletrica+pipe+IlumPublica+pipe+InstHidraulica+pipe+DescEsgoto+pipe+LixoResiduos+pipe+SegPublica+pipe+TpVAcesso+pipe+VAcessoFLFerrea+pipe+Observacoes'

    const valores = valorBP+pipe+valorIncorporacao+pipe+valorInicioValidade+pipe+valorLogin+pipe+valorFacilRemocao.value+pipe+valorCorredor.value+pipe+valorTpPosOcupacao.value+pipe+valorPrincipalAcesso+pipe+valorSiglaPatio.value+pipe+valorSiglaPatioPrx.value+pipe+valorEndereco+pipe+valorComplemento+pipe+valorBairro+pipe+valorMunicipio.value+pipe+valorUF.value+pipe+valorZona.value+pipe+valorCoordenadas+pipe+valorPosicaoKmIni+pipe+valorPosicaoKmFim+pipe+valorPosicaoKmIniHistorico+pipe+valorPosicaoKmFimHistorico+pipe+valorPassNivel.value+pipe+valorPassPedestre.value+pipe+valorTipoInvasao.value+pipe+valorDistBoletoExtIniInvasao+pipe+valorAreaTotal+pipe+valorAreaEdificada+pipe+valorAreaNaoEdificada+pipe+valorLargura+pipe+valorExtensao+pipe+valorAnoConstrucao+pipe+valorGaragem.value+pipe+valorTipoEstrutura.value+pipe+valorTipoCobertura.value+pipe+valorRevInternoParedes.value+pipe+valorInstEletrica.value+pipe+valorIlumPublica.value+pipe+valorInstHidraulica.value+pipe+valorDescEsgoto.value+pipe+valorLixoResiduos.value+pipe+valorSegPublica.value+pipe+valorTpVAcesso.value+pipe+valorAcessoFLFerrea.value+pipe+valorObservacoes


    const data = {
          tipo,
          subtipo,
          colunas,
          valores,
      };
      console.log(valores)
      try {
        const response = await api.post('faixadominio', data);

        if (response.data[0].RC === 0) {
          swal({
            title: "Sucesso!",
            text: `${response.data[0].Mensagem}`,
            icon: "success",
          });
          history.push('/admin/bp/vp/f/consulta');
        } else {
          swal({
            title: "Ocorreu uma falha!",
            text: `${response.data[0].Mensagem}`,
            icon: "error",
          });
        }

        } catch (err) {
        alert('Erro no cadastro, tente novamente.')
    }
    }


    async function handleCorrigir(e) {
      e.preventDefault();

    const idversao = idBem2
    const tipo = 'VP'
    const subtipo = 'F'
    const pipe = '|'

    const colunas = 'BP|Incorporacao|InicioValidade|Login|FacilRemocao|Corredor|TpPosOcupacao|PrincipalAcesso|SiglaPatio|SiglaPatioPrx|Endereco|Complemento|Bairro|Municipio|UF|Zona|Coordenadas|PosicaoKmIni|PosicaoKmFim|PosicaoKmIniHistorico|PosicaoKmFimHistorico|PassNivel|PassPedestre|TipoInvasao|DistBoletoExtIniInvasao|AreaTotal|AreaEdificada|AreaNaoEdificada|Largura|Extensao|AnoConstrucao|Garagem|TipoEstrutura|TipoCobertura|RevInternoParedes|InstEletrica|IlumPublica|InstHidraulica|DescEsgoto|LixoResiduos|SegPublica|TpVAcesso|VAcessoFLFerrea|Observacoes'

    const valores = valorBP+pipe+valorIncorporacao+pipe+valorInicioValidade+pipe+valorLogin+pipe+valorFacilRemocao.value+pipe+valorCorredor.value+pipe+valorTpPosOcupacao.value+pipe+valorPrincipalAcesso+pipe+valorSiglaPatio.value+pipe+valorSiglaPatioPrx.value+pipe+valorEndereco+pipe+valorComplemento+pipe+valorBairro+pipe+valorMunicipio.value+pipe+valorUF.value+pipe+valorZona.value+pipe+valorCoordenadas+pipe+valorPosicaoKmIni+pipe+valorPosicaoKmFim+pipe+valorPosicaoKmIniHistorico+pipe+valorPosicaoKmFimHistorico+pipe+valorPassNivel.value+pipe+valorPassPedestre.value+pipe+valorTipoInvasao.value+pipe+valorDistBoletoExtIniInvasao+pipe+valorAreaTotal+pipe+valorAreaEdificada+pipe+valorAreaNaoEdificada+pipe+valorLargura+pipe+valorExtensao+pipe+valorAnoConstrucao+pipe+valorGaragem.value+pipe+valorTipoEstrutura.value+pipe+valorTipoCobertura.value+pipe+valorRevInternoParedes.value+pipe+valorInstEletrica.value+pipe+valorIlumPublica.value+pipe+valorInstHidraulica.value+pipe+valorDescEsgoto.value+pipe+valorLixoResiduos.value+pipe+valorSegPublica.value+pipe+valorTpVAcesso.value+pipe+valorAcessoFLFerrea.value+pipe+valorObservacoes

    console.log(valores)

    const data = {
          idversao,
          tipo,
          subtipo,
          colunas,
          valores,
      };
      console.log(data)
      try {
        const response = await api.patch('faixadominio', data);

        if (response.data[0].RC === 0) {
          swal({
            title: "Sucesso!",
            text: `${response.data[0].Mensagem}`,
            icon: "success",
          });
          history.push('/admin/bp/vp/f/consulta');
        } else {
          swal({
            title: "Ocorreu uma falha!",
            text: `${response.data[0].Mensagem}`,
            icon: "error",
          });
        }

      } catch (err) {
        alert('Erro no cadastro, tente novamente.')
      }
    }


    async function handleAtualizar(e) {
      e.preventDefault();

    const idversao = idBem2
    const tipo = 'vp'
    const subtipo = 'f'
  	const pipe = '|'

    const colunas = 'BP+pipe+Incorporacao+pipe+InicioValidade+pipe+Login+pipe+FacilRemocao+pipe+Corredor+pipe+TpPosOcupacao+pipe+PrincipalAcesso+pipe+SiglaPatio+pipe+SiglaPatioPrx+pipe+Endereco+pipe+Complemento+pipe+Bairro+pipe+Municipio+pipe+UF+pipe+Zona+pipe+Coordenadas+pipe+PosicaoKmIni+pipe+PosicaoKmFim+pipe+PosicaoKmIniHistorico+pipe+PosicaoKmFimHistorico+pipe+PassNivel+pipe+PassPedestre+pipe+TipoInvasao+pipe+DistBoletoExtIniInvasao+pipe+AreaTotal+pipe+AreaEdificada+pipe+AreaNaoEdificada+pipe+Largura+pipe+Extensao+pipe+AnoConstrucao+pipe+Garagem+pipe+TipoEstrutura+pipe+TipoCobertura+pipe+RevInternoParedes+pipe+InstEletrica+pipe+IlumPublica+pipe+InstHidraulica+pipe+DescEsgoto+pipe+LixoResiduos+pipe+SegPublica+pipe+TpVAcesso+pipe+VAcessoFLFerrea+pipe+Observacoes'

    const valores = valorBP+pipe+valorIncorporacao+pipe+valorInicioValidade+pipe+valorLogin+pipe+valorFacilRemocao.value+pipe+valorCorredor.value+pipe+valorTpPosOcupacao.value+pipe+valorPrincipalAcesso+pipe+valorSiglaPatio.value+pipe+valorSiglaPatioPrx.value+pipe+valorEndereco+pipe+valorComplemento+pipe+valorBairro+pipe+valorMunicipio.value+pipe+valorUF.value+pipe+valorZona.value+pipe+valorCoordenadas+pipe+valorPosicaoKmIni+pipe+valorPosicaoKmFim+pipe+valorPosicaoKmIniHistorico+pipe+valorPosicaoKmFimHistorico+pipe+valorPassNivel.value+pipe+valorPassPedestre.value+pipe+valorTipoInvasao.value+pipe+valorDistBoletoExtIniInvasao+pipe+valorAreaTotal+pipe+valorAreaEdificada+pipe+valorAreaNaoEdificada+pipe+valorLargura+pipe+valorExtensao+pipe+valorAnoConstrucao+pipe+valorGaragem.value+pipe+valorTipoEstrutura.value+pipe+valorTipoCobertura.value+pipe+valorRevInternoParedes.value+pipe+valorInstEletrica.value+pipe+valorIlumPublica.value+pipe+valorInstHidraulica.value+pipe+valorDescEsgoto.value+pipe+valorLixoResiduos.value+pipe+valorSegPublica.value+pipe+valorTpVAcesso.value+pipe+valorAcessoFLFerrea.value+pipe+valorObservacoes

    const data = {
          idversao,
          tipo,
          subtipo,
          colunas,
          valores,
      };
    console.log(data)

      try {
          const response = await api.put('faixadominio', data);

          if (response.data[0].RC === 0) {
            swal({
              title: "Sucesso!",
              text: `${response.data[0].Mensagem}`,
              icon: "success",
            });
            history.push('/admin/bp/vp/f/consulta');
          } else {
            swal({
              title: "Ocorreu uma falha!",
              text: `${response.data[0].Mensagem}`,
              icon: "error",
            });
          }

          } catch (err) {
          alert('Erro no cadastro, tente novamente.')
      }
    }


    async function handleBaixar(e) {
      e.preventDefault();

    const idversao = idBem2
    const motivo = 'Teste01 2020-08'
    const databaixa = '2020-10-02'
    const login = 'Administrator'
    const numficha = '0'
    const data = {
          idversao,
          motivo,
          databaixa,
          login,
          numficha
      };
      try {
        const response = await api.patch('faixadominio/baixa', data);
        console.log('response ok')

        if (response.data[0].RC === 0) {
          swal({
            title: "Sucesso!",
            text: `${response.data[0].Mensagem}`,
            icon: "success",
          });
          history.push('/admin/bp/vp/f/consulta');
        } else {
          swal({
            title: "Ocorreu uma falha!",
            text: `${response.data[0].Mensagem}`,
            icon: "error",
          });
        }


        } catch (err) {
        alert('Erro ao deletar, tente novamente.')
        console.error(err.message)
    }
  }


    const InfoGerais = (
      <div>
        <Row>
          <Col md={4}>
            <FormGroup>
              <ControlLabel>CORREDOR</ControlLabel>
              <Select
                name="selectCorredor"
                value={valorCorredor}
                // isDisabled = {perfilUsuario}
                onChange={setValorCorredor}
                options={CDCRR}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <ControlLabel>PÁTIO ANTERIOR</ControlLabel>
              <Select
                name="selectSiglaPatio"
                value={valorSiglaPatio}
                // isDisabled = {perfilUsuario}
                onChange={setValorSiglaPatio}
                options={RESLC}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <ControlLabel>PÁTIO POSTERIOR</ControlLabel>
              <Select
                name="selectSiglaPatioPrx"
                value={valorSiglaPatioPrx}
                // isDisabled = {perfilUsuario}
                onChange={setValorSiglaPatioPrx}
                options={RESLC}
                placeholder=""
              />
            </FormGroup>
          </Col>
        </Row>
        <FormInputs
          ncols={["col-md-4", "col-md-2", "col-md-2", "col-md-2", "col-md-2"]}
          proprieties={[
          {
            label: "COORDENADAS",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorCoordenadas,
            onChange: e => setValorCoordenadas(e.target.value)
          },

          {
            label: "KM INICIAL",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmIni,
            onChange: e => setValorPosicaoKmIni(e.target.value)
          },

          {
            label: "KM FINAL",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmFim,
            onChange: e => setValorPosicaoKmFim(e.target.value)
          },

          {
            label: "KM INICIAL HISTORICO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmIniHistorico,
            onChange: e => setValorPosicaoKmIniHistorico(e.target.value)
          },

          {
            label: "KM FINAL HISTORICO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmFimHistorico,
            onChange: e => setValorPosicaoKmFimHistorico(e.target.value)
          },
          ]}
        />
        <FormInputs
          ncols={["col-md-3", "col-md-3",  "col-md-3", "col-md-3"]}
          proprieties={[
          {
            label: "ACESSO PRINCIPAL",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPrincipalAcesso,
            onChange: e => setValorPrincipalAcesso(e.target.value)
          },
          {
            label: "LOGRADOURO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorEndereco,
            onChange: e => setValorEndereco(e.target.value)
          },
          {
            label: "NÚMERO/COMPLEMENTO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorComplemento,
            onChange: e => setValorComplemento(e.target.value)
          },
          {
            label: "BAIRRO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorBairro,
            onChange: e => setValorBairro(e.target.value)
          },
          ]}
        />
        <Row>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>MUNICIPIO</ControlLabel>
              <Select
                name="selectMunicipio"
                value={valorMunicipio}
                // isDisabled = {perfilUsuario}
                onChange={setValorMunicipio}
                options={RESID}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <ControlLabel>ESTADO</ControlLabel>
              <Select
                name="selectUF"
                value={valorUF}
                // isDisabled = {perfilUsuario}
                onChange={setValorUF}
                options={GUF}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <ControlLabel>LOCALIZAÇÃO ZONAL</ControlLabel>
              <Select
                name="selectZona"
                value={valorZona}
                // isDisabled = {perfilUsuario}
                onChange={setValorZona}
                options={LOCZO}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>FACIL REMOÇÃO</ControlLabel>
              <Select
                name="selectFacilRemocao"
                value={valorFacilRemocao}
                // isDisabled = {perfilUsuario}
                onChange={setValorFacilRemocao}
                options={FAREM}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>TIPO POSIÇÃO OCUPAÇÃO</ControlLabel>
              <Select
                name="selectTpPosOcupacao"
                value={valorTpPosOcupacao}
                // isDisabled = {perfilUsuario}
                onChange={setValorTpPosOcupacao}
                options={TPPOC}
                placeholder=""
              />
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>PASSAGEM EM NÍVEL</ControlLabel>
              <Select
                name="selectPassNivel"
                value={valorPassNivel}
                // isDisabled = {perfilUsuario}
                onChange={setValorPassNivel}
                options={SNNID}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>PN - PEDESTRE</ControlLabel>
              <Select
                name="selectPassPedestre"
                value={valorPassPedestre}
                // isDisabled = {perfilUsuario}
                onChange={setValorPassPedestre}
                options={SNNID}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>TIPO VIA DE ACESSO</ControlLabel>
              <Select
                name="selectTpVAcesso"
                value={valorTpVAcesso}
                // isDisabled = {perfilUsuario}
                onChange={setValorTpVAcesso}
                options={TPVAC}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>VIA DE ACESSO FORA VIA FÉRREA</ControlLabel>
              <Select
                name="selectVAcessoFLFerrea"
                value={valorAcessoFLFerrea}
                // isDisabled = {perfilUsuario}
                onChange={setValorAcessoFLFerrea}
                options={SNNID}
                placeholder=""
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    )

    const Caracteristicas = (
      <div>
        <Row>
          <Col md={3}>
            <FormGroup>
              <ControlLabel>TIPO INVASÃO</ControlLabel>
              <Select
                name="selectTipoInvasao"
                value={valorTipoInvasao}
                // isDisabled = {perfilUsuario}
                onChange={setValorTipoInvasao}
                options={TPIVS}
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col md={9}>
            <FormInputs
              ncols={["col-md-4","col-md-4","col-md-4"]}
              proprieties={[
                {
                  label: "DISTÂNCIA DO BOLETO",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: valorDistBoletoExtIniInvasao,
                  onChange: e => setValorDistBoletoExtIniInvasao(e.target.value)
                },
                {
                  label: "ANO CONSTRUÇÃO",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: valorAnoConstrucao,
                  onChange: e => setValorAnoConstrucao(e.target.value)
                },
                {
                  label: "ÁREA TOTAL",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: valorAreaTotal,
                  onChange: e => setValorAreaTotal(e.target.value)
                },
              ]}
            />
          </Col>
        </Row>
        <FormInputs
          ncols={["col-md-3","col-md-3","col-md-3","col-md-3"]}
          proprieties={[
          {
            label: "ÁREA EDIFICADA",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorAreaEdificada,
            onChange: e => setValorAreaEdificada(e.target.value)
          },

          {
            label: "ÁREA NÃO EDIFICADA",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorAreaNaoEdificada,
            onChange: e => setValorAreaNaoEdificada(e.target.value)
          },

          {
            label: "LARGURA",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorLargura,
            onChange: e => setValorLargura(e.target.value)
          },

          {
            label: "EXTENSÃO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorExtensao,
            onChange: e => setValorExtensao(e.target.value)
          },
          ]}
        />
        <Row>
        <Col md={3}>
          <FormGroup>
            <ControlLabel>GARAGEM</ControlLabel>
            <Select
              name="selectGaragem"
              value={valorGaragem}
              // isDisabled = {perfilUsuario}
              onChange={setValorGaragem}
              options={SNNID}
              placeholder=""
            />
          </FormGroup>
        </Col>


        <Col md={3}>
          <FormGroup>
            <ControlLabel>TIPO ESTRUTURA</ControlLabel>
            <Select
              name="selectTipoEstrutura"
              value={valorTipoEstrutura}
              // isDisabled = {perfilUsuario}
              onChange={setValorTipoEstrutura}
              options={TIPES}
              placeholder=""
            />
          </FormGroup>
        </Col>


        <Col md={3}>
          <FormGroup>
            <ControlLabel>TIPO COBERTURA</ControlLabel>
            <Select
              name="selectTipoCobertura"
              value={valorTipoCobertura}
              // isDisabled = {perfilUsuario}
              onChange={setValorTipoCobertura}
              options={TPCOB}
              placeholder=""
            />
          </FormGroup>
        </Col>


        <Col md={3}>
          <FormGroup>
            <ControlLabel>PAREDE</ControlLabel>
            <Select
              name="selectRevInternoParedes"
              value={valorRevInternoParedes}
              // isDisabled = {perfilUsuario}
              onChange={setValorRevInternoParedes}
              options={RVIPD}
              placeholder=""
            />
          </FormGroup>
        </Col>

        </Row>
        <Row>
        <Col md={3}>
          <FormGroup>
            <ControlLabel>INSTALAÇÃO ELÉTRICA</ControlLabel>
            <Select
              name="selectInstEletrica"
              value={valorInstEletrica}
              // isDisabled = {perfilUsuario}
              onChange={setValorInstEletrica}
              options={SNNID}
              placeholder=""
            />
          </FormGroup>
        </Col>


        <Col md={3}>
          <FormGroup>
            <ControlLabel>ILUMINAÇÃO PUBLICA</ControlLabel>
            <Select
              name="selectIlumPublica"
              value={valorIlumPublica}
              // isDisabled = {perfilUsuario}
              onChange={setValorIlumPublica}
              options={SNNID}
              placeholder=""
            />
          </FormGroup>
        </Col>


        <Col md={3}>
          <FormGroup>
            <ControlLabel>INSTALAÇÃO HIDRAULICA</ControlLabel>
            <Select
              name="selectInstHidraulica"
              value={valorInstHidraulica}
              // isDisabled = {perfilUsuario}
              onChange={setValorInstHidraulica}
              options={SNNID}
              placeholder=""
            />
          </FormGroup>
        </Col>


        <Col md={3}>
          <FormGroup>
            <ControlLabel>DESCARTE ESGOTO</ControlLabel>
            <Select
              name="selectDescEsgoto"
              value={valorDescEsgoto}
              // isDisabled = {perfilUsuario}
              onChange={setValorDescEsgoto}
              options={SNNID}
              placeholder=""
            />
          </FormGroup>
        </Col>
        </Row>
        <Row>

        <Col md={3}>
          <FormGroup>
            <ControlLabel>LIXO E RESIDUOS</ControlLabel>
            <Select
              name="selectLixoResiduos"
              value={valorLixoResiduos}
              // isDisabled = {perfilUsuario}
              onChange={setValorLixoResiduos}
              options={SNNID}
              placeholder=""
            />
          </FormGroup>
        </Col>


        <Col md={3}>
          <FormGroup>
            <ControlLabel>SEGURANÇA PUBLICA</ControlLabel>
            <Select
              name="selectSegPublica"
              value={valorSegPublica}
              // isDisabled = {perfilUsuario}
              onChange={setValorSegPublica}
              options={SNNID}
              placeholder=""
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormInputs
            ncols={["col-md-12"]}
            proprieties={[
            {
              label: "OBSERVAÇÕES",
              type: "text",
              bsClass: "form-control",
              placeholder: "",
              defaultValue: valorObservacoes,
              onChange: e => setValorObservacoes(e.target.value)
            },
            ]}
          />
        </Col>
      </Row>

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
                    bsClass: "form-control",
                    placeholder: "Ficha",
                    defaultValue: valorBP,
                    disabled: true
                  },
                  {
                    label: "Versão",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "",
                    defaultValue: valorVersao,
                    disabled: true
                  },
                  {
                    label: "Início Validade",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "",
                    defaultValue: valorInicioValidade,
                    disabled: true
                  },
                  {
                    label: "Fim Validade",
                    type: "text",
                    bsClass: "form-control",
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


        <Button bsStyle="primary" pullRight fill  onClick={handleCadastrar}>
          Inserir
        </Button>
        <Button bsStyle="primary" pullRight fill onClick={handleCorrigir}>
          Corrigir
        </Button>
        <Button bsStyle="primary" pullRight fill  onClick={handleAtualizar}>
          Criar Versão
        </Button>
        <Button bsStyle="primary" pullRight fill  onClick={handleBaixar}>
          Desapropriar
        </Button>
          <Link to={'/map/mapa-geo'}>{<MapOutlinedIcon style={styles.iconTable} />}</Link>

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

export default Cadastro_vp_f;







