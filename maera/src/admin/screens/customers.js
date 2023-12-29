import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, useTheme } from "@mui/material";

function Customers () {
   const [users,setUsers]=useState([]);

    const [errorMessage, setErrorMessage] = useState("Products not found. Try again");
    const theme=useTheme()

    const columns: GridColDef[] = [
      {
        field: "firstName",
        headerName: "Firstname",
        width: 200,
      },
  
      {
        field: "lastName",
        headerName: "Lastname",
        width: 200,
      },
      {
        field: "email",
        headerName: "Email",
        width: 300,
      },
      {
        field: "phoneNumber",
        headerName: "Contact Number",
        width: 200,
      },
     
      {
        field: "remarks",
        headerName: "Remarks",
        width: 100,
        renderCell: (params) => (
          <div style={{ display: "flex", gap: "5px" }}>
            <Button  style={{ width: "4rem",backgroundColor:'#ffe69c',color:'#000' }}><Link to={`/edituser/${params.id}`}>Edit</Link></Button>
            
          </div>
        ),
      },
    ];

    useEffect(() => {
        const getUsers = async () => {
          try {
            const response = await axios.get("http://localhost:5003/getusers");
            console.log(response.data)
            if (response.data) {
              console.log("success");
    
              const users = response.data;
              const findUsers = users.findUsers.map((product) => ({
                id: product._id,
                firstName: product.firstName,
                lastName: product.lastName,
                email:product.email,
                phoneNumber:product.phoneNumber
              }));
              setUsers(findUsers);
             
            }
          } catch (err) {
            console.log("Products not found", err);
          }
        };
        getUsers();
      }, []);
    
  return (
    <div> <Box backgroundColor={theme.palette.background.alt} sx={{ height: 600, width: "90%", margin: "0 auto" }}>
    <DataGrid
      rows={users}
      columns={columns}
      pageSize={6}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box></div>
  )
}

export default Customers