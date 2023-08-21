import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './App.css';
function App() {

  let [name,setName] = useState("");
  let [contact,setContact] = useState("");
  let [data,setData] =useState([]);

  function addData() {
    setData([...data, {name,contact}]);
    setName("");
    setContact("");
  }


  function removeData(index) {
    data.splice(index,1);
    setData([...data]);

  }

function handle(e) {
    if(e.key==='Enter'){
      addData();
    }
}

  return (
    <div>
        <div className="form">
            <TextField value={name} onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
            <TextField value={contact} onKeyDown={(e)=>handle(e)} onChange={(e)=>setContact(e.target.value)} id="outlined-basic" label="ContactNo" variant="outlined" />
            <Button onClick={addData} variant="outlined"><AddIcon/></Button>
        </div>

        <div className="heading">
            <h1>Name</h1>
            <h1>Contact No</h1>
            <h1>Remove</h1>
        </div>

         {
            data.map((val,index)=>{
              return(
                <div className="field">
                    <h3>{val.name}</h3>
                    <h3>{val.contact}</h3>
                    <Button onClick={()=>(removeData)(index)} variant="contained">Remove</Button>
                </div>
                
              )
            })
         }


    </div>


  )
}

export default App;



