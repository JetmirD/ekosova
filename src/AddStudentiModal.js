import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddStudentiModal extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/Studenti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/Studenti',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StudentiId:null,
                Emri:event.target.Emri.value,
                Fakulteti:event.target.Fakulteti.value,
                GjirollogariaBankare:event.target.GjirollogariaBankare.value,
                Drejtimi:event.target.Drejtimi.value,
                NiveliAkademik:event.target.NiveliAkademik.value,
                DataPranimit:event.target.DataPranimit.value,
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
            Shto Student
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Emri">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="Emri" required 
                        placeholder="Emri"/>
                    </Form.Group>

                    <Form.Group controlId="Fakulteti">
                        <Form.Label>Fakulteti</Form.Label>
                        <Form.Control type="text" name="Fakulteti" required 
                        placeholder="Fakulteti"/>
                    </Form.Group>

                    <Form.Group controlId="GjirollogariaBankare">
                        <Form.Label>GjirollogariaBankare</Form.Label>
                        <Form.Control 
                        type="text"
                        name="GjirollogariaBankare"
                        required
                        placeholder="GjirollogariaBankare"
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="Drejtimi">
                        <Form.Label>Drejtimi</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Drejtimi"
                        required
                        placeholder="Drejtimi"
                        />
                    </Form.Group>

                    <Form.Group controlId="NiveliAkademik">
                        <Form.Label>NiveliAkademik</Form.Label>
                        <Form.Control 
                        type="date"
                        name="NiveliAkademik"
                        required
                        placeholder="NiveliAkademik"
                        />
                    </Form.Group>
                    <Form.Group controlId="DataPranimit">
                        <Form.Label>DataPranimit</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataPranimit"
                        required
                        placeholder="DataPranimit"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto Student
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