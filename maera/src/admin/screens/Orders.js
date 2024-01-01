import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function Orders () {
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState("Products not found. Try again");
  const theme=useTheme()

  

  const columns: GridColDef[] = [
    {
      field: "userName",
      headerName: "Username",
      width: 200,
    },
   
    {
      field: "product",
      headerName: "Product Name",
      width: 200,
    },
    {
      field: "category",
      headerName: "Product Category",
      width: 200,
    },

    {
      field: "metal",
      headerName: "Metal",
      width: 100,
    },
    {
      field: "stone",
      headerName: "Stone",
      width: 100,
    },
    {
      field: "size",
      headerName: "Size",
      width: 150,
    },
   
    {
      field: "message",
      headerName: "Customer Message",
      width:300,
      wrap: true,
    },
   
  ];

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get("http://63.250.47.54:5003/getorders");
        console.log(response.data)
        if (response.status===201) {

          const object= response.data;
          const orders = object.findOrders.map((order) => ({
            id: order._id,
            product:order.product,
            category:order.category,
            userName:order.userName,
            metal: order.metal,
            stone: order.stone,
            size:order.size,
            message:order.message
          }));
          setOrders(orders);
          // console.log(products);
        }
      } catch (err) {
        console.log("Products not found", err);
      }
    };
    getOrders();
  }, []);
  return (
    <div><Box backgroundColor={theme.palette.background.alt} sx={{ height: 600, width: "100%",margin:"0 auto" }}>
    <DataGrid
      rows={orders}
      columns={columns}
      pageSize={6}
      checkboxSelection
      disableRowSelectionOnClick
      rowHeight={60} 
    />
  </Box></div>
  )
}

export default Orders;