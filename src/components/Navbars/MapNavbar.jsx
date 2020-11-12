import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import './styles.css';
// we import here the routes for dashboard pages (links that appear in sidebar) to set navbar's name

import routes from "routes.js";

class MapNavbar extends Component {
  getActiveRoute = routes => {
    let activeRoute = "";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // function for responsive that hides/shows the sidebar
  mobileSidebarToggle = e => {
    document.documentElement.classList.toggle("nav-open");
  };
  render() {
    return (
      <Navbar fluid className={this.props.navbar ? "navbar-fixed navbar-mod" : "navbar-mod"}>
        <div className="navbar-minimize">
          <button
            id="minimizeSidebar"
            className="btn btn-default btn-fill btn-round btn-icon"
            onClick={this.props.handleMiniClick}
          >
            <i className="fa fa-ellipsis-v visible-on-sidebar-regular" />
            <i className="fa fa-navicon visible-on-sidebar-mini" />
          </button>
        </div>
        <Navbar.Header>
          <Navbar.Brand>
            {/* Here we create navbar brand, based on route name */}
            <span className="texto-titulo">{this.getActiveRoute(routes)}</span>
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-tooggle" onClick={this.mobileSidebarToggle} />
        </Navbar.Header>

        {/* Here we import the links that appear in navbar */}
        {window.innerWidth > 992 ? (
          <Navbar.Collapse className="navbar-mod">
          </Navbar.Collapse>
        ) : null}
      </Navbar>
    );
  }
}

export default MapNavbar;
