import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditSubvencioneteBizneseveModal extends Component{
    constructor(props){
        super(props);
        this.state={lej:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/SubvencioneteBizneseve')
        .then(response=>response.json())
        .then(data=>{
            this.setState({lej:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/SubvencioneteBizneseve',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                BiznesiId:event.target.BiznesiId.value,
                EmriPronarit:event.target.EmriPronarit.value,
                EmriBiznesit:event.target.EmriBiznesit.value,
                NumriPuntorve:event.target.NumriPuntorve.value,
                GjirollogariaBankare:event.target.GjirollogariaBankare.value,
                StatusiSubvencionit:event.target.StatusiSubvencionit.value,

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
           Edit Personin me Leternjoftim
        </Modal.Title></centered> 
    </Modal.Header>
    <Modal.Body>
               
    <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="EmriPronarit">
                        <Form.Label>Emri i pronarit</Form.Label>
                        <Form.Control type="text" name="EmriPronarit" required 
                        placeholder="EmriPronarit"/>
                    </Form.Group>

                    <Form.Group controlId="EmriBiznesit">
                        <Form.Label>EmriBiznesit</Form.Label>
                        <Form.Control type="text" name="EmriBiznesit" required 
                        placeholder="EmriBiznesit"/>
                    </Form.Group>

                    <Form.Group controlId="NumriPuntorve">
                        <Form.Label>NumriPuntorve</Form.Label>
                        <Form.Control 
                        type="text"
                        name="NumriPuntorve"
                        required
                        placeholder="NumriPuntorve"
                        />
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

                    <Form.Group controlId="StatusiSubvencionit">
                        <Form.Label>StatusiSubvencionit</Form.Label>
                        <Form.Control 
                        type="Text"
                        name="StatusiSubvencionit"
                        required
                        placeholder="StatusiSubvencionit"
                        />
                    </Form.Group>
               

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Edito Subvencion
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