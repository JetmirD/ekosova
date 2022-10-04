import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPasaportaModal} from './AddPasaportaModal';
import {EditPasaportaModal} from './EditPasaportaModal';

export class Pasaporta extends Component{

    state= {
        loading:true,
        person:null,
        pass:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/Pasaporta";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({pass:data, loading:false});
    
}
deleteEmp(pasid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/Pasaporta/'+pasid,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type':'application/json'}
        })
    }
}



render(){
const {pass, pasid, pasname,passlloji,pasData,pasNumri}=this.state;
        let addModalClose=()=>this.setState({addPasaportaShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>PasaportaId</th>
                        <th>Emri i personit me pasaporte</th>
                        <th>Lloji i Pasaportes</th>
                        <th>Data</th>
                        <th>Numri identifikues</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pass.map(pas=>
                            <tr key={pas.PasaportaId}>
                                <td>{pas.PasaportaId}</td>
                                <td>{pas.EmriIPersonitMePasaporte}</td>
                                <td>{pas.LlojiPasaportes}</td>
                                <td>{pas.DataSkadences}</td>
                                <td>{pas.NumriIdentifikues}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="primary"
    onClick={()=>this.setState({editModalShow:true,
        pasid:pas.PasaportaId,pasname:pas.EmriIPersonitMePasaporte,passlloji:pas.LlojiPasaportes,
        pasData:pas.DataSkadences,pasNumri:pas.NumriIdentifikues})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deletePas(pas.PasaportaId)}>
            Delete
        </Button>

        <EditPasaportaModal show={this.state.editModalShow}
        onHide={editModalClose}
        pasid={pasid}
        pasname={pasname}
        passlloji={passlloji}
        pasData={pasData}
        pasNumri={pasNumri}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='success'
                    onClick={()=>this.setState({addPasaportaShow:true})}>
                    Shto Person me pasaporte</Button>
                            
                        <AddPasaportaModal show={this.state.addPasaportaShow}
                        onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }



}

