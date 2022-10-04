import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditSigurimiAutomjetit extends Component{
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
            method:'PUT',
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
           Edit Regjistrimin
        </Modal.Title></centered> 
    </Modal.Header>
    <Modal.Body>
               
    <Row >
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="KerriId">
                        <Form.Label>KerriId</Form.Label>
                        <Form.Control type="text" name="KerriId" required 
                        placeholder="KerriId"
                        disabled
                        defaultValue={this.props.letid}/>
                    </Form.Group>

                    <Form.Group controlId="LlojiMakines">
                        <Form.Label>LlojiMakines</Form.Label>
                        <Form.Control type="text" name="LlojiMakines" required 
                        defaultValue={this.props.letName}
                        placeholder="LlojiMakines"/>
                    </Form.Group>

                    <Form.Group controlId="Marka">
                        <Form.Label>Marka</Form.Label>
                        <Form.Control type="text" name="Marka" required 
                        defaultValue={this.props.datal}
                        placeholder="Marka"/>
                    </Form.Group>

                    <Form.Group controlId="FuqiaMotorike">
                        <Form.Label>FuqiaMotorike</Form.Label>
                        <Form.Control type="text" name="FuqiaMotorike" required 
                        defaultValue={this.props.np}
                        placeholder="FuqiaMotorike"/>
                    </Form.Group>

                    <Form.Group controlId="VitiProdhimit">
                        <Form.Label>VitiProdhimit</Form.Label>
                        <Form.Control type="text" name="VitiProdhimit" required 
                        defaultValue={this.props.vendl}
                        placeholder="VitiProdhimit"/>
                    </Form.Group>

                    <Form.Group controlId="LlojiSigurimit">
                        <Form.Label>LlojiSigurimit</Form.Label>
                        <Form.Control 
                        type="date"
                        name="LlojiSigurimit"
                        required
                        placeholder="Data"
                        defaultValue={this.props.LlojiSigurimit}
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