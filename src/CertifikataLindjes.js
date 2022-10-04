import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddCertifikataLindjesModal} from './AddCertifikataLindjesModal';
import {EditCertifikataLindjesModal} from './EditCertifikataLindjesModal';
export class CertifikataLindjes extends Component{
    state= {
        loading:true,
        person:null,
        lets:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/CertifikataLindjes";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({lets:data, loading:false});
    
}
deleteLet(letid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/CertifikataLindjes/'+letid,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type':'application/json'}
        })
    }
}





render(){
    const {lets, letid,letName,datal,np,vendl, dP, dS, dSh, NumP}=this.state;
            let addModalClose=()=>this.setState({addModalShow:false});
            let editModalClose=()=>this.setState({editModalShow:false});
            return(
                <div >
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                            <th>Emri i Personit</th>
                            <th>Emri i prindit</th>
                            <th>Mbiemri i prindit</th>
                            <th>Vendlindja</th>
                            <th>Data e Lindjes</th>
                            <th>Statusi Martesor</th>
                            <th>Shtetesia</th>
                            <th>Numri Personal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lets.map(lets=>
                                <tr key={lets.CertifikimiID}>
                                    <td>{lets.CertifikimiID}</td>
                                    <td>{lets.EmriPersonit}</td>
                                    <td>{lets.EmriPrindit}</td>
                                    <td>{lets.MbiemriPersonit}</td>
                                    <td>{lets.Vendlindja}</td>
                                    <td>{lets.DataLindjes}</td>
                                    <td>{lets.StatusiMartesor}</td>
                                    <td>{lets.Shtetesia}</td>
                                    <td>{lets.NumriPersonal}</td>
                                    <td>{lets.Shtetesia}</td>
                                    <td>{lets.NumriPersonal}</td>
                                    <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="primary"
        onClick={()=>this.setState({editModalShow:true,
            letid:lets.CertifikimiID, letName:lets.EmriPersonit, datal:lets.EmriPrindit,
            np:lets.MbiemriPersonit,vendl:lets.Vendlindja, dP:lets.DataLindjes, dS:lets.StatusiMartesor, dSh:lets.Shtetesia, NumP:lets.NumriPersonal})}>
                Edit
            </Button>
    
            <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteLet(lets.CertifikimiID)}>
                Delete
            </Button>
    
            <EditCertifikataLindjesModal show={this.state.editModalShow}
            onHide={editModalClose}
            letid={letid}
            letName={letName}
            datal={datal}
            np={np}
            vendl={vendl}
            dP={dP}
            dS={dS}
            dSh={dSh}
            NumP={NumP}
            />
    </ButtonToolbar>
    
                                    </td>
    
                                </tr>)}
                        </tbody>
    
                    </Table>
    
                    <ButtonToolbar>
                        <Button variant='success'
                        onClick={()=>this.setState({addModalShow:true})}>
                        Shto Gjobe</Button>
                                
                            <AddCertifikataLindjesModal show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            )
        }
}







