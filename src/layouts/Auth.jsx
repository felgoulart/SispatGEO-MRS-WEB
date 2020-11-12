
import React, { Component } from "react";
import { Route } from "react-router-dom";
import {Col} from 'react-bootstrap';

import './styles.css'

// import Footer from "components/Footer/Footer.jsx";
// import AuthNavbar from "components/Navbars/AuthNavbar.jsx";

// dinamically create pages routes

import Logo from '../assets/img/logoMRS.png'
import LoginPage from "../views/pages/LoginPage";

class Pages extends Component {
  componentWillMount() {
    if (document.documentElement.className.indexOf("nav-open") !== -1) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
  getPageClass() {
    var pageClass = "";
    switch (this.props.location.pathname) {
      case "/auth/login-page":
        pageClass = " login-page";
        break;
      case "/auth/register-page":
        pageClass = " register-page";
        break;
      case "/auth/lock-screen-page":
        pageClass = " lock-page";
        break;
      default:
        pageClass = "";
        break;
    }
    return pageClass;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <div className="wrapper wrapper-full-page">
          <Col md={9} className="bg">
            <img className="image-logo" src={Logo} alt="Logo MRS"/>
            <h1 className="titulo-login">Bem-vindo ao SispatGEO v3.0</h1>
            <h3 className="titulo-login">Sistema de Gestão das Ocupações da MRS Logística</h3>
          </Col>
          <Col md={3} className="card-login">
              <LoginPage />
          </Col>
      </div>
      // <div>
      //   {/* <AuthNavbar /> */}
      //   <div className="wrapper wrapper-full-page">
      //       <div
      //         className={"full-page" + this.getPageClass()}
      //         data-color="black"
      //         data-image={bgImage}
      //       >
      //           <div className="content">
      //             <Switch>{this.getRoutes(routes)}</Switch>
      //           </div>

      //         <div
      //           className="full-page-background"
      //           style={{ backgroundImage: "url(" + bgImage + ")" }}
      //         />
      //       </div>
      //   </div>
      // </div>
    );
  }
}

export default Pages;
