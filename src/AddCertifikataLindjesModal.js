import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddCertifikataLindjesModal extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/CertifikataLindjes')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/CertifikataLindjes',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                CertifikimiID:null,
                EmriPersonit:event.target.EmriPersonit.value,
                EmriPrindit:event.target.EmriPrindit.value,
                MbiemriPersonit:event.target.MbiemriPersonit.value,
                Vendlindja:event.target.Vendlindja.value,
                DataLindjes:event.target.DataLindjes.value,
                StatusiMartesor:event.target.StatusiMartesor.value,
                Shtetesia:event.target.Shtetesia.value,
                NumriPersonal:event.target.NumriPersonal.value,
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
    
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Shto Person me Certifikate te Lindjes
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="EmriPersonit">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="EmriPersonit" required 
                        placeholder="EmriPersonit"/>
                    </Form.Group>

                    <Form.Group controlId="EmriPrindit">
                        <Form.Label>EmriPrindit</Form.Label>
                        <Form.Control type="date" name="EmriPrindit" required 
                        placeholder="Emri i Prindit"/>
                    </Form.Group>

                    <Form.Group controlId="MbiemriPersonit">
                        <Form.Label>Mbiemri i Personit</Form.Label>
                        <Form.Control 
                        type="text"
                        name="MbiemriPersonit"
                        required
                        placeholder="MbiemriPersonit"
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="Vendlindja">
                        <Form.Label>Vendlindja</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Vendlindja"
                        required
                        placeholder="Vendlindja"
                        />
                    </Form.Group>

                    <Form.Group controlId="DataLindjes">
                        <Form.Label>DataLindjes</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataLindjes"
                        required
                        placeholder="DataLindjes"
                        />
                    </Form.Group>
                    <Form.Group controlId="StatusiMartesor">
                        <Form.Label>StatusiMartesor</Form.Label>
                        <Form.Control 
                        type="date"
                        name="StatusiMartesor"
                        required
                        placeholder="StatusiMartesor"
                        />
                    </Form.Group>
                    <Form.Group controlId="Shtetesia">
                        <Form.Label>Shtetesia</Form.Label>
                        <Form.Control 
                        type="date"
                        name="Shtetesia"
                        required
                        placeholder="Shtetesia"
                        />
                    </Form.Group>
                    <Form.Group controlId="NumriPersonal">
                        <Form.Label>NumriPersonal</Form.Label>
                        <Form.Control 
                        type="date"
                        name="NumriPersonal"
                        required
                        placeholder="NumriPersonal"
                        />
                    </Form.Group>



                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto Certifikate
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