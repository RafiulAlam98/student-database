import React, { useEffect, useState } from 'react';
import ViewStudentNavigation from './ViewStudentNavigation/ViewStudentNavigation';
import ViewStudentTable from './ViewStudentTable/ViewStudentTable';

const ViewStudents = () => {
     const [studentsInfo,setStudentsInfo] = useState([])

     useEffect(()=>{
          fetch('http://localhost:5000/students')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setStudentsInfo(data)
          })
     },[])

     return (
          <div>
               <ViewStudentNavigation></ViewStudentNavigation>
               <ViewStudentTable studentsInfo={studentsInfo}></ViewStudentTable>
               
          </div>
     );
};

export default ViewStudents;