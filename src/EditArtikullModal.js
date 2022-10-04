import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditArtikullModal extends Component{
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
            this.setState({art:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/BlogPosts',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                blogID:event.target.blogID.value,
                Titulli:event.target.Titulli.value,
                slug:event.target.slug.value,
                Kontenti:event.target.Kontenti.value,
        
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
           Edito Artikullin
        </Modal.Title></centered> 
    </Modal.Header>
    <Modal.Body>
    
        <Row >
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="blogID">
                        <Form.Label>Blog ID</Form.Label>
                        <Form.Control type="text" name="blogID" required 
                        placeholder="Blog ID"
                        disabled
                        defaultValue={this.props.artid}/>
                    </Form.Group>

                    <Form.Group controlId="Titulli">
                        <Form.Label>Titulli</Form.Label>
                        <Form.Control type="text" name="Titulli" required 
                        defaultValue={this.props.artname}
                        placeholder="Titulli"/>
                    </Form.Group>

                    <Form.Group controlId="slug">
                        <Form.Label>Slug</Form.Label>
                        <Form.Control type="text" name="slug" required 
                        defaultValue={this.props.artslug}
                        placeholder="slug"/>
                    </Form.Group>

                    <Form.Group controlId="Kontenti">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" name="Kontenti" required 
                        defaultValue={this.props.artcontent}
                        placeholder="Kontenti"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Ndrysho
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

           
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