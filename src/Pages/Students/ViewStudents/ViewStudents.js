import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ViewStudentNavigation from './ViewStudentNavigation/ViewStudentNavigation';
import ViewStudentTable from './ViewStudentTable/ViewStudentTable';

const ViewStudents = () => {
     const [studentsInfo,setStudentsInfo] = useState([])
     

     useEffect(()=>{
          fetch('https://radiant-sands-72054.herokuapp.com/students')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setStudentsInfo(data)
          })
     },[])

     return (
          <div>
               <ViewStudentNavigation></ViewStudentNavigation>
               <Divider/>
               <ViewStudentTable studentsInfo={studentsInfo}></ViewStudentTable>
               
          </div>
     );
};

export default ViewStudents;