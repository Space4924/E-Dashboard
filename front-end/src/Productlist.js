import React from 'react'
import './App.css'
import {Input} from '@mui/material'
import { useEffect, useState } from 'react'
// import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import {Link }from 'react-router-dom'
import { Table, TableHead, TableBody, TableRow, TableCell,Button,Typography } from '@mui/material'
// import { response } from 'express';


const Productlist = () => {

    const button={
        "margin":"10px",
        "color":"white"
    }

    const [clue,setClue]=useState([]);
    
    // const [search,setSearch]=useState("");
    const getProduct = async () => {
        let answer = await fetch("http://localhost:5000/products");
        answer = await answer.json();
        // console.log(answer);
        setClue(answer);
    }
    useEffect(() => {
        getProduct();
    }, []);
   const Delete=async(Id)=>{
    alert("Want to Delete It");
        await fetch(`http://localhost:5000/product/${Id}`,{
        method:"delete"});
        getProduct(); 
   }
   
  const Change=async(e)=>{
    
     let key=e.target.value;
     if(key){
     let data=await fetch(`http://localhost:5000/search/${key}`);
     data=await data.json();
     if(data){
        setClue(data);
     }
    }else{
        getProduct();
    }
  }
    return (
        <div className='table'>
        <div className="search">
            <Input placeholder='Search' onChange={Change} /></div>
        <Typography variant='h4' className='table-heading'>Update Product</Typography>

            {/* <Button className='button' variant='contained'><LocationSearchingIcon/></Button> */}
            
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Delete/Update</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        clue.map((ans,index) => 
                            <TableRow key={ans._id}>
                            <TableCell>{index+1}</TableCell>
                                <TableCell>{ans.name}</TableCell>
                                <TableCell>{ans.price}</TableCell>
                                <TableCell>{ans.category}</TableCell>
                                <TableCell>{ans.company}</TableCell>
                                <TableCell ><Button variant='outlined' style={button} ><Link className='update' to={'/update/'+ans._id}>Update</Link></Button><Button style={button} variant='contained' onClick={()=>Delete(ans._id)} >Delete</Button></TableCell>
                                
                            </TableRow>
                        )
                    }
                   
                </TableBody>
            </Table>

        </div>
    )
}

export default Productlist