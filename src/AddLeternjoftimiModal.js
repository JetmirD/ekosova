import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddLeternjoftimiModal extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/Leternjoftimi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/Leternjoftimi',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                LeternjoftimiId:null,
                EmriLeternjoftimMarresit:event.target.EmriLeternjoftimMarresit.value,
                DataLindjes:event.target.DataLindjes.value,
                NumriPersonal:event.target.NumriPersonal.value,
                Vendlindja:event.target.Vendlindja.value,
                DataPranimit:event.target.DataPranimit.value,
                DataSkadences:event.target.DataSkadences.value,
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
            Shto Person me Leternjoftim
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="EmriLeternjoftimMarresit">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="EmriLeternjoftimMarresit" required 
                        placeholder="EmriLeternjoftimMarresit"/>
                    </Form.Group>

                    <Form.Group controlId="DataLindjes">
                        <Form.Label>DataLindjes</Form.Label>
                        <Form.Control type="date" name="DataLindjes" required 
                        placeholder="Data e Lindjes"/>
                    </Form.Group>

                    <Form.Group controlId="NumriPersonal">
                        <Form.Label>NumriPersonal</Form.Label>
                        <Form.Control 
                        type="text"
                        name="NumriPersonal"
                        required
                        placeholder="Numri Personal"
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

                    <Form.Group controlId="DataPranimit">
                        <Form.Label>DataPranimit</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataPranimit"
                        required
                        placeholder="DataPranimit"
                        />
                    </Form.Group>
                    <Form.Group controlId="DataSkadences">
                        <Form.Label>DataSkadences</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataSkadences"
                        required
                        placeholder="DataSkadences"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto gjoben
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