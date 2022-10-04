import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddArtikullModal extends Component{
    constructor(props){
        super(props);
        this.state={art:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/BlogPosts')
        .then(response=>response.json())
        .then(data=>{
            this.setState({pas:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/BlogPosts',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                blogID:null,
                Titulli:event.target.Titulli.value,
                LlojiPasaportes:event.target.LlojiPasaportes.value,
                slug:event.target.slug.value,
                Kontenti:event.target.Kontenti.value,
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
            Shtoni Artikullin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Titulli">
                        <Form.Label>Titulli i Artikullit</Form.Label>
                        <Form.Control type="text" name="Titulli" required 
                        placeholder="Titulli"/>
                    </Form.Group>

                    <Form.Group controlId="slug">
                        <Form.Label>Slug i artikullit</Form.Label>
                        <Form.Control type="text" name="slug" required 
                        placeholder="slug"/>
                    </Form.Group>

                    <Form.Group controlId="Kontenti">
                        <Form.Label>Content i Artikullit</Form.Label>
                        <Form.Control 
                        type="textarea"
                        name="Kontenti"
                        required
                        placeholder="Kontenti"
                        />
                    </Form.Group>

                 
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shtoni Artikullin
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