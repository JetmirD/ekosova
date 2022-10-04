import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddPasaportaModal extends Component{
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
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PasaportaId:null,
                EmriIPersonitMePasaporte:event.target.EmriIPersonitMePasaporte.value,
                LlojiPasaportes:event.target.LlojiPasaportes.value,
                DataSkadences:event.target.DataSkadences.value,
                NumriIdentifikues:event.target.NumriIdentifikues.value,
                // FotoEteDenuarit:this.FotoEteDenuarit
          
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
        this.photofilename=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API+'Policia/SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc='https://localhost:44357/api/Pasaporta/SaveFile'+result;
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
    
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Shto Person me Pasaporte
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="EmriIPersonitMePasaporte">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="EmriIPersonitMePasaporte" required 
                        placeholder="EmriIPersonitMePasaporte"/>
                    </Form.Group>

                    <Form.Group controlId="LlojiPasaportes">
                        <Form.Label>Lloji i pasaportes</Form.Label>
                        <Form.Control type="text" name="LlojiPasaportes" required 
                        placeholder="LlojiPasaportes"/>
                    </Form.Group>

                    <Form.Group controlId="DataSkadences">
                        <Form.Label>DataSkadences</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataSkadences"
                        required
                        placeholder="Data e Skadences"
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="NumriIdentifikues">
                        <Form.Label>NumriIdentifikues</Form.Label>
                        <Form.Control 
                        type="text"
                        name="NumriIdentifikues"
                        required
                        placeholder="Numri Identifikues"
                        />
                    </Form.Group>

                 
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto Personin me pasaporte
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            {/* <Col sm={6}>
                <Image width="200px" height="200px" src={this.imagesrc}/>
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