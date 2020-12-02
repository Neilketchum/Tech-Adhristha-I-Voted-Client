import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';
import "./Dashboard.css"

import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
import MyPolls from './MyPolls';

export default function Dashboard() {
    const auth = useSelector(state => state.auth)
    const addPoll = () => {
        setpollform(true)
    }
    const [pollform, setpollform] = useState(false)
    const [title, settitle] = useState("Stdent-Elctions")
    const [pos1, setpos1] = useState("pos1")
    const [pos2, setpos2] = useState("pos2")
    const [pos3, setpos3] = useState("pos3")
    const [pos4, setpos4] = useState("pos4")
    const [can1pos1, setcan1pos1] = useState("1")
    const [can2pos1, setcan2pos1] = useState("2")
    const [can3pos1, setcan3pos1] = useState("3")
    const [can1pos2, setcan1pos2] = useState("1")
    const [can2pos2, setcan2pos2] = useState("2")
    const [can3pos2, setcan3pos2] = useState("3")
    const [can1pos3, setcan1pos3] = useState("1")
    const [can2pos3, setcan2pos3] = useState("2")
    const [can3pos3, setcan3pos3] = useState("3")
    const [can1pos4, setcan1pos4] = useState("1")
    const [can2pos4, setcan2pos4] = useState("2")
    const [can3pos4, setcan3pos4] = useState("3")

    const [voter, setvoter] = useState(0)
    const [inputFields, setInputFields] = useState([
        {  email: '', name: '',year:"" },
    ]);
    
  

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  name: '', email: '',year:'' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
    
  const handleSubmit =  async(e) => {
    console.log("hi")
  e.preventDefault();
  const body = {
      title:title,
      positions:[
          {
              name:pos1,
              candidates:[
                 { name:can1pos1},
                 { name:can2pos1},
                 { name:can3pos1},
                 
              ]
          },
          {
              name:pos2,
              candidates:[
                { name:can1pos2},
                { name:can2pos2},
                { name:can3pos2},
              ]
          },{
              name:pos3,
              candidates:[
                { name:can1pos3},
                { name:can2pos3},
                { name:can3pos3},
              ]
          },{
              name:pos4,
              candidates:[
                { name:can1pos3},
                 { name:can2pos3},
                 { name:can3pos3},
              ]
          }
      ],
      voters:inputFields
  }
  console.log("helo")
  const res = await  Axios.post('http://localhost:8080/api/add_poll',body,{headers:{
      "auth-token":auth.authToken
  }})
  setpollform(false)
//   fetchPolls()
};
const fetchPolls = async ()=>{
    
    
}
    return (
        <div>
            {auth.authToken ? <div>
                <AppBar position="static">
                    <Toolbar className="home__appbar">
                        <Typography variant="h6" >
                            Cloud Elections
                    </Typography>
                        <Button color="inherit">Dashboard</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    {pollform ? <div>
                        <form className="dashForm" onSubmit = {handleSubmit} >
                            <Input placeholder="Title" value={title} onChange = {e=>settitle(e.target.value)} className="dashForm__title" />
                            <div className="vp">
                                <Input placeholder="Position Name" value={pos1} onChange={e => setpos1(e.target.value)} />
                                <Input placeholder="Candidate One" value={can1pos1} onChange={e => setcan1pos1(e.target.value)} />
                                <Input placeholder="Candidate Two" value={can2pos1} onChange={e => setcan2pos1(e.target.value)} />
                                <Input placeholder="Candidate Three" value={can3pos1} onChange={e => setcan3pos1(e.target.value)} />
                            </div>
                            <div className="gsec">
                                <Input placeholder="Position Name" value={pos2} onChange={e => setpos2(e.target.value)} />
                                <Input placeholder="Candidate One" value={can1pos2} onChange={e => setcan1pos2(e.target.value)} />
                                <Input placeholder="Candidate Two" value={can2pos2} onChange={e => setcan2pos2(e.target.value)} />
                                <Input placeholder="Candidate Three" value={can3pos2} onChange={e => setcan3pos2(e.target.value)} />
                            </div>
                            <div className="csec">
                                <Input placeholder="Position Name" value={pos3} onChange={e => setpos3(e.target.value)} />
                                <Input placeholder="Candidate One" value={can1pos3} onChange={e => setcan1pos3(e.target.value)} />
                                <Input placeholder="Candidate Two" value={can2pos3} onChange={e => setcan2pos3(e.target.value)} />
                                <Input placeholder="Candidate Three" value={can3pos3} onChange={e => setcan3pos3(e.target.value)} />
                            </div>
                            <div className="sport">
                                <Input placeholder="Position Name" value={pos4} onChange={e => setpos4(e.target.value)} />
                                <Input placeholder="Candidate One" value={can1pos4} onChange={e => setcan1pos4(e.target.value)} />
                                <Input placeholder="Candidate Two" value={can2pos4} onChange={e => setcan2pos4(e.target.value)} />
                                <Input placeholder="Candidate Three" value={can3pos4} onChange={e => setcan3pos4(e.target.value)} />
                            </div>
                            <h3>Voter Details</h3>
                            {inputFields.map(inputField => (
                                <div key={inputField.id}>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        variant="filled"
                                        placeholder = "Email"
                                        value={inputField.firstName}
                                        onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    <TextField
                                        name="name"
                                        label="Name"
                                        variant="filled"
                                        value={inputField.lastName}
                                        onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    <TextField
                                        name="year"
                                        label="Year"
                                        variant="filled"
                                        value={inputField.year}
                                        onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={handleAddFields}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </div>
                            ))}
                            <Button variant="contained" type = "submit" color="secondary">Submit</Button>

                        </form>

                    </div> : <div>
                            <h1>{<AddCircleOutlineIcon onClick={addPoll} />} Add Poll</h1>



                        </div>}

                </div>
                <h1>My Votes</h1>
                <div>
                      {<MyPolls id = {auth.authToken}/> } 
                </div>

            </div> :
                <div>
                    Login to Continue
            </div>



            }
        </div>
    )
}
