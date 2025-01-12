import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Addemployee = () => {
  const navigate = useNavigate()
  const [employeeDetail,setEmployeeDetail] = useState({})
  const onInputHandle = (e)=>{
    const {name,value} = e.target;
    setEmployeeDetail((pre)=>({...pre,[name]:value}))
  }
  const {id} = useParams()

  const handleSubmit = async(e)=>{ 
    try {
    const employee = employeeDetail
    navigate('/')
    e.preventDefault();
      if(id){
        const response = await fetch(`http://localhost:8080/api/updateEmployee/${id}`,{
          method:"PUT",
          headers : {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            email : employee.email,
            phoneNo:employee.phoneNo
          })
        })
        const data = await response.json()
        if(!(response.ok)){
          throw new Error(data.error || "Something went wrong")
        }
      }else{
      const response = await fetch("http://localhost:8080/api/createEmployee",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(employee)
      })
      const data = await response.json()
      if(!(response.ok)){
        throw new Error(data.error || "Something went wrong")
      }
    }
    } catch (error) {
      console.log(error)
    }
  }
  const title = ()=>{
    if(id){
      return <p className='text-center mb-8 text-xl font-bold'>Update Employee</p>
    }else{
      return <p className='text-center mb-8 text-xl font-bold'>Add Employee</p>
    }
  }
  const fullName = () =>{
    if(id){
      return ""
    }else{
      return  <div className='flex flex-col'>
      <label className='font-semibold text-base' htmlFor="fullName">Full Name</label>
      <input type="text" required name="employeeName" onChange={(e)=>onInputHandle(e)} className='border border-gray-500 indent-1' placeholder='Enter Employee Name'/>
      </div>
    }
  }
  return (
    <div className='mt-16 flex justify-center'>
        <form className='border border-gray-500   lg:w-[60%] p-5' onSubmit={handleSubmit}>
          {title()}
          {fullName()}
          <div className='flex flex-col mt-1'>
          <label className='font-semibold text-base' htmlFor="fullName">Email id</label>
          <input type="email" required name='email'  onChange={(e)=>onInputHandle(e)}  className='border  border-gray-500 indent-1' placeholder='Enter Employee Email Id'/>
          </div>
          <div className='flex flex-col mt-1'>
          <label className='font-semibold text-base' htmlFor="fullName">Phone No</label>
          <input type="number" required name='phoneNo'  onChange={(e)=>onInputHandle(e)}  className='border border-gray-500 indent-1' placeholder='Enter Phone No'/>
          </div>
          <div className='flex justify-center'>
          <button className='bg-green-700 text-sm p-1 mt-4 px-6 font-bold rounded text-white' type='submit'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Addemployee