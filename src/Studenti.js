import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddStudentiModal} from './AddStudentiModal';
import {EditStudentiModal} from './EditStudentiModal';
export class Studenti extends Component{
    state= {
        loading:true,
        person:null,
        lets:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/Studenti";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({lets:data, loading:false});
    
}
deleteEmp(letid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/Studenti/'+letid,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type':'application/json'}
        })
    }
}





render(){
    const {lets, letid,letName,datal,np,vendl, dP, dS}=this.state;
            let addModalClose=()=>this.setState({addModalShow:false});
            let editModalClose=()=>this.setState({editModalShow:false});
            return(
                <div >
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                            <th>Emri i Leternjoftim Marresit</th>
                            <th>Data E lindjes</th>
                            <th>Numri Personal</th>
                            <th>Vendlindja</th>
                            <th>Data e pranimit</th>
                            <th>Data e skadences</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lets.map(lets=>
                                <tr key={lets.StudentiId}>
                                    <td>{lets.StudentiId}</td>
                                    <td>{lets.Emri}</td>
                                    <td>{lets.Fakulteti}</td>
                                    <td>{lets.GjirollogariaBankare}</td>
                                    <td>{lets.Drejtimi}</td>
                                    <td>{lets.NiveliAkademik}</td>
                                    <td>{lets.DataPranimit}</td>
                                    <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="primary"
        onClick={()=>this.setState({editModalShow:true,
            letid:lets.StudentiId, letName:lets.Emri, datal:lets.Fakulteti,
            np:lets.GjirollogariaBankare,vendl:lets.Drejtimi, dP:lets.NiveliAkademik, dS:lets.DataPranimit})}>
                Edit
            </Button>
    
            <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteEmp(lets.StudentiId)}>
                Delete
            </Button>
    
            <EditStudentiModal show={this.state.editModalShow}
            onHide={editModalClose}
            letid={letid}
            letName={letName}
            datal={datal}
            np={np}
            vendl={vendl}
            dP={dP}
            dS={dS}
            />
    </ButtonToolbar>
    
                                    </td>
    
                                </tr>)}
                        </tbody>
    
                    </Table>
    
                    <ButtonToolbar>
                        <Button variant='success'
                        onClick={()=>this.setState({addModalShow:true})}>
                        Shto Student</Button>
                                
                            <AddStudentiModal show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            )
        }
}







