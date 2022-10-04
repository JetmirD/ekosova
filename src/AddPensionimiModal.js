import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddPensionimiModal extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/Pensionet')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/Pensionet',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PensionetId:null,
                EmriTePensionuarit:event.target.EmriTePensionuarit.value,
                DataFillimit:event.target.DataFillimit.value,
                LlojiPensionimit:event.target.LlojiPensionimit.value,
                PensioniMujor:event.target.PensioniMujor.value,
                NumriIdentifikues:event.target.NumriIdentifikues.value
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
            Shto Pensionist
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="EmriTePensionuarit">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="EmriTePensionuarit" required 
                        placeholder="EmriTePensionuarit"/>
                    </Form.Group>

                    <Form.Group controlId="DataFillimit">
                        <Form.Label>Data e Fillimit</Form.Label>
                        <Form.Control type="date" name="DataFillimit" required 
                        placeholder="DataFillimit"/>
                    </Form.Group>

                    <Form.Group controlId="LlojiPensionimit">
                        <Form.Label>Lloji i Pensionimit</Form.Label>
                        <Form.Control 
                        type="text"
                        name="LlojiPensionimit"
                        required
                        placeholder="Lloji i Pensionimit"
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="PensioniMujor">
                        <Form.Label>Pensioni Mujor</Form.Label>
                        <Form.Control 
                        type="text"
                        name="PensioniMujor"
                        required
                        placeholder="PensioniMujor"
                        />
                    </Form.Group>

                    <Form.Group controlId="NumriIdentifikues">
                        <Form.Label>Numri Identifikues</Form.Label>
                        <Form.Control 
                        type="text"
                        name="NumriIdentifikues"
                        required
                        placeholder="NumriIdentifikues"
                        />
                    </Form.Group>
                 

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto Pensionistin
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