import React from "react";
import { FaAdn, FaBeer, FaCreativeCommons, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Create from "../components/create";
import Edit from "../components/edit";

function Home(){
return(
<div><h1>Dashboard</h1>
<Create/>
<div>
    <form>
        <table className="style-table">
            <thead>
            <tr >
               <th className="id">Id</th>
               <th className="todo">Todo</th>
               <th className="status">Status</th>
               <th className="ch">Change</th>
            </tr>
            <tbody className="style-tablebody">
                <tr>
                    <td className="id">1</td>
                    <td className="todo">Cooking</td>
                    <td className="status">Pending</td>
                    <td className="ch" style={{display:'flex'}}>
                        <FaEye style={{padding:10}}/><FaTrash style={{padding:10}}/><div style={{padding:10}}><Edit/></div></td>
                </tr>
                <tr>
                    <td className="id">2</td>
                    <td className="todo">Reading Books</td>
                    <td className="status">Pending</td>
                    <td className="ch" style={{display:'flex'}}>
                        <FaEye style={{padding:10}}/><FaTrash style={{padding:10}}/><div style={{padding:10}}><Edit/></div></td>
                </tr>
            </tbody>
            </thead>
        </table>
   
       
    </form>
</div>
</div>

)
}

export default Home;