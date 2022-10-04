import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';





export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="info" expand="none" class="nav nav-tabs">
            <Navbar.Toggle aria-controls="nav nav-pills"/>
            <Navbar.Collapse id="nav nav-pills">
            <Nav>
            <NavLink className="d-inline p-2 .bg-info  text-dark" to="/">
            <strong>Home</strong>
            </NavLink>
           
            <NavLink className="d-inline p-2 .bg-info text-dark " to="/Policia">
                <strong>Sherbimet e Policise</strong>
            </NavLink>
            
            <NavLink className="d-inline p-2 .bg-info text-dark" to="/Leja">
                <strong>Patent Shoferi</strong>
            </NavLink>

            <NavLink className="d-inline p-2 .bg-info text-dark" to="/Vaksina">
                <strong> Personat e Vaksinuar</strong>
            </NavLink>

            <NavLink className="d-inline p-2 .bg-info text-dark" to ="/Leternjoftimi">
                <strong>Leternjoftimet</strong>

            </NavLink>
            
            <NavLink className="d-inline p-2 .bg-info text-dark" to ="/Pasaporta">
                <strong>Pasaporta</strong>

            </NavLink>

            <NavLink className="d-inline p-2 .bg-info text-dark" to ="/Artikujt">
                <strong>Artikujt</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to ="/CertifikataLindjes">
                <strong>Certifikatat e lindjes</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to ="/Pensionet">
                <strong>Pensionet</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to="/PunetoretSP">
                <strong>Punetoret</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to="/SigurimiAutomjetit">
                <strong>Sigurimi i automjeteve</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to="/Studenti">
                <strong>Studentet</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to="/SubvencioneteBizneseve">
                <strong>SubvencioneteBizneseve</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to="/#">
                <strong>Tatimi</strong>

            </NavLink>
            <NavLink className="d-inline p-2 .bg-info text-dark" to="/#">
                <strong>Vaksina</strong>

            </NavLink>
            
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}