
import React, { useState } from 'react';
import {FaEye,FaAdn,FaTrash,FaEdit} from 'react-icons/fa';
import {Button} from 'react-bootstrap';
import { Modal } from 'reactstrap';

function Edit(){
    const [modalShow,setModalShow] =useState(false);
    return(
        <div>
            <div onClick={()=>setModalShow(!modalShow)}><FaEdit/></div> 
            
               <Modal isOpen={modalShow}>   
     <div> 
        <span onClick={()=>setModalShow(!modalShow)} className="close">x</span>
        <div className="inner">
            <form>
             <h1>Edit Todo </h1>  
                <label>To Do</label>
                <textarea className="todo-content"></textarea>
                <label>Status</label><br/>
                <input className="email" type="text" defaultValue=""/> <br/>
                <button className="create">Create <FaAdn className="Fad"></FaAdn></button>
            </form>
        </div>
    </div> 

 </Modal>   
</div>
)
}
export default Edit;