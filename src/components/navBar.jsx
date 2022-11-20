import React, { Component } from "react";
class NavBar extends Component {
   

  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Counter 
            <span className="badge roounded-pill text-bg-secondary m-2">{this.props.totolCounters}</span>
            <span className="badge roounded-pill text-bg-secondary m-2">{this.props.totalNo}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
