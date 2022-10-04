import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditLeternjoftimiModal extends Component{
    constructor(props){
        super(props);
        this.state={lej:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }


    componentDidMount(){
        fetch('https://localhost:44357/api/Leternjoftimi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({lej:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44357/api/Leternjoftimi',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
  
                LeternjoftimiId:event.target.LeternjoftimiId.value,

                EmriLeternjoftimMarresit:event.target.EmriLeternjoftimMarresit.value,
                DataLindjes:event.target.DataLindjes.value,
                NumriPersonal:event.target.NumriPersonal.value,
                Vendlindja:event.target.Vendlindja.value,
                DataPranimit:event.target.DataPranimit.value,
                DataSkadences:event.target.DataSkadences.value,

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
        this.FotoEteDenuarit=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "Photos",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch('https://localhost:44357/api/departamentiPolicia/SaveFile',{
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

             
               

    <Modal.Header closeButton={true}>
    <centered><Modal.Title id="contained-modal-title-vcenter">
           Edit Personin me Leternjoftim
        </Modal.Title></centered> 
    </Modal.Header>
    <Modal.Body>
               
        <Row >
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="LeternjoftimiId">
                        <Form.Label>LeternjoftimiId</Form.Label>
                        <Form.Control type="text" name="LeternjoftimiId" required 
                        placeholder="LeternjoftimiId"
                        disabled
                        defaultValue={this.props.letid}/>
                    </Form.Group>

                    <Form.Group controlId="EmriLeternjoftimMarresit">
                        <Form.Label>EmriLeternjoftimMarresit</Form.Label>
                        <Form.Control type="text" name="EmriLeternjoftimMarresit" required 
                        defaultValue={this.props.letName}
                        placeholder="EmriLeternjoftimMarresit"/>
                    </Form.Group>

                    <Form.Group controlId="DataLindjes">
                        <Form.Label>DataLindjes</Form.Label>
                        <Form.Control type="text" name="DataLindjes" required 
                        defaultValue={this.props.datal}
                        placeholder="DataLindjes"/>
                    </Form.Group>

                    <Form.Group controlId="NumriPersonal">
                        <Form.Label>NumriPersonal</Form.Label>
                        <Form.Control type="text" name="NumriPersonal" required 
                        defaultValue={this.props.np}
                        placeholder="NumriPersonal"/>
                    </Form.Group>

                    <Form.Group controlId="Vendlindja">
                        <Form.Label>Vendlindja</Form.Label>
                        <Form.Control type="text" name="Vendlindja" required 
                        defaultValue={this.props.vendl}
                        placeholder="Vendlindja"/>
                    </Form.Group>

                    <Form.Group controlId="DataPranimit">
                        <Form.Label>DataPranimit</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataPranimit"
                        required
                        placeholder="Data"
                        defaultValue={this.props.DataPranimit}
                        />
                    </Form.Group>

                    <Form.Group controlId="DataPranimit">
                        <Form.Label>DataPranimit</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataPranimit"
                        required
                        placeholder="Data"
                        defaultValue={this.props.dP}
                        />
                    </Form.Group>

                    
                    <Form.Group controlId="DataSkadences">
                        <Form.Label>DataSkadences</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataSkadences"
                        required
                        placeholder="Data"
                        defaultValue={this.props.dS}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Ndrysho
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            {/* <Col sm={6}>
                <Image width="200px" height="200px" 
                src={'https://localhost:44357/api/Policia/SaveFile'+this.props.FotoEteDenuarit}/>
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