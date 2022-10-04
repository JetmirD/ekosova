import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditPasaportaModal extends Component{
    constructor(props){
        super(props);
        this.state={pas:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/Pasaporta')
        .then(response=>response.json())
        .then(data=>{
            this.setState({pas:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/Pasaporta',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                PasaportaId:event.target.PasaportaId.value,
                EmriIPersonitMePasaporte:event.target.EmriIPersonitMePasaporte.value,
                LlojiPasaportes:event.target.LlojiPasaportes.value,
                DataSkadences:event.target.DataSkadences.value,
                NumriIdentifikues:event.target.NumriIdentifikues.value

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


    handleFileSelected(event){
        event.preventDefault();
        this.FotoEteDenuarit=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "Photos",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch('https://localhost:44357/api/departamentiPolicia/SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc='https://localhost:44357/api/departamentiPolicia/SaveFile'+result;
        },
        (error)=>{
            alert('Failed');
        })
        
    }

    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>

             
               

    <Modal.Header closeButton={true}>
    <centered><Modal.Title id="contained-modal-title-vcenter">
           Edit Personin me pasaporte
        </Modal.Title></centered> 
    </Modal.Header>
    <Modal.Body>
    
        <Row >
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="PasaportaId">
                        <Form.Label>PasaportaId</Form.Label>
                        <Form.Control type="text" name="PasaportaId" required 
                        placeholder="PasaportaId"
                        disabled
                        defaultValue={this.props.pasid}/>
                    </Form.Group>

                    <Form.Group controlId="EmriIPersonitMePasaporte">
                        <Form.Label>Emri I Personit Me Pasaporte</Form.Label>
                        <Form.Control type="text" name="EmriIPersonitMePasaporte" required 
                        defaultValue={this.props.pasname}
                        placeholder="Emri I Personit Me Pasaporte"/>
                    </Form.Group>

                    <Form.Group controlId="LlojiPasaportes">
                        <Form.Label>Lloji i Pasaportes</Form.Label>
                        <Form.Control type="text" name="LlojiPasaportes" required 
                        defaultValue={this.props.passlloji}
                        placeholder="Lloji i Pasaportes"/>
                    </Form.Group>

                    <Form.Group controlId="DataSkadences">
                        <Form.Label>DataSkadences</Form.Label>
                        <Form.Control type="date" name="DataSkadences" required 
                        defaultValue={this.props.pasData}
                        placeholder="DataSkadences"/>
                    </Form.Group>

                    <Form.Group controlId="NumriIdentifikues">
                        <Form.Label>NumriIdentifikues</Form.Label>
                        <Form.Control type="text" name="NumriIdentifikues" required 
                        defaultValue={this.props.pasNumri}
                        placeholder="NumriIdentifikues"/>
                    </Form.Group>

             


                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Ndrysho
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            {/* <Col sm={6}>
                <Image width="200px" height="200px" 
                src={'https://localhost:44357/api/Policia/SaveFile'+this.props.FotoEteDenuarit}/>
                <input onChange={this.handleFileSelected} type="File"/>
            </Col> */}
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}