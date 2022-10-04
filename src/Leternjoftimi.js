import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddLeternjoftimiModal} from './AddLeternjoftimiModal';
import {EditLeternjoftimiModal} from './EditLeternjoftimiModal';
export class Leternjoftimi extends Component{
    state= {
        loading:true,
        person:null,
        lets:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/Leternjoftimi";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({lets:data, loading:false});
    
}
deleteEmp(letid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/Leternjoftimi/'+letid,{
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
                                <tr key={lets.LeternjoftimiId}>
                                    <td>{lets.LeternjoftimiId}</td>
                                    <td>{lets.EmriLeternjoftimMarresit}</td>
                                    <td>{lets.DataLindjes}</td>
                                    <td>{lets.NumriPersonal}</td>
                                    <td>{lets.Vendlindja}</td>
                                    <td>{lets.DataPranimit}</td>
                                    <td>{lets.DataSkadences}</td>
                                    <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="primary"
        onClick={()=>this.setState({editModalShow:true,
            letid:lets.LeternjoftimiId, letName:lets.EmriLeternjoftimMarresit, datal:lets.DataLindjes,
            np:lets.NumriPersonal,vendl:lets.Vendlindja, dP:lets.DataPranimit, dS:lets.DataSkadences})}>
                Edit
            </Button>
    
            <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteLet(lets.LeternjoftimiId)}>
                Delete
            </Button>
    
            <EditLeternjoftimiModal show={this.state.editModalShow}
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
                        Shto Gjobe</Button>
                                
                            <AddLeternjoftimiModal show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            )
        }
}







