import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';



export default function ViewStudentTable({studentsInfo}) {

  const handleDelete = id =>{
    const proceed = window.confirm('Are You sure to remove this product?')
    if(proceed){
         fetch(`http://localhost:5000/students/${id}`,{
              method:"DELETE"
         })
         .then(res => res.json())
         .then(data => {
              
              if(data.deletedCount > 0){    
                   alert('deleted successfully')
              }
         })
    }
}
  
  return (
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
              <Button>Edit</Button>
              <Button onClick={() => handleDelete(student._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}



