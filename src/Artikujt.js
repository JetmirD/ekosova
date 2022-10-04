import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddArtikullModal} from './AddArtikullModal';
import {EditArtikullModal} from './EditArtikullModal';

export class Artikujt extends Component{

    state= {
        loading:true,
        person:null,
        art:[],
        addModalShow:false, 
        editModalShow:false
    };



async componentDidMount(){
    const url ="https://localhost:44357/api/BlogPosts";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({art:data, loading:false});
    
}
deleteArt(artid){
    if(window.confirm('Are you sure?')){
        fetch('https://localhost:44357/api/BlogPosts'+artid,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type':'application/json'}
        })
    }
}

render(){
const {arts, artid,artname,artslug,artcontent}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Blog ID</th>
                        <th>Titulli</th>
                        <th>Slug</th>
                        <th>Kontenti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arts.map(art=>
                            <tr key={art.blogID}>
                                <td>{art.Titulli}</td>
                                <td>{art.slug}</td>
                                <td>{art.Kontenti}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="primary"
    onClick={()=>this.setState({editModalShow:true,
        artid:art.blogID,artname:art.Titulli,artslug:art.slug,
        artcontent:art.Kontenti})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteEmp(art.blogID)}>
            Delete
        </Button>

        <EditArtikullModal show={this.state.editModalShow}
        onHide={editModalClose}
        artid={artid}
        artname={artname}
        artslug={artslug}
        artcontent={artcontent}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='success'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Shtoni Artikullin</Button>
                            
                        <AddArtikullModal show={this.state.addModalShow}
                        onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }



}

