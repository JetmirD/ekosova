import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddSubvencioneteBizneseveModal} from './AddSubvencioneteBizneseveModal';
import {EditSubvencioneteBizneseveModal} from './EditSubvencioneteBizneseveModal';
export class SubvencioneteBizneseve extends Component{
    state= {
        loading:true,
        person:null,
        lets:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/SubvencioneteBizneseve";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({lets:data, loading:false});
    
}
deleteEmp(letid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/SubvencioneteBizneseve/'+letid,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type':'application/json'}
        })
    }
}





render(){
    const {lets, letid,letName,datal,np,vendl, dP}=this.state;
            let addModalClose=()=>this.setState({addModalShow:false});
            let editModalClose=()=>this.setState({editModalShow:false});
            return(
                <div >
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>BiznesiId</th>
                            <th>Emri Pronarit</th>
                            <th>Emri Biznesit</th>
                            <th>Numri Puntorve</th>
                            <th>Gjirollogaria Bankare</th>
                            <th>StatusiSubvencionit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lets.map(lets=>
                                <tr key={lets.BiznesiId}>
                                    <td>{lets.BiznesiId}</td>
                                    <td>{lets.EmriPronarit}</td>
                                    <td>{lets.EmriBiznesit}</td>
                                    <td>{lets.NumriPuntorve}</td>
                                    <td>{lets.GjirollogariaBankare}</td>
                                    <td>{lets.StatusiSubvencionit}</td>
                                    <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="primary"
        onClick={()=>this.setState({editModalShow:true,
            letid:lets.BiznesiId, letName:lets.EmriPronarit, datal:lets.EmriBiznesit,
            np:lets.NumriPuntorve,vendl:lets.GjirollogariaBankare, dP:lets.StatusiSubvencionit})}>
                Edit
            </Button>
    
            <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteLet(lets.BiznesiId)}>
                Delete
            </Button>
    
            <EditSubvencioneteBizneseveModal show={this.state.editModalShow}
            onHide={editModalClose}
            letid={letid}
            letName={letName}
            datal={datal}
            np={np}
            vendl={vendl}
            dP={dP}
            />
    </ButtonToolbar>
    
                                    </td>
    
                                </tr>)}
                        </tbody>
    
                    </Table>
    
                    <ButtonToolbar>
                        <Button variant='success'
                        onClick={()=>this.setState({addModalShow:true})}>
                        Shto Biznes</Button>
                                
                            <AddSubvencioneteBizneseveModal show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            )
        }
}







