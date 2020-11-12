import React, { Component } from "react";
import { Table, Grid, Row, Col,  OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from 'components/CustomButton/CustomButton.jsx';
import Card from "components/Card/Card.jsx";

const view = (
    <Tooltip id="view">Visualizar</Tooltip>
);
const edit = (
    <Tooltip id="edit">Editar</Tooltip>
);
const remove = (
    <Tooltip id="remove">Excluir</Tooltip>
);

const actions = (
    <td className="td-actions text-right">
        <OverlayTrigger placement="top" overlay={view}>
            <Button simple bsStyle="info" bsSize="xs">
                <i className="fa fa-user"></i>
            </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={edit}>
            <Button simple bsStyle="success" bsSize="xs">
                <i className="fa fa-edit"></i>
            </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={remove}>
            <Button simple bsStyle="danger" bsSize="xs">
                <i className="fa fa-times"></i>
            </Button>
        </OverlayTrigger>
    </td>
);

class TableDocsDesFotos extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
            <Row>
                <Col md={12}>
                    <Card
                        category="Documentos"
                        tableFullWidth
                        content={
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Formato</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Laudo de Avaliação</td>
                                        <td>Laudo de Avaliação</td>
                                        <td>01177-Anes Dias nº18 (Atual 22).dwf</td>
                                        <td>DWF</td>
                                        <td>2006-06-16</td>
                                        { actions }
                                    </tr>
                                    <tr>
                                        <td>Laudo de Avaliação</td>
                                        <td>Laudo de Avaliação</td>
                                        <td>01177-Anes Dias nº18 (Atual 22).dwf</td>
                                        <td>DWF</td>
                                        <td>2006-06-16</td>
                                        { actions }
                                    </tr>
                                </tbody>
                            </Table>
                        }
                    />
                </Col>
                <Col md={12}>
                    <Card
                        category="Desenhos"
                        tableFullWidth
                        content={
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Formato</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Laudo de Avaliação</td>
                                        <td>Laudo de Avaliação</td>
                                        <td>01177-Anes Dias nº18 (Atual 22).dwf</td>
                                        <td>DWF</td>
                                        <td>2006-06-16</td>
                                        { actions }
                                    </tr>
                                    <tr>
                                        <td>Laudo de Avaliação</td>
                                        <td>Laudo de Avaliação</td>
                                        <td>01177-Anes Dias nº18 (Atual 22).dwf</td>
                                        <td>DWF</td>
                                        <td>2006-06-16</td>
                                        { actions }
                                    </tr>
                                </tbody>
                            </Table>
                        }
                    />
                </Col>
                <Col md={12}>
                    <Card
                        category="Fotografias"
                        tableFullWidth
                        content={
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Formato</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Laudo de Avaliação</td>
                                        <td>Laudo de Avaliação</td>
                                        <td>01177-Anes Dias nº18 (Atual 22).dwf</td>
                                        <td>DWF</td>
                                        <td>2006-06-16</td>
                                        { actions }
                                    </tr>
                                    <tr>
                                        <td>Laudo de Avaliação</td>
                                        <td>Laudo de Avaliação</td>
                                        <td>01177-Anes Dias nº18 (Atual 22).dwf</td>
                                        <td>DWF</td>
                                        <td>2006-06-16</td>
                                        { actions }
                                    </tr>
                                </tbody>
                            </Table>
                        }
                    />
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default TableDocsDesFotos;
