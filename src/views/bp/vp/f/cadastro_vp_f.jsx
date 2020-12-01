import React, { useState,  useLayoutEffect } from 'react';
import api from '../../../../services/api';
import {useParams} from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import Select from "react-select";
import swal from 'sweetalert';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import { styles } from '../../../../variables/MaterialTable';
import moment from 'moment';



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
	const {idBem2, IDVersao} = useParams();
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
	setValorInicioValidade(moment(response.data.InicioValidade).format('DD/MM/YYYY'));
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

  // const [valorCDCRR, setValorCDCRR] = useState([]);  // CDCRR
	// const [valorFAREM, setValorFAREM] = useState([]);  // FAREM
	// const [valorGUF, setValorGUF] = useState([]);  // GUF
	// const [valorLOCZO, setValorLOCZO] = useState([]);  // LOCZO
	// const [valorRESLC, setValorRESLC] = useState([]);  // RESLC
	// const [valorRVIPD, setValorRVIPD] = useState([]);  // RVIPD
	// const [valorSNNID, setValorSNNID] = useState([]);  // SNNID
	// const [valorTIPES, setValorTIPES] = useState([]);  // TIPES
	// const [valorTPCOB, setValorTPCOB] = useState([]);  // TPCOB
	// const [valorTPIVS, setValorTPIVS] = useState([]);  // TPIVS
	// const [valorTPPOC, setValorTPPOC] = useState([]);  // TPPOC
	// const [valorTPVAC, setValorTPVAC] = useState([]);  // TPVAC
	// const [valorRESID, setValorRESID] = useState([]);  // RESID

  // useLayoutEffect(() => {
	// 	api.get(`/dominiogrid2/`, {
	// 	}).then(response => {

  //   const CDCRR =  response.data.filter(dom => dom.dominio === 'CDCRR');
  //   console.log('dom: ',CDCRR.map(dom => dom.conteudo))
	//   setValorCDCRR(JSON.parse(CDCRR.map(dom => dom.conteudo)));
  //   const RESLC =  response.data.filter(dom => dom.dominio === 'RESLC');
	//   setValorRESLC(JSON.parse(RESLC.map(dom => dom.conteudo)));
  //   const RESID =  response.data.filter(dom => dom.dominio === 'RESID');
	//   setValorRESID(JSON.parse(RESID.map(dom => dom.conteudo)));
  //   const TPIVS =  response.data.filter(dom => dom.dominio === 'TPIVS');
	//   setValorTPIVS(JSON.parse(TPIVS.map(dom => dom.conteudo)));
  //   const FAREM =  response.data.filter(dom => dom.dominio === 'FAREM');
	//   setValorFAREM(JSON.parse(FAREM.map(dom => dom.conteudo)));
  //   const GUF =  response.data.filter(dom => dom.dominio === 'GUF');
	//   setValorGUF(JSON.parse(GUF.map(dom => dom.conteudo)));
  //   const LOCZO =  response.data.filter(dom => dom.dominio === 'LOCZO');
	//   setValorLOCZO(JSON.parse(LOCZO.map(dom => dom.conteudo)));
  //   const RVIPD =  response.data.filter(dom => dom.dominio === 'RVIPD');
	//   setValorRVIPD(JSON.parse(RVIPD.map(dom => dom.conteudo)));
  //   const SNNID =  response.data.filter(dom => dom.dominio === 'SNNID');
	//   setValorSNNID(JSON.parse(SNNID.map(dom => dom.conteudo)));
  //   const TIPES =  response.data.filter(dom => dom.dominio === 'TIPES');
	//   setValorTIPES(JSON.parse(TIPES.map(dom => dom.conteudo)));
  //   const TPCOB =  response.data.filter(dom => dom.dominio === 'TPCOB');
	//   setValorTPCOB(JSON.parse(TPCOB.map(dom => dom.conteudo)));
  //   const TPPOC =  response.data.filter(dom => dom.dominio === 'TPPOC');
	//   setValorTPPOC(JSON.parse(TPPOC.map(dom => dom.conteudo)));
  //   const TPVAC =  response.data.filter(dom => dom.dominio === 'TPVAC');
	//   setValorTPVAC(JSON.parse(TPVAC.map(dom => dom.conteudo)));
  //   })
  //   // eslint-disable-next-line
  // }, [])


  const CDCRR = [{"value": "Alça de Jeceaba","label": "Alça de Jeceaba"}, {"value": "Córrego do Feijão","label": "Córrego do Feijão"}, {"value": "Ferrovia do Aço","label": "Ferrovia do Aço"}, {"value": "Linha do Centro","label": "Linha do Centro"}, {"value": "Linha Rio - São Paulo","label": "Linha Rio - São Paulo"}, {"value": "Linha Santos - Jundiaí","label": "Linha Santos - Jundiaí"}, {"value": "Linha Tronco","label": "Linha Tronco"}, {"value": "Ramal de Bias Fortes","label": "Ramal de Bias Fortes"}, {"value": "Ramal de Conceiçãozinha","label": "Ramal de Conceiçãozinha"}, {"value": "Ramal de Cosigua","label": "Ramal de Cosigua"}, {"value": "Ramal de Mangaratiba","label": "Ramal de Mangaratiba"}, {"value": "Ramal de Olhos D'Água","label": "Ramal de Olhos D'Água"}, {"value": "Ramal de Perequê","label": "Ramal de Perequê"}, {"value": "Ramal do Açominas","label": "Ramal do Açominas"}, {"value": "Ramal do Arará","label": "Ramal do Arará"}, {"value": "Ramal do Brisamar","label": "Ramal do Brisamar"}, {"value": "Ramal do Paraopeba","label": "Ramal do Paraopeba"}, {"value": "Ramal Paraibuna de Metais","label": "Ramal Paraibuna de Metais"}, {"value": "Variante do Parateí","label": "Variante do Parateí"}, {"value": "Variante Rio Grande da Serra - Suzano","label": "Variante Rio Grande da Serra - Suzano"}]

  const FAREM = [{"value": "Dados insuficientes","label": "Dados insuficientes"}, {"value": "Não","label": "Não"}, {"value": "Sim","label": "Sim"}]

  const GUF = [{"value": "MG","label": "MG"}, {"value": "RJ","label": "RJ"}, {"value": "SP","label": "SP"}]

  const LOCZO = [{"label": "Rural","value": "Rural"}, {"label": "Urbana","value": "Urbana"}]

  const RESID = [{"value": "Alfredo Vasconcelos","label": "Alfredo Vasconcelos"}, {"value": "Andrelândia","label": "Andrelândia"}, {"value": "Antônio Carlos","label": "Antônio Carlos"}, {"value": "Aparecida","label": "Aparecida"}, {"value": "Arantina","label": "Arantina"}, {"value": "Barbacena","label": "Barbacena"}, {"value": "Barra do Piraí","label": "Barra do Piraí"}, {"value": "Barra Mansa","label": "Barra Mansa"}, {"value": "Belford Roxo","label": "Belford Roxo"}, {"value": "Belmiro Braga","label": "Belmiro Braga"}, {"value": "Belo Horizonte","label": "Belo Horizonte"}, {"value": "Belo Vale","label": "Belo Vale"}, {"value": "Bom Jardim de Minas","label": "Bom Jardim de Minas"}, {"value": "Brumadinho","label": "Brumadinho"}, {"value": "Caçapava","label": "Caçapava"}, {"value": "Cachoeira Paulista","label": "Cachoeira Paulista"}, {"value": "Caeiras","label": "Caeiras"}, {"value": "Campo Limpo Paulista","label": "Campo Limpo Paulista"}, {"value": "Canas","label": "Canas"}, {"value": "Carandaí","label": "Carandaí"}, {"value": "Comendador Levy Gasparian","label": "Comendador Levy Gasparian"}, {"value": "Conceição da Barra de Minas","label": "Conceição da Barra de Minas"}, {"value": "Congonhas","label": "Congonhas"}, {"value": "Conselheiro Lafaiete","label": "Conselheiro Lafaiete"}, {"value": "Contagem","label": "Contagem"}, {"value": "Coronel Xavier Chaves","label": "Coronel Xavier Chaves"}, {"value": "Cruzeiro","label": "Cruzeiro"}, {"value": "Cubatão","label": "Cubatão"}, {"value": "Engenheiro Paulo de Frontin","label": "Engenheiro Paulo de Frontin"}, {"value": "Entre Rios de Minas","label": "Entre Rios de Minas"}, {"value": "Ewbank da Câmara","label": "Ewbank da Câmara"}, {"value": "Francisco Morato","label": "Francisco Morato"}, {"value": "Franco da Rocha","label": "Franco da Rocha"}, {"value": "Guararema","label": "Guararema"}, {"value": "Guaratinguetá","label": "Guaratinguetá"}, {"value": "Guarujá","label": "Guarujá"}, {"value": "Ibirité","label": "Ibirité"}, {"value": "Itabirito","label": "Itabirito"}, {"value": "Itaguaí","label": "Itaguaí"}, {"value": "Itaquaquecetuba","label": "Itaquaquecetuba"}, {"value": "Itatiaia","label": "Itatiaia"}, {"value": "Jacareí","label": "Jacareí"}, {"value": "Japeri","label": "Japeri"}, {"value": "Jeceaba","label": "Jeceaba"}, {"value": "Juiz de Fora","label": "Juiz de Fora"}, {"value": "Jundiaí","label": "Jundiaí"}, {"value": "Lagoa Dourada","label": "Lagoa Dourada"}, {"value": "Lavrinhas","label": "Lavrinhas"}, {"value": "Lorena","label": "Lorena"}, {"value": "Madre de Deus de Minas","label": "Madre de Deus de Minas"}, {"value": "Mangaratiba","label": "Mangaratiba"}, {"value": "Mário Belo","label": "Mário Belo"}, {"value": "Mário Campos","label": "Mário Campos"}, {"value": "Matias Barbosa","label": "Matias Barbosa"}, {"value": "Mauá","label": "Mauá"}, {"value": "Mendes","label": "Mendes"}, {"value": "Mesquita","label": "Mesquita"}, {"value": "Moeda","label": "Moeda"}, {"value": "Mogi das Cruzes","label": "Mogi das Cruzes"}, {"value": "Nova Iguaçu","label": "Nova Iguaçu"}, {"value": "Ouro Preto","label": "Ouro Preto"}, {"value": "Paracambi","label": "Paracambi"}, {"value": "Paracambí","label": "Paracambí"}, {"value": "Paraíba do Sul","label": "Paraíba do Sul"}, {"value": "Passa Vinte","label": "Passa Vinte"}, {"value": "Pindamonhangaba","label": "Pindamonhangaba"}, {"value": "Pinheiral","label": "Pinheiral"}, {"value": "Porto Real","label": "Porto Real"}, {"value": "Quatis","label": "Quatis"}, {"value": "Queimados","label": "Queimados"}, {"value": "Queluz","label": "Queluz"}, {"value": "Resende","label": "Resende"}, {"value": "Resende Costa","label": "Resende Costa"}, {"value": "Ressaquinha","label": "Ressaquinha"}, {"value": "Ribeirão Pires","label": "Ribeirão Pires"}, {"value": "Rio Acima","label": "Rio Acima"}, {"value": "Rio de Janeiro","label": "Rio de Janeiro"}, {"value": "Rio Grande da Serra","label": "Rio Grande da Serra"}, {"value": "Roseira","label": "Roseira"}, {"value": "Santa Rita de Jacutinga","label": "Santa Rita de Jacutinga"}, {"value": "Santana do Deserto","label": "Santana do Deserto"}, {"value": "Santo André","label": "Santo André"}, {"value": "Santos","label": "Santos"}, {"value": "Santos Dumont","label": "Santos Dumont"}, {"value": "São Brás do Suaçuí","label": "São Brás do Suaçuí"}, {"value": "São Caetano do Sul","label": "São Caetano do Sul"}, {"value": "São João de Meriti","label": "São João de Meriti"}, {"value": "São João Del Rei","label": "São João Del Rei"}, {"value": "São Joaquim de Bicas","label": "São Joaquim de Bicas"}, {"value": "São José dos Campos","label": "São José dos Campos"}, {"value": "São Paulo","label": "São Paulo"}, {"value": "São Vicente de Minas","label": "São Vicente de Minas"}, {"value": "Sarzedo","label": "Sarzedo"}, {"value": "Senhora dos Remédios","label": "Senhora dos Remédios"}, {"value": "Seropédica","label": "Seropédica"}, {"value": "Simão Pereira","label": "Simão Pereira"}, {"value": "Suzano","label": "Suzano"}, {"value": "Taubaté","label": "Taubaté"}, {"value": "Tremembé","label": "Tremembé"}, {"value": "Três Rios","label": "Três Rios"}, {"value": "Valença","label": "Valença"}, {"value": "Várzea Paulista","label": "Várzea Paulista"}, {"value": "Vassouras","label": "Vassouras"}, {"value": "Volta Redonda","label": "Volta Redonda"}]

  const RESLC = [{"value": "Açominas","label": "Açominas"}, {"value": "Afonso Arinos","label": "Afonso Arinos"}, {"value": "Água Branca","label": "Água Branca"}, {"value": "Agulhas Negras","label": "Agulhas Negras"}, {"value": "Aiuruoca","label": "Aiuruoca"}, {"value": "Alberto Flores","label": "Alberto Flores"}, {"value": "Alça Dupla","label": "Alça Dupla"}, {"value": "Aliança","label": "Aliança"}, {"value": "Aljezur","label": "Aljezur"}, {"value": "Ambaí","label": "Ambaí"}, {"value": "Andrade Pinto","label": "Andrade Pinto"}, {"value": "Antonio Carlos","label": "Antonio Carlos"}, {"value": "Aparecida","label": "Aparecida"}, {"value": "Aracaré Leste","label": "Aracaré Leste"}, {"value": "Arantina","label": "Arantina"}, {"value": "Arará","label": "Arará"}, {"value": "Areais","label": "Areais"}, {"value": "Aristides Lobo","label": "Aristides Lobo"}, {"value": "Arrojado Lisboa","label": "Arrojado Lisboa"}, {"value": "Baia Sepetiba","label": "Baia Sepetiba"}, {"value": "Baltazar Fidelis","label": "Baltazar Fidelis"}, {"value": "Barão de Angra","label": "Barão de Angra"}, {"value": "Barão de Juparana","label": "Barão de Juparana"}, {"value": "Barão de Vassouras","label": "Barão de Vassouras"}, {"value": "Barbacena","label": "Barbacena"}, {"value": "Bárbara","label": "Bárbara"}, {"value": "Barnabé","label": "Barnabé"}, {"value": "Barra do Piraí","label": "Barra do Piraí"}, {"value": "Barra Funda","label": "Barra Funda"}, {"value": "Barra Mansa","label": "Barra Mansa"}, {"value": "Barreiro","label": "Barreiro"}, {"value": "Barros Filho","label": "Barros Filho"}, {"value": "Barroso","label": "Barroso"}, {"value": "Belo Vale","label": "Belo Vale"}, {"value": "Benfica","label": "Benfica"}, {"value": "Bom Jardim","label": "Bom Jardim"}, {"value": "Brás","label": "Brás"}, {"value": "Brisamar","label": "Brisamar"}, {"value": "Brumadinho","label": "Brumadinho"}, {"value": "Buarque de Macedo","label": "Buarque de Macedo"}, {"value": "Caburu","label": "Caburu"}, {"value": "Caçapava","label": "Caçapava"}, {"value": "Cachoeira","label": "Cachoeira"}, {"value": "Cachoeira da Fumaça","label": "Cachoeira da Fumaça"}, {"value": "Cachoeira Paulista","label": "Cachoeira Paulista"}, {"value": "Caetano Lopes","label": "Caetano Lopes"}, {"value": "Caieiras","label": "Caieiras"}, {"value": "Calmon Viana","label": "Calmon Viana"}, {"value": "Campestre","label": "Campestre"}, {"value": "Campo Grande","label": "Campo Grande"}, {"value": "Campo Limpo Paulista","label": "Campo Limpo Paulista"}, {"value": "Capoeira Grande","label": "Capoeira Grande"}, {"value": "Capuava","label": "Capuava"}, {"value": "Carandaí","label": "Carandaí"}, {"value": "Carlos Newlands","label": "Carlos Newlands"}, {"value": "Carlos Niemeier","label": "Carlos Niemeier"}, {"value": "Casal","label": "Casal"}, {"value": "Casal Novo","label": "Casal Novo"}, {"value": "Cedofeita","label": "Cedofeita"}, {"value": "Chapeu D´uvas","label": "Chapeu D´uvas"}, {"value": "Chapeu D'uvas","label": "Chapeu D'uvas"}, {"value": "Chrockatt de Sá","label": "Chrockatt de Sá"}, {"value": "Conceiçãozinha","label": "Conceiçãozinha"}, {"value": "Condutor Castro","label": "Condutor Castro"}, {"value": "Congonhas do Campo","label": "Congonhas do Campo"}, {"value": "Conselheiro Lafaiete","label": "Conselheiro Lafaiete"}, {"value": "Coroa Grande","label": "Coroa Grande"}, {"value": "Coronel Araújo","label": "Coronel Araújo"}, {"value": "Coronel Ermelino Matarazzo","label": "Coronel Ermelino Matarazzo"}, {"value": "Coronel Eurico","label": "Coronel Eurico"}, {"value": "Coronel João Carlos Guedes","label": "Coronel João Carlos Guedes"}, {"value": "Coronel Xavier Chaves","label": "Coronel Xavier Chaves"}, {"value": "Córrego do Feijão","label": "Córrego do Feijão"}, {"value": "Córrego Serra","label": "Córrego Serra"}, {"value": "Costa Barros","label": "Costa Barros"}, {"value": "Cotegipe","label": "Cotegipe"}, {"value": "Cruzeiro","label": "Cruzeiro"}, {"value": "Cubatão","label": "Cubatão"}, {"value": "Curuputuba","label": "Curuputuba"}, {"value": "Del Castilho","label": "Del Castilho"}, {"value": "Demétrio Ribeiro","label": "Demétrio Ribeiro"}, {"value": "Deodoro","label": "Deodoro"}, {"value": "Dias Tavares","label": "Dias Tavares"}, {"value": "Doutor Joaquim Murtinho","label": "Doutor Joaquim Murtinho"}, {"value": "Doutor Sá Fortes","label": "Doutor Sá Fortes"}, {"value": "E.S. Gualberto","label": "E.S. Gualberto"}, {"value": "Edmar Alves","label": "Edmar Alves"}, {"value": "Engenheiro Cesar de Souza","label": "Engenheiro Cesar de Souza"}, {"value": "Engenheiro Drumont","label": "Engenheiro Drumont"}, {"value": "Engenheiro Eugênio de Melo","label": "Engenheiro Eugênio de Melo"}, {"value": "Engenheiro Freixinho","label": "Engenheiro Freixinho"}, {"value": "Engenheiro Gurgel","label": "Engenheiro Gurgel"}, {"value": "Engenheiro Leonardo Mazziotti","label": "Engenheiro Leonardo Mazziotti"}, {"value": "Engenheiro Martins Guimarães","label": "Engenheiro Martins Guimarães"}, {"value": "Engenheiro Neiva","label": "Engenheiro Neiva"}, {"value": "Engenheiro Passos","label": "Engenheiro Passos"}, {"value": "Engenheiro Paulo de Frontin","label": "Engenheiro Paulo de Frontin"}, {"value": "Engenheiro Pedro Paulo","label": "Engenheiro Pedro Paulo"}, {"value": "Engenheiro São Paulo","label": "Engenheiro São Paulo"}, {"value": "Engenheiro Simão Tamm","label": "Engenheiro Simão Tamm"}, {"value": "Engenheiro Taulois","label": "Engenheiro Taulois"}, {"value": "Engenheiro Vieira Cortez","label": "Engenheiro Vieira Cortez"}, {"value": "Estação TUF","label": "Estação TUF"}, {"value": "Ewbanck da Câmara","label": "Ewbanck da Câmara"}, {"value": "Fernandes Pinheiro","label": "Fernandes Pinheiro"}, {"value": "Ferrugem","label": "Ferrugem"}, {"value": "Fim de trecho","label": "Fim de trecho"}, {"value": "Fim do trecho","label": "Fim do trecho"}, {"value": "Final do trecho","label": "Final do trecho"}, {"value": "Final Ramal das Fábricas","label": "Final Ramal das Fábricas"}, {"value": "Floriano","label": "Floriano"}, {"value": "Francisco Bernardino","label": "Francisco Bernardino"}, {"value": "Francisco Morato","label": "Francisco Morato"}, {"value": "Franco da Rocha","label": "Franco da Rocha"}, {"value": "Furnas","label": "Furnas"}, {"value": "Gaje","label": "Gaje"}, {"value": "General Dorival de Brito","label": "General Dorival de Brito"}, {"value": "Guaíba","label": "Guaíba"}, {"value": "Guandú","label": "Guandú"}, {"value": "Guapituba","label": "Guapituba"}, {"value": "Guararema","label": "Guararema"}, {"value": "Guaratinguetá","label": "Guaratinguetá"}, {"value": "Herculano Pena","label": "Herculano Pena"}, {"value": "Heredia de Sá","label": "Heredia de Sá"}, {"value": "Honório Gurgel","label": "Honório Gurgel"}, {"value": "Humberto Antunes","label": "Humberto Antunes"}, {"value": "Ibicuí","label": "Ibicuí"}, {"value": "Ibirité","label": "Ibirité"}, {"value": "Ilídio","label": "Ilídio"}, {"value": "Inconfidentes","label": "Inconfidentes"}, {"value": "Inferno Verde","label": "Inferno Verde"}, {"value": "Ipiranga","label": "Ipiranga"}, {"value": "Itabirito","label": "Itabirito"}, {"value": "Itacuruçá","label": "Itacuruçá"}, {"value": "Itaguaí","label": "Itaguaí"}, {"value": "Itapeti","label": "Itapeti"}, {"value": "Itaquaquecetuba","label": "Itaquaquecetuba"}, {"value": "Itatiaia","label": "Itatiaia"}, {"value": "Itutinga","label": "Itutinga"}, {"value": "Jacutinga","label": "Jacutinga"}, {"value": "Japeri","label": "Japeri"}, {"value": "Jaraguá","label": "Jaraguá"}, {"value": "Jatobá","label": "Jatobá"}, {"value": "Jeceaba","label": "Jeceaba"}, {"value": "João Aires","label": "João Aires"}, {"value": "Joaquim Reis","label": "Joaquim Reis"}, {"value": "Juiz de Fora","label": "Juiz de Fora"}, {"value": "KM 10","label": "KM 10"}, {"value": "KM 110","label": "KM 110"}, {"value": "KM 5","label": "KM 5"}, {"value": "KM 6","label": "KM 6"}, {"value": "KM 7","label": "KM 7"}, {"value": "KM 8","label": "KM 8"}, {"value": "KM 9","label": "KM 9"}, {"value": "Lagoa dos Porcos","label": "Lagoa dos Porcos"}, {"value": "Lapa","label": "Lapa"}, {"value": "Lobo Leite","label": "Lobo Leite"}, {"value": "Lorena","label": "Lorena"}, {"value": "Luz","label": "Luz"}, {"value": "Madre de Deus","label": "Madre de Deus"}, {"value": "Manoel Feio","label": "Manoel Feio"}, {"value": "Mantiqueira","label": "Mantiqueira"}, {"value": "Mariano Procópio","label": "Mariano Procópio"}, {"value": "Marinhos","label": "Marinhos"}, {"value": "Mário Belo","label": "Mário Belo"}, {"value": "Mário Campos","label": "Mário Campos"}, {"value": "Mário Castilho","label": "Mário Castilho"}, {"value": "Martins Costa","label": "Martins Costa"}, {"value": "Matias Barbosa","label": "Matias Barbosa"}, {"value": "Mauá","label": "Mauá"}, {"value": "Melo Franco","label": "Melo Franco"}, {"value": "Mendes","label": "Mendes"}, {"value": "Miguel Burnier","label": "Miguel Burnier"}, {"value": "Moeda","label": "Moeda"}, {"value": "Mogi das Cruzes","label": "Mogi das Cruzes"}, {"value": "Mooca","label": "Mooca"}, {"value": "Morsing","label": "Morsing"}, {"value": "Olhos D'Água","label": "Olhos D'Água"}, {"value": "Otavio Dapieve","label": "Otavio Dapieve"}, {"value": "Ouro Fino","label": "Ouro Fino"}, {"value": "Pagador Andrade","label": "Pagador Andrade"}, {"value": "Palmeira da Serra","label": "Palmeira da Serra"}, {"value": "Paraíba do Sul","label": "Paraíba do Sul"}, {"value": "Paraibuna","label": "Paraibuna"}, {"value": "Paraibuna de Metais","label": "Paraibuna de Metais"}, {"value": "Paraibuna Novo","label": "Paraibuna Novo"}, {"value": "Paranapiacaba","label": "Paranapiacaba"}, {"value": "Pari","label": "Pari"}, {"value": "Pedra do Sino","label": "Pedra do Sino"}, {"value": "Pedreira de Carandaí","label": "Pedreira de Carandaí"}, {"value": "Perus","label": "Perus"}, {"value": "Piaçaguera","label": "Piaçaguera"}, {"value": "Pindamonhangaba","label": "Pindamonhangaba"}, {"value": "Pinheiral","label": "Pinheiral"}, {"value": "Pinheirinho","label": "Pinheirinho"}, {"value": "Piqueri","label": "Piqueri"}, {"value": "Pires","label": "Pires"}, {"value": "Pirituba","label": "Pirituba"}, {"value": "Pitangueiras","label": "Pitangueiras"}, {"value": "Pombal","label": "Pombal"}, {"value": "Porto Real","label": "Porto Real"}, {"value": "Posto Alfa","label": "Posto Alfa"}, {"value": "Posto Elisson","label": "Posto Elisson"}, {"value": "Posto Falcão","label": "Posto Falcão"}, {"value": "Posto KM 194","label": "Posto KM 194"}, {"value": "Posto KM 195","label": "Posto KM 195"}, {"value": "Posto KM 196","label": "Posto KM 196"}, {"value": "Posto KM 197","label": "Posto KM 197"}, {"value": "Posto KM 198","label": "Posto KM 198"}, {"value": "Posto KM 232","label": "Posto KM 232"}, {"value": "Posto KM 250","label": "Posto KM 250"}, {"value": "Posto KM 261","label": "Posto KM 261"}, {"value": "Posto KM 271","label": "Posto KM 271"}, {"value": "Posto KM 298","label": "Posto KM 298"}, {"value": "Posto KM 315","label": "Posto KM 315"}, {"value": "Posto KM 373","label": "Posto KM 373"}, {"value": "Posto km 374","label": "Posto km 374"}, {"value": "Posto km 375","label": "Posto km 375"}, {"value": "Posto km 44","label": "Posto km 44"}, {"value": "Posto KM 452","label": "Posto KM 452"}, {"value": "Posto KM 460","label": "Posto KM 460"}, {"value": "Posto KM 482","label": "Posto KM 482"}, {"value": "Posto KM 490","label": "Posto KM 490"}, {"value": "Posto KM 520","label": "Posto KM 520"}, {"value": "Posto KM 537","label": "Posto KM 537"}, {"value": "Posto KM 575","label": "Posto KM 575"}, {"value": "Posto KM 576","label": "Posto KM 576"}, {"value": "Posto KM 577","label": "Posto KM 577"}, {"value": "Posto KM 578","label": "Posto KM 578"}, {"value": "Posto KM 579","label": "Posto KM 579"}, {"value": "Posto KM 580","label": "Posto KM 580"}, {"value": "Posto KM 581","label": "Posto KM 581"}, {"value": "Posto KM 582","label": "Posto KM 582"}, {"value": "Posto KM 583","label": "Posto KM 583"}, {"value": "Posto KM 584","label": "Posto KM 584"}, {"value": "Posto KM 585","label": "Posto KM 585"}, {"value": "Posto KM 586","label": "Posto KM 586"}, {"value": "Posto KM 587","label": "Posto KM 587"}, {"value": "Posto KM 588","label": "Posto KM 588"}, {"value": "Posto KM 589","label": "Posto KM 589"}, {"value": "Posto KM 63","label": "Posto KM 63"}, {"value": "Posto Km 64","label": "Posto Km 64"}, {"value": "Posto Km 65","label": "Posto Km 65"}, {"value": "Posto KM315","label": "Posto KM315"}, {"value": "Prefeito Saladino","label": "Prefeito Saladino"}, {"value": "Pulverização","label": "Pulverização"}, {"value": "Queluz","label": "Queluz"}, {"value": "Rademaker","label": "Rademaker"}, {"value": "Raiz da Serra","label": "Raiz da Serra"}, {"value": "Recenvindo","label": "Recenvindo"}, {"value": "Remédios","label": "Remédios"}, {"value": "Resende Costa","label": "Resende Costa"}, {"value": "Retiro","label": "Retiro"}, {"value": "Ribeirão Pires","label": "Ribeirão Pires"}, {"value": "Rio Grande da Serra","label": "Rio Grande da Serra"}, {"value": "Rio Preto","label": "Rio Preto"}, {"value": "Rio Santana","label": "Rio Santana"}, {"value": "Rio Vermelho","label": "Rio Vermelho"}, {"value": "Rocha Dias","label": "Rocha Dias"}, {"value": "Rocha Miranda","label": "Rocha Miranda"}, {"value": "Rocha Sobrinho","label": "Rocha Sobrinho"}, {"value": "Roseira","label": "Roseira"}, {"value": "Saí","label": "Saí"}, {"value": "Samora Machel","label": "Samora Machel"}, {"value": "Santa Rosa","label": "Santa Rosa"}, {"value": "Santana da Barra","label": "Santana da Barra"}, {"value": "Santo André","label": "Santo André"}, {"value": "Santos","label": "Santos"}, {"value": "Santos Dumont","label": "Santos Dumont"}, {"value": "São Bento","label": "São Bento"}, {"value": "São Caetano do Sul","label": "São Caetano do Sul"}, {"value": "São Gonçalo do Bação","label": "São Gonçalo do Bação"}, {"value": "São Joaquim","label": "São Joaquim"}, {"value": "São José dos Campos","label": "São José dos Campos"}, {"value": "São Matheus","label": "São Matheus"}, {"value": "São Silvestre","label": "São Silvestre"}, {"value": "Sarzedo","label": "Sarzedo"}, {"value": "Sarzedo Novo","label": "Sarzedo Novo"}, {"value": "Saudade","label": "Saudade"}, {"value": "Sebastião Lacerda","label": "Sebastião Lacerda"}, {"value": "Serraria","label": "Serraria"}, {"value": "Sobragi","label": "Sobragi"}, {"value": "Souza Aguiar","label": "Souza Aguiar"}, {"value": "Suzano","label": "Suzano"}, {"value": "Suzano Novo","label": "Suzano Novo"}, {"value": "Tamanduateí","label": "Tamanduateí"}, {"value": "Taubaté","label": "Taubaté"}, {"value": "Terminal Cimento Barroso","label": "Terminal Cimento Barroso"}, {"value": "Três Rios","label": "Três Rios"}, {"value": "Utinga","label": "Utinga"}, {"value": "Vargem Alegre","label": "Vargem Alegre"}, {"value": "Várzea Paulista","label": "Várzea Paulista"}, {"value": "Viga","label": "Viga"}, {"value": "Vila Clarice","label": "Vila Clarice"}, {"value": "Vila Muriqui","label": "Vila Muriqui"}, {"value": "Vila Queimada","label": "Vila Queimada"}, {"value": "Volta Redonda","label": "Volta Redonda"}, {"value": "Waldemar de Brito","label": "Waldemar de Brito"}]

  const RVIPD = [{"value": "Cerâmica","label": "Cerâmica"}, {"value": "Emboço aparente","label": "Emboço aparente"}, {"value": "Lona","label": "Lona"}, {"value": "Madeira","label": "Madeira"}, {"value": "Metálica","label": "Metálica"}, {"value": "Não se Aplica","label": "Não se Aplica"}, {"value": "Pintura","label": "Pintura"}, {"value": "Sem Paredes","label": "Sem Paredes"}, {"value": "Telha de Amianto","label": "Telha de Amianto"}, {"value": "Tijolo aparente","label": "Tijolo aparente"}]

  const SNNID = [{"value": "Não","label": "Não"}, {"value": "Não se Aplica","label": "Não se Aplica"}, {"value": "Sim","label": "Sim"}]

  const TIPES = [{"value": "Alvenaria","label": "Alvenaria"}, {"value": "Cerca de Arame Farpado","label": "Cerca de Arame Farpado"}, {"value": "Cerca de Bambú","label": "Cerca de Bambú"}, {"value": "Cerca de Lona","label": "Cerca de Lona"}, {"value": "Cerca de Tela de Arame","label": "Cerca de Tela de Arame"}, {"value": "Cerca de Telha de Amianto","label": "Cerca de Telha de Amianto"}, {"value": "Concreto","label": "Concreto"}, {"value": "Madeira","label": "Madeira"}, {"value": "Metálica","label": "Metálica"}, {"value": "Não se Aplica","label": "Não se Aplica"}]

  const TPCOB = [{"value": "Laje","label": "Laje"}, {"value": "Lona","label": "Lona"}, {"value": "Madeira","label": "Madeira"}, {"value": "Metálica","label": "Metálica"}, {"value": "Não se Aplica","label": "Não se Aplica"}, {"value": "Sem Cobertura","label": "Sem Cobertura"}, {"value": "Tela","label": "Tela"}, {"value": "Telha de Amianto","label": "Telha de Amianto"}, {"value": "Telha de barro","label": "Telha de barro"}, {"value": "Telha de Cerâmica","label": "Telha de Cerâmica"}, {"value": "Telha Metálica","label": "Telha Metálica"}]

  const TPPOC = [{"value": "Direita Crescente","label": "Direita Crescente"}, {"value": "Esquerda Crescente","label": "Esquerda Crescente"}]

  const TPIVS = [{"value": "Adicionado pela mudança de faixa","label": "Adicionado pela mudança de faixa"}, {"value": "Área de Risco","label": "Área de Risco"}, {"value": "Comercial","label": "Comercial"}, {"value": "Desapropriação","label": "Desapropriação"}, {"value": "Órgão Público","label": "Órgão Público"}, {"value": "Outros","label": "Outros"}, {"value": "Residencial","label": "Residencial"}, {"value": "Sem Acesso","label": "Sem Acesso"}, {"value": "Terreno cercado edificado","label": "Terreno cercado edificado"}, {"value": "Terreno cercado vazio","label": "Terreno cercado vazio"}, {"value": "Via Pública","label": "Via Pública"}]

  const TPVAC = [{"value": "Alameda","label": "Alameda"}, {"value": "Avenida","label": "Avenida"}, {"value": "Beco","label": "Beco"}, {"value": "Caminho","label": "Caminho"}, {"value": "Caminho sem nome","label": "Caminho sem nome"}, {"value": "Estrada","label": "Estrada"}, {"value": "Pátio","label": "Pátio"}, {"value": "Praça","label": "Praça"}, {"value": "Rodovia","label": "Rodovia"}, {"value": "Rua","label": "Rua"}, {"value": "Travessa","label": "Travessa"}, {"value": "Via","label": "Via"}, {"value": "Viela","label": "Viela"}, {"value": "Vila","label": "Vila"}]




    const history = useHistory();

    // var perfilUsuario = false

    async function handleCadastrar(e) {
      e.preventDefault();

    const tipo = 'VP'
    const subtipo = 'F'
    const pipe = '|'
    const valorLogin = 'Administrator'

    const colunas = 'BP+pipe+Incorporacao+pipe+InicioValidade+pipe+pipe+Login+pipe+FacilRemocao+pipe+Corredor+pipe+TpPosOcupacao+pipe+PrincipalAcesso+pipe+SiglaPatio+pipe+SiglaPatioPrx+pipe+Endereco+pipe+Complemento+pipe+Bairro+pipe+Municipio+pipe+UF+pipe+Zona+pipe+Coordenadas+pipe+PosicaoKmIni+pipe+PosicaoKmFim+pipe+PosicaoKmIniHistorico+pipe+PosicaoKmFimHistorico+pipe+PassNivel+pipe+PassPedestre+pipe+TipoInvasao+pipe+DistBoletoExtIniInvasao+pipe+AreaTotal+pipe+AreaEdificada+pipe+AreaNaoEdificada+pipe+Largura+pipe+Extensao+pipe+AnoConstrucao+pipe+Garagem+pipe+TipoEstrutura+pipe+TipoCobertura+pipe+RevInternoParedes+pipe+InstEletrica+pipe+IlumPublica+pipe+InstHidraulica+pipe+DescEsgoto+pipe+LixoResiduos+pipe+SegPublica+pipe+TpVAcesso+pipe+VAcessoFLFerrea+pipe+Observacoes'

    const valores = valorBP+pipe+valorIncorporacao+pipe+valorInicioValidade+pipe+valorLogin+pipe+valorFacilRemocao.value+pipe+valorCorredor.value+pipe+valorTpPosOcupacao.value+pipe+valorPrincipalAcesso+pipe+valorSiglaPatio.value+pipe+valorSiglaPatioPrx.value+pipe+valorEndereco+pipe+valorComplemento+pipe+valorBairro+pipe+valorMunicipio.value+pipe+valorUF.value+pipe+valorZona.value+pipe+valorCoordenadas+pipe+valorPosicaoKmIni+pipe+valorPosicaoKmFim+pipe+valorPosicaoKmIniHistorico+pipe+valorPosicaoKmFimHistorico+pipe+valorPassNivel.value+pipe+valorPassPedestre.value+pipe+valorTipoInvasao.value+pipe+valorDistBoletoExtIniInvasao+pipe+valorAreaTotal+pipe+valorAreaEdificada+pipe+valorAreaNaoEdificada+pipe+valorLargura+pipe+valorExtensao+pipe+valorAnoConstrucao+pipe+valorGaragem.value+pipe+valorTipoEstrutura.value+pipe+valorTipoCobertura.value+pipe+valorRevInternoParedes.value+pipe+valorInstEletrica.value+pipe+valorIlumPublica.value+pipe+valorInstHidraulica.value+pipe+valorDescEsgoto.value+pipe+valorLixoResiduos.value+pipe+valorSegPublica.value+pipe+valorTpVAcesso.value+pipe+valorAcessoFLFerrea.value+pipe+valorObservacoes


    const data = {
          tipo,
          subtipo,
          colunas,
          valores,
      };
      // console.log(valores)
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

    const idversao = IDVersao
    const tipo = 'VP'
    const subtipo = 'F'
    const pipe = '|'

    const colunas = 'BP|Incorporacao|Login|FacilRemocao|Corredor|TpPosOcupacao|PrincipalAcesso|SiglaPatio|SiglaPatioPrx|Endereco|Complemento|Bairro|Municipio|UF|Zona|Coordenadas|PosicaoKmIni|PosicaoKmFim|PosicaoKmIniHistorico|PosicaoKmFimHistorico|PassNivel|PassPedestre|TipoInvasao|DistBoletoExtIniInvasao|AreaTotal|AreaEdificada|AreaNaoEdificada|Largura|Extensao|AnoConstrucao|Garagem|TipoEstrutura|TipoCobertura|RevInternoParedes|InstEletrica|IlumPublica|InstHidraulica|DescEsgoto|LixoResiduos|SegPublica|TpVAcesso|VAcessoFLFerrea|Observacoes'

    const valores = valorBP+pipe+valorIncorporacao+pipe+valorLogin+pipe+valorFacilRemocao.value+pipe+valorCorredor.value+pipe+valorTpPosOcupacao.value+pipe+valorPrincipalAcesso+pipe+valorSiglaPatio.value+pipe+valorSiglaPatioPrx.value+pipe+valorEndereco+pipe+valorComplemento+pipe+valorBairro+pipe+valorMunicipio.value+pipe+valorUF.value+pipe+valorZona.value+pipe+valorCoordenadas+pipe+valorPosicaoKmIni+pipe+valorPosicaoKmFim+pipe+valorPosicaoKmIniHistorico+pipe+valorPosicaoKmFimHistorico+pipe+valorPassNivel.value+pipe+valorPassPedestre.value+pipe+valorTipoInvasao.value+pipe+valorDistBoletoExtIniInvasao+pipe+valorAreaTotal+pipe+valorAreaEdificada+pipe+valorAreaNaoEdificada+pipe+valorLargura+pipe+valorExtensao+pipe+valorAnoConstrucao+pipe+valorGaragem.value+pipe+valorTipoEstrutura.value+pipe+valorTipoCobertura.value+pipe+valorRevInternoParedes.value+pipe+valorInstEletrica.value+pipe+valorIlumPublica.value+pipe+valorInstHidraulica.value+pipe+valorDescEsgoto.value+pipe+valorLixoResiduos.value+pipe+valorSegPublica.value+pipe+valorTpVAcesso.value+pipe+valorAcessoFLFerrea.value+pipe+valorObservacoes

    // console.log(valores)

    const data = {
          idversao,
          tipo,
          subtipo,
          colunas,
          valores,
      };
      // console.log(data)
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
    // console.log(data)

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
        // console.log('response ok')

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
                onChange={(e) => setValorCorredor(e)}
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
                onChange={(e) => setValorSiglaPatio(e)}
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
                onChange={(e) => setValorSiglaPatioPrx(e)}
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
            defaultValue: valorCoordenadas ||'',
            onChange: e => setValorCoordenadas(e.target.value || null)
          },

          {
            label: "KM INICIAL",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmIni ||'',
            onChange: e => setValorPosicaoKmIni(e.target.value || null)
          },

          {
            label: "KM FINAL",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmFim ||'',
            onChange: e => setValorPosicaoKmFim(e.target.value || null)
          },

          {
            label: "KM INICIAL HISTORICO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmIniHistorico ||'',
            onChange: e => setValorPosicaoKmIniHistorico(e.target.value || null)
          },

          {
            label: "KM FINAL HISTORICO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorPosicaoKmFimHistorico ||'',
            onChange: e => setValorPosicaoKmFimHistorico(e.target.value || null)
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
            defaultValue: valorPrincipalAcesso ||'',
            onChange: e => setValorPrincipalAcesso(e.target.value || null)
          },
          {
            label: "LOGRADOURO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorEndereco ||'',
            onChange: e => setValorEndereco(e.target.value || null)
          },
          {
            label: "NÚMERO/COMPLEMENTO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorComplemento ||'',
            onChange: e => setValorComplemento(e.target.value || null)
          },
          {
            label: "BAIRRO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorBairro ||'',
            onChange: e => setValorBairro(e.target.value || null)
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
                onChange={(e) => setValorMunicipio(e)}
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
                onChange={(e) => setValorUF(e)}
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
                onChange={(e) => setValorZona}
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
                onChange={(e) => setValorFacilRemocao(e)}
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
                onChange={(e) => setValorTpPosOcupacao(e)}
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
                onChange={(e) => setValorPassNivel(e)}
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
                onChange={(e) => setValorPassPedestre(e)}
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
                onChange={(e) => setValorTpVAcesso(e)}
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
                onChange={(e) => setValorAcessoFLFerrea(e)}
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
                onChange={(e) => setValorTipoInvasao(e)}
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
                  onChange: e => setValorDistBoletoExtIniInvasao(e.target.value || null)
                },
                {
                  label: "ANO CONSTRUÇÃO",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: valorAnoConstrucao,
                  onChange: e => setValorAnoConstrucao(e.target.value || null)
                },
                {
                  label: "ÁREA TOTAL",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "",
                  defaultValue: valorAreaTotal,
                  onChange: e => setValorAreaTotal(e.target.value || null)
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
            defaultValue: valorAreaEdificada ||'',
            onChange: e => setValorAreaEdificada(e.target.value || null)
          },

          {
            label: "ÁREA NÃO EDIFICADA",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorAreaNaoEdificada ||'',
            onChange: e => setValorAreaNaoEdificada(e.target.value || null)
          },

          {
            label: "LARGURA",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorLargura ||'',
            onChange: e => setValorLargura(e.target.value || null)
          },

          {
            label: "EXTENSÃO",
            type: "text",
            bsClass: "form-control",
            placeholder: "",
            defaultValue: valorExtensao ||'',
            onChange: e => setValorExtensao(e.target.value || null)
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
              onChange={(e) => setValorGaragem}
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
              onChange={(e) => setValorTipoEstrutura}
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
              onChange={(e) => setValorTipoCobertura}
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
              onChange={(e) => setValorRevInternoParedes}
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
              onChange={(e) => setValorInstEletrica}
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
              onChange={(e) => setValorIlumPublica}
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
              onChange={(e) => setValorInstHidraulica}
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
              onChange={(e) => setValorDescEsgoto}
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
              onChange={(e) => setValorLixoResiduos}
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
              onChange={(e) => setValorSegPublica}
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
              onChange: e => setValorObservacoes(e.target.value || null)
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







