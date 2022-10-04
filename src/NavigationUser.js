import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';





export class NavigationUser extends Component{
    render(){
        return(
            <Navbar bg="info" expand="lg" >
            <Navbar.Toggle aria-controls="nav nav-pills"/>
            <Navbar.Collapse id="nav nav-pills">
            <Nav>
            <NavLink className="d-inline p-2 .bg-info  text-dark" to="/">
            <strong>Home</strong>
            </NavLink>
           
            <NavLink className="d-inline p-2 .bg-info text-dark " to="/Policia">
                <strong>Lere nje termin</strong>
            </NavLink>
            
       
       
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}