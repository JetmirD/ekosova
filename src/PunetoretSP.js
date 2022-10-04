import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPunetoretSPModal} from './AddPunetoretSPModal';
import {EditPunetoretSPModal} from './EditPunetoretSPModal';
export class PunetoretSP extends Component{
    state= {
        loading:true,
        person:null,
        lets:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/PunetoretSP";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({lets:data, loading:false});
    
}
deleteEmp(letid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/PunetoretSP/'+letid,{
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
                                <th>ID</th>
                            <th>Emri</th>
                            <th>Data Fillimit</th>
                            <th>Vendi Punes</th>
                            <th>Rroga</th>
                            <th>Sektori</th>
                            <th>Data e skadences</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lets.map(lets=>
                                <tr key={lets.ID}>
                                    <td>{lets.ID}</td>
                                    <td>{lets.Emri}</td>
                                    <td>{lets.DataFillimit}</td>
                                    <td>{lets.VendiPunes}</td>
                                    <td>{lets.Rroga}</td>
                                    <td>{lets.Sektori}</td>

                                    <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="primary"
        onClick={()=>this.setState({editModalShow:true,
            letid:lets.ID, letName:lets.Emri, datal:lets.DataFillimit,
            np:lets.VendiPunes,vendl:lets.Rroga, dP:lets.Sektori})}>
                Edit
            </Button>
    
            <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteEmp(lets.ID)}>
                Delete
            </Button>
    
            <EditPunetoretSPModal show={this.state.editModalShow}
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
                        Shto Gjobe</Button>
                                
                            <AddPunetoretSPModal show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            )
        }
}







