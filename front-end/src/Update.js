// import React, { useEffect } from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { FormGroup, FormControl, Button, Typography, InputLabel, styled, Input } from '@mui/material'
import { useNavigate } from 'react-router-dom';




const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&> div{
  margin:20px
}
`



const Update = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const Navigate=useNavigate();

    const IsStart = async () => {
        let data = await fetch(`http://localhost:5000/find/${params.id}`);
        data=await data.json();
        data.map((item)=>{
            setName(item.name)
            setPrice(item.price)
            setCategory(item.category)
            setCompany(item.company)
        })
    }
    const UpdateItem=async()=>{
        let ans=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,price,category,company})
        });
        ans=await ans.json();
        Navigate('/product')

    }

    useEffect(() => {
        
        IsStart();
    }, [])


    //   const [error, setError] = useState(false);
    return (
        <div> <Container>
            <Typography variant='h4'>Update Product</Typography>

            
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => setName(e.target.value)} value={name} name="Name" />
            </FormControl>
            {/* {error && !name && <span className='validity'>Enter valid Name</span>} */}
            <FormControl>
                <InputLabel>Price</InputLabel>
                <Input onChange={(e) => setPrice(e.target.value)} value={price} name="price" />
            </FormControl>
            {/* {error && !price && <span className='validity'>Enter valid Price</span>} */}
            <FormControl>
                <InputLabel>category</InputLabel>
                <Input onChange={(e) => setCategory(e.target.value)} value={category} name="category" />
            </FormControl>
            {/* {error && !category && <span className='validity'>Enter valid category</span>} */}
            <FormControl>
                <InputLabel>company</InputLabel>
                <Input onChange={(e) => setCompany(e.target.value)} value={company} name="company" />
            </FormControl>
            {/* {error && !company && <span className='validity'>Enter valid company</span>} */}
            <FormControl>
                <Button variant='contained' onClick={()=>UpdateItem()} >Update Done</Button>
            </FormControl>
        </Container></div>
    )
}

export default Update