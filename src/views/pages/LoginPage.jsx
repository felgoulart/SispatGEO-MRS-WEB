import React, {useState} from "react";
import {  useHistory } from 'react-router-dom';

import {
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import './LoginPage.css';

function LoginPage() {

  const [valorUsuario, setValorUsuario] = useState([]);
  const [valorSenha, setValorSenha] = useState([]);
  const history = useHistory();


  const handleLogin = (e) => {
    e.preventDefault();

    try {

      if ( valorUsuario === 'admin' && valorSenha === 'adm123') {
        history.push("/map/mapa-geo");
        sessionStorage.setItem('@sispatgeo-app/usuario', 'admin');
      } else if ( valorUsuario === 'consulta' && valorSenha === 'con012')  {
        history.push("/map/mapa-geo");
        sessionStorage.setItem('@sispatgeo-app/usuario', 'consulta');
      } else alert('Usuário ou senha incorreto!')

    } catch (err) {
      alert('Erro no processamento, tente novamente.')
    }
  }
    return (
            <form>
              <Card
                textCenter
                title="SispatGEO 3.0"
                category="Login"
                content={
                  <div >
                    <FormGroup>
                      <ControlLabel>Usuário</ControlLabel>
                    <FormControl placeholder="Usuário" type="email" onChange={e => setValorUsuario(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Senha</ControlLabel>
                      <FormControl placeholder="Senha" type="password" autoComplete="off" onChange={e => setValorSenha(e.target.value)}/>
                    </FormGroup>
                  </div>
                }
                legend={
                  <Button onClick={handleLogin} bsStyle="info" fill wd>
                    Entrar
                  </Button>
                }
                ftTextCenter
              />
            </form>
    );
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
