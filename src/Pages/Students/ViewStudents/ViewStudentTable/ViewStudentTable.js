import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function ViewStudentTable({studentsInfo}) {

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure to delete this student information?')
    if(proceed){
         fetch(`http://localhost:5000/students/${id}`,{
              method:"DELETE"
         })
         .then(res => res.json())
         .then(data => {
              
              if(data.deletedCount > 0){    
                   alert('Deleted Successfully')
              }
         })
    }
}

    const handleUpdate = id =>{
      fetch(`http://localhost:5000/students/${id}`,{
          method:'PUT',
          headers:{
                "content-type": "application/json",
          },
          body:JSON.stringify(studentsInfo)

      })
      .then(res => res.json())
      .then(data =>{
          if(data.modifiedCount>0){
                alert('Status Updated Successfully')
          }
          console.log(data)
      })
    }
  
  return (
    <>
      <TableContainer component={Paper} sx={{m:3}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">School</TableCell>
              <TableCell align="center">Class</TableCell>
              <TableCell align="center">Division</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                  {studentsInfo.map((student) => (
              <TableRow
                key={student._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{student.stId}</TableCell>
                <TableCell align="center">{student.name}</TableCell>
                <TableCell align="center">{student.age}</TableCell>
                <TableCell align="center">{student.school}</TableCell>
                <TableCell align="center">{student.class}</TableCell>
                <TableCell align="center">{student.division}</TableCell>
                <TableCell align="center">{student.status}</TableCell>
                <TableCell align="center">
                  <Button onClick={()=> handleUpdate(student._id)}>Edit</Button>
                  <Button onClick={() => handleDelete(student._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
      <Stack spacing={2} >
        <Pagination sx={{margin:'auto'}} count={10} variant="outlined" shape="rounded" />
      </Stack>
      <Button variant='contained' sx={{m:2}}>
        <DownloadIcon sx={{mr:1,}}></DownloadIcon>
        Download Excel
      </Button>
      
    </>
  );
}



