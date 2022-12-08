// import React, { useEffect } from 'react'
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



const Feature = () => {
  const Navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addUserDetails = async () => {
    if (!name || !price || !category || !company) {
      setError(true)
      return false;
    }

    // const _id=JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();
    // console.log(result);
    Navigate('/product')
  }

  return (
    <Container>
      <Typography variant='h4'>Add Product</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => setName(e.target.value)} name="Name" />
      </FormControl>
      {error && !name && <span className='validity'>Enter valid Name</span>}
      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input onChange={(e) => setPrice(e.target.value)} name="price" />
      </FormControl>
      {error && !price && <span className='validity'>Enter valid Price</span>}
      <FormControl>
        <InputLabel>category</InputLabel>
        <Input onChange={(e) => setCategory(e.target.value)} name="category" />
      </FormControl>
      {error && !category && <span className='validity'>Enter valid category</span>}
      <FormControl>
        <InputLabel>company</InputLabel>
        <Input onChange={(e) => setCompany(e.target.value)} name="company" />
      </FormControl>
      {error && !company && <span className='validity'>Enter valid company</span>}
      <FormControl>
        <Button variant='contained' onClick={() => addUserDetails()}>Add Product</Button>
      </FormControl>
    </Container>
  );
}

export default Feature