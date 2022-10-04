import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddPunetoretSPModal extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/PunetoretSP')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/PunetoretSP',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ID:null,
                Emri:event.target.Emri.value,
                DataFillimit:event.target.DataFillimit.value,
                VendiPunes:event.target.VendiPunes.value,
                Rroga:event.target.Rroga.value,
                Sektori:event.target.Sektori.value,
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
            Shto Punetor te Sektorit Publik
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

                    <Form.Group controlId="DataFillimit">
                        <Form.Label>DataFillimit</Form.Label>
                        <Form.Control type="date" name="DataFillimit" required 
                        placeholder="Data e Fillimit"/>
                    </Form.Group>

                    <Form.Group controlId="VendiPunes">
                        <Form.Label>VendiPunes</Form.Label>
                        <Form.Control 
                        type="text"
                        name="VendiPunes"
                        required
                        placeholder="Vendi Punes"
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="Rroga">
                        <Form.Label>Rroga</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Rroga"
                        required
                        placeholder="Rroga"
                        />
                    </Form.Group>

                    <Form.Group controlId="Sektori">
                        <Form.Label>Sektori</Form.Label>
                        <Form.Control 
                        type="date"
                        name="Sektori"
                        required
                        placeholder="Sektori"
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