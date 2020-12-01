import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, } from "react-bootstrap";
import moment from 'moment';


import FormInputs from "components/FormInputs/FormInputs.jsx";
import 'moment/locale/pt-br';

function HeaderBP(props) {
  return (
    <div className="header-bp">
      <Row>
        <Col md={11}>
          <FormInputs
            ncols={["col-md-3", "col-md-2", "col-md-1", "col-md-3", "col-md-3"]}
            proprieties={[
              {
                label: "BP",
                type: "text",
                bsClass: "form-control",
                placeholder: "",
                disabled: false,
                defaultValue: props.defaultValueBP,
                onChange: e => props.onChangeBP(e.target.value)
              },

              {
                label: "INCORPORAÇÃO",
                type: "text",
                bsClass: "form-control",
                placeholder: "",
                disabled: false,
                defaultValue: props.defaultValueIncorporacao,
                onChange: e => props.onChangeIncorporacao(e.target.value)
              },

              {
                label: "VERSÃO",
                type: "text",
                bsClass: "form-control",
                placeholder: "",
                disabled: true,
                defaultValue: props.defaultValueVersao,
              },

              {
                label: "INICIO VALIDADE",
                type: "text",
                bsClass: "form-control",
                placeholder: "",
                disabled: true,
                defaultValue: moment(props.defaultValueInicioValidade).format('DD/MM/YYYY')
              },

              {
                label: "FIM VALIDADE",
                type: "text",
                bsClass: "form-control",
                placeholder: "",
                disabled: true,
                defaultValue: moment(props.defaultValueFimValidade).format('DD/MM/YYYY')
              }
            ]}
          />
        </Col>
        <Col md={1}>
          <Link to={props.linkVoltar}>
            <i className="pe-7s-angle-left-circle icone-voltar"></i>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default HeaderBP
