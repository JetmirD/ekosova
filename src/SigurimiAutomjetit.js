import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddSigurimiAutomjetit} from './AddSigurimiAutomjetit';
import {EditSigurimiAutomjetit} from './EditSigurimiAutomjetit';
export class SigurimiAutomjetit extends Component{
    state= {
        loading:true,
        person:null,
        lets:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/SigurimiAutomjetit";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({lets:data, loading:false});
    
}
deleteEmp(letid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/SigurimiAutomjetit/'+letid,{
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
                                <th>KerriId</th>
                            <th>Lloji i Makines</th>
                            <th>Marka</th>
                            <th>Fuqia Motorike</th>
                            <th>Viti i prodhimit</th>
                            <th>Lloji i sigurimit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lets.map(lets=>
                                <tr key={lets.KerriId}>
                                    <td>{lets.KerriId}</td>
                                    <td>{lets.LlojiMakines}</td>
                                    <td>{lets.Marka}</td>
                                    <td>{lets.FuqiaMotorike}</td>
                                    <td>{lets.VitiProdhimit}</td>
                                    <td>{lets.LlojiSigurimit}</td>
                                    <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="primary"
        onClick={()=>this.setState({editModalShow:true,
            letid:lets.KerriId, letName:lets.LlojiMakines, datal:lets.Marka,
            np:lets.FuqiaMotorike,vendl:lets.VitiProdhimit, dP:lets.LlojiSigurimit})}>
                Edit
            </Button>
    
            <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteEmp(lets.KerriId)}>
                Delete
            </Button>
    
            <EditSigurimiAutomjetit show={this.state.editModalShow}
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
                        Shto Makine te regjistruar</Button>
                                
                            <AddSigurimiAutomjetit show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            )
        }
}







