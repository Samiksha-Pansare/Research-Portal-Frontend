import React, { Component, useState } from 'react';
import '../Css/Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { navColor: false};
        this.handlescrollbar = this.handlescrollbar.bind(this);
      }
    
     handlescrollbar() {
      if(window.scrollY >= 80){
        this.setState({ navColor: true });
        console.log("Function working");
      }
      else{
        this.setState({ navColor: false });
      }
     };
  render() {
    const { scrollstatus } = this.state;
    // const Navbar = () => {
    //     const [colorChange, setColorchange] = useState(false);
    //     const changeNavbarColor = () =>{
    //        if(window.scrollY >= 80){
    //          setColorchange(true);
    //        }
    //        else{
    //          setColorchange(false);
    //        }
    //     };
    //     window.addEventListener('scroll', changeNavbarColor);
    // } 
    return (
      <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light "  style={{background: (scrollstatus==='true') ? '#f8f4fa' : 'url("../Images/bg-color.png")' }} >
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Research Portal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Chat</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Academic Events</a></li>
                    <li><a className="dropdown-item" href="#">Upcoming Conferences</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Research
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Research Papers</a></li>
                    <li><a className="dropdown-item" href="#">Collaborate</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex">
              <button type="button" className="btn btn-outline-dark navbar-btn">Log Out</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
  }
}
