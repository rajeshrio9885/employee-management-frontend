import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Entry = () => {
  const [employes,setEmployes]= useState([])
  const [i,setI]=useState(0)
  const navigate = useNavigate()
  const getAllEmployee = async()=>{
    try {
      const response = await fetch("http://localhost:8080/api/getEmployee")
      if(!(response.ok)){
        throw new Error(data.error || "Something went wrong")
      }
      const data = await response.json()
      setEmployes(data)
    } catch (error) {
      throw error
    }
  }
  const deleteEmployee = async(id)=>{
    try {
      const response = await fetch(`http://localhost:8080/api/deleteEmployee/${id}`,{
        method:"DELETE"
      })
      const data = await response.json()
      if(!(response.ok)){
        throw new Error(data.error || "Something went wrong")
      }
    } catch (error) {
      throw error
    }
  }
  useEffect(()=>{
    setTimeout(()=>{
      getAllEmployee()
    },5000)
  },[i])
  const updateEmployee = (id)=>{
    navigate(`/update/${id}`)
  }
  if(employes.length == 0){
    return <div className='mt-10'>
            <h1 className='font-bold text-base sm:text-2xl mt-1'>List of Employees</h1>
            <Link to={"/employee"} className='bg-blue-700 text-[12px] font-semibold my-1 sm:text-sm rounded text-white p-1'>Add Employee</Link>
            <p className='text-center mt-14 font-bold text-xl'>No employee details added yet!!!</p>
            </div>
    
  }
  return (
    <div className='mt-10'>
        <div>
            <h1 className='font-bold text-base sm:text-2xl mt-1'>List of Employees</h1>
            <Link to={"/employee"} className='bg-blue-700 text-[12px] font-semibold my-1 sm:text-sm rounded text-white p-1'>Add Employee</Link>
        </div>
        <table className='text-[8px] sm:text-xl border border-1 mt-2 border-black '>
            <thead>
              <tr>
                <th className='border bg-white border-1 border-black'>Employee Id</th>
                <th className='border bg-white border-1 border-1 border-black'>Employee Name</th>
                <th className='border bg-white border-1 border-1 border-black'>Employee Email</th>
                <th className='border bg-white border-1  border-1 border-black'>Employee Phone No</th>
                <th className='border bg-white border-1 border-1 border-black'>Action</th>
              </tr>
            </thead>

            <tbody>
              {employes.map(empl=>
               <tr className='font-medium' key={empl.id}>
                  <td className='text-center border border-1 border-black'>{empl.id}</td>
                  <td className='text-center border border-1 border-black'>{empl.employeeName}</td>
                  <td className='text-center border border-1 sm:px-8 border-black'>{empl.email}</td>
                  <td className='text-center border border-1 border-black'>{empl.phoneNo}</td>
                  <td className='text-center border border-1 sm:px-8 sm:py-2 border-black'><button onClick={()=>updateEmployee(empl.id)} className='bg-blue-500 p-1 font-bold rounded-md mb-1 lg:mb-0 lg:mr-2'>Update</button><button  onClick={()=>{deleteEmployee(empl.id);setI((pre)=>(pre+1))}} className='bg-red-500 rounded-md p-[4.5px] px-[5.5px] font-bold'>Delete</button></td>
                </tr>
              )}
            </tbody>
        </table>


    </div>
  )
}

export default Entry