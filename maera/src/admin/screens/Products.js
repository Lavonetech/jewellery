import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  
  useTheme,
  
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Spinner } from "react-bootstrap";

function Products() {
  const [product, setProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState("Products not found. Try again");
  const [successMessage,setSuccessMessage]=useState("");
  const theme=useTheme()
  const columns: GridColDef[] = [
    
    {
      field: "image",
      headerName: "Product Image",
      width: 150,
      renderCell: (params) => (
        <img
        src={`http://localhost:5003/${params.value}`}
        alt={params.row.image}
        style={{ width: "80px", height: "120px",margin:'5px 0 5px 0',border:'0.5px #FF7070 solid' }}
      />
      ),
    
    },
    {
      field: "product",
      headerName: "Product name",
      width: 200,
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },

    {
      field: "description",
      headerName: "Description",
      width: 300,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      width: 200,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button  style={{ width: "4rem",backgroundColor:'#ffe69c',color:'#000' }}><Link to={`/edit/${params.id}`}>Edit</Link></Button>
          
  
          <Button
            onClick={() => handleDelete(params.id)}
            style={{  color:'#fff',border:'1px solid #FF7070',backgroundColor:'#FF7070' }}
            variant="outlined" startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5003/delete/${itemId}`);

      if (response) {
        const updatedProduct=product.filter((p)=>p.id !==itemId) //refreshing products after deleted
        setProduct(updatedProduct);
        setTimeout(()=>{
          setSuccessMessage("")
        },3000)
        setSuccessMessage("Product deleted successfuly")
        console.log("product deleted successfuly");
      } else {
        console.log("product not found");
      }
    } catch (err) {
      console.log("500 server error", err);
    }
  };


  // const handleEdit = (itemId) => {
  //   try{
  //     const response=axios.put(`http://localhsot:5003/update/${itemId}`)
  //     if(response.status===200){
  //     const updatedProduct=product.filter((p)=>p.id!==itemId)
  //     setProduct(updatedProduct);
  //     }else{
  //       console.log("Product not found")
  //     }
  //     console.log(`Edit button clicked for ID: ${itemId}`);
  //   }catch(err){
  //   console.log("500 server error",err)
  //   }
    
  // };

  

  

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5003/getproduct");
        if (response.data) {
          console.log("success");

          const formattedData = response.data;
          const products = formattedData.formattedProduct.map((product) => ({
            id: product.id,
            image:product.image,
            product: product.name,
            category:product.category,
            description: product.description,
          }));
          setProduct(products);
          // console.log(products);
        }
      } catch (err) {
        console.log("Products not found", err);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      {successMessage && 
      <>
      <div className="alert alert-primary mb-3" style={{width:'50%',margin:'0 auto'}} role="alert">
        {successMessage}
      
      </div>  
      <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning"/> <span>Please wait...</span></div>
      </>
      }
      <Box backgroundColor={theme.palette.background.alt} sx={{ height: 600, width: "90%", margin: "0 auto" }}>
        <DataGrid
          rows={product}
          columns={columns}
          pageSize={6}
          checkboxSelection
          disableRowSelectionOnClick
          rowHeight={60} 
        />
      </Box>
    </div>
  );
}

export default Products;
