import React, { useEffect } from 'react'
import { useState } from 'react'
import { FormGroup, FormControl, Button, Typography, InputLabel, styled, Input } from '@mui/material'
import {useNavigate} from 'react-router-dom';




const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&> div{
  margin:20px
}
`
const Login = () => {
  const Navigate=useNavigate();
  const [name, setName] = useState("");
  const [_class, setClass] = useState("");
  const [college, setCollege] = useState("");
  const [address, setAddress] = useState("");


 useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
        Navigate('/');
    }
 },[]);


  const addUserDetails =async() => {
     let result=await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({name,_class,college,address}),
        headers:{
            'Content-Type':'application/json'
        },
     });
     result=await result.json();
     console.log(result);
     console.log("fir ho gya ji");
     localStorage.setItem("user",JSON.stringify(result));
     Navigate('/product')
  }
  return (
    <Container>
      <Typography variant='h4'>LogIn</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => setName(e.target.value)} name="Name" />
      </FormControl>
      <FormControl>
        <InputLabel>Class</InputLabel>
        <Input onChange={(e) => setClass(e.target.value)} name="Class" />
      </FormControl>
      <FormControl>
        <InputLabel>College</InputLabel>
        <Input onChange={(e) => setCollege(e.target.value)} name="College" />
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => setAddress(e.target.value)} name="Address" />
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={() => addUserDetails()}>Log In</Button>
      </FormControl>
    </Container>
  );
}

export default Login