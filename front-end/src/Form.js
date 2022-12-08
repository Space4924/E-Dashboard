import React, { useEffect } from 'react'
import { useState } from 'react'
import { FormGroup, FormControl, Button, Typography, InputLabel, styled, Input } from '@mui/material'
import { useNavigate } from 'react-router-dom';




const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&> div{
  margin:20px
}
`



const Form = () => {
  const Navigate = useNavigate();

  const [name, setName] = useState("");
  const [_class, setClass] = useState("");


  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      Navigate('/');
    }
  })


  const addUserDetails = async () => {
    let result = await fetch('http://localhost:5000/signin', {
      method: 'post',
      body: JSON.stringify({ name, _class }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    Navigate("/product");

  }
  return (
    <Container>
      <Typography variant='h4'>SignIn</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => setName(e.target.value)} name="Name" />
      </FormControl>
      <FormControl>
        <InputLabel>Class</InputLabel>
        <Input onChange={(e) => setClass(e.target.value)} name="Class" />
      </FormControl>


      <FormControl>
        <Button variant='contained' onClick={() => addUserDetails()}>Sign In</Button>
      </FormControl>
    </Container>
  );
}

export default Form