import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddSigurimiAutomjetit extends Component{
    constructor(props){
        super(props);
        this.state={lej:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    componentDidMount(){
        fetch('https://localhost:44357/api/SigurimiAutomjetit')
        .then(response=>response.json())
        .then(data=>{
            this.setState({lej:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/SigurimiAutomjetit',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                KerriId:null,
                LlojiMakines:event.target.LlojiMakines.value,
                Marka:event.target.Marka.value,
                FuqiaMotorike:event.target.FuqiaMotorike.value,
                VitiProdhimit:event.target.VitiProdhimit.value,
                LlojiSigurimit:event.target.LlojiSigurimit.value,
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
            Shto Sigurim te automjetit
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="LlojiMakines">
                        <Form.Label>LlojiMakines</Form.Label>
                        <Form.Control type="text" name="LlojiMakines" required 
                        placeholder="LlojiMakines"/>
                    </Form.Group>

                    <Form.Group controlId="Marka">
                        <Form.Label>Marka</Form.Label>
                        <Form.Control type="text" name="Marka" required 
                        placeholder="Marka"/>
                    </Form.Group>

                    <Form.Group controlId="FuqiaMotorike">
                        <Form.Label>FuqiaMotorike</Form.Label>
                        <Form.Control type="text" name="v" required 
                        placeholder="FuqiaMotorike"/>
                    </Form.Group>
                    
                    <Form.Group controlId="VitiProdhimit">
                        <Form.Label>VitiProdhimit</Form.Label>
                        <Form.Control type="date" name="VitiProdhimit" required 
                        placeholder="VitiProdhimit"/>
                    </Form.Group>



                    
                    <Form.Group controlId="LlojiSigurimit">
                        <Form.Label>LlojiSigurimit</Form.Label>
                        <Form.Control 
                        type="text"
                        name="LlojiSigurimit"
                        required
                        placeholder="LlojiSigurimit"
                        />
                    
                        
                    </Form.Group>
                  
                    
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto Regjistrim te automjetit
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
{/* 
            <Col sm={6}>
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