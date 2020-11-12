import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardHidden: false });
      }.bind(this),
      700
    );
  }
  render() {
    return (
            <form>
              <Card
                hidden={this.state.cardHidden}
                textCenter
                title="SispatGEO 3.0"
                category="Login"
                content={
                  <div >
                    <FormGroup>
                      <ControlLabel>Usuário</ControlLabel>
                    <FormControl placeholder="Digite o usuário" type="email" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Senha</ControlLabel>
                      <FormControl placeholder="Senha" type="password" autoComplete="off"/>
                    </FormGroup>
                  </div>
                }
                legend={
                  <Button href="/#/map/mapa-geo" bsStyle="info" fill wd>
                    Entrar
                  </Button>
                }
                ftTextCenter
              />
            </form>
    );
  }
  // render() {
  //   return (
  //     <Grid>
  //       <Row className="Form-Login">
  //         <Col md={12} sm={12}>
  //           <form>
  //             <Card
  //               hidden={this.state.cardHidden}
  //               textCenter
  //               title="SispatGeo 3.0"
  //               category="Login"
  //               content={
  //                 <div>
  //                   <FormGroup>
  //                     <ControlLabel>Usuário</ControlLabel>
  //                     <FormControl placeholder="Digite o usuário" type="email" />
  //                   </FormGroup>
  //                   <FormGroup>
  //                     <ControlLabel>Senha</ControlLabel>
  //                     <FormControl placeholder="Senha" type="password" autoComplete="off"/>
  //                   </FormGroup>
  //                 </div>
  //               }
  //               legend={
  //                 <Button href="/mapa-geo" bsStyle="info" fill wd>
  //                   Entrar
  //                 </Button>
  //               }
  //               ftTextCenter
  //             />
  //           </form>
  //         </Col>
  //       </Row>
  //     </Grid>
  //   );
  // }
}

export default LoginPage;
