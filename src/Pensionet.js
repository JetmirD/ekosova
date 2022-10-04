import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPensionimiModal} from './AddPensionimiModal';
import {EditPensionimiModal} from './EditPensionimiModal';
export class Pensionet extends Component{
    state= {
        loading:true,
        person:null,
        lets:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/Pensionet";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({lets:data, loading:false});
    
}
deleteLet(letid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/Pensionet/'+letid,{
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
                            <th>Emri i Te Pensionuarit</th>
                            <th>Data e Fillimit</th>
                            <th>Lloji i Pensionimit</th>
                            <th>Vendlindja</th>
                            <th>Pensioni Mujor</th>
                            <th>Numri Identifikues</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lets.map(lets=>
                                <tr key={lets.PensionetId}>
                                    <td>{lets.PensionetId}</td>
                                    <td>{lets.EmriTePensionuarit}</td>
                                    <td>{lets.DataFillimit}</td>
                                    <td>{lets.LlojiPensionimit}</td>
                                    <td>{lets.PensioniMujor}</td>
                                    <td>{lets.NumriIdentifikues}</td>
                                 
                                    <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="primary"
        onClick={()=>this.setState({editModalShow:true,
            letid:lets.PensionetId, letName:lets.EmriTePensionuarit, datal:lets.DataFillimit,
            np:lets.LlojiPensionimit,vendl:lets.PensioniMujor, dP:lets.NumriIdentifikues})}>
                Edit
            </Button>
    
            <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteLet(lets.PensionetId)}>
                Delete
            </Button>
    
            <EditPensionimiModal show={this.state.editModalShow}
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
                        Shto Pensionist</Button>
                                
                            <AddPensionimiModal show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            )
        }
}







