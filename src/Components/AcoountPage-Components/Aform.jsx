import React, { useState } from 'react'
import { Button, Input, Select } from '../Components'

const Aform = () => {

  const [fullName, setFullName] = useState("")
  const [DOB, setDOB] = useState("")
  const [gender, setGender] = useState("")
  const [race, setRace] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")


  const races = [
    { value: 'default', label: 'Race*' },
    { value: 'Black/African', label: 'Black/African' },
    { value: ' Hispanic', label: 'Hispanic' },
    { value: 'White', label: 'White' },
  ];



     const handleSelectChange = (e, name)=>{
     setRace({
       ...race,
       [name]: e.target.value
     })
   }

   const addDetails = (e) =>{
    e.preventDefault()
    let acctData= {
      fullName: fullName,
      DOB : DOB,
      gender : gender,
      race : race.race,
      emailId : email,
      phoneNo : phone
    }
    console.log(acctData)
    setFullName("")
    setDOB("")
    setGender("")
    setEmail("")
    setPhone("")
    
   }

  return (
    <form onSubmit={addDetails} className=' w-full h-fit flex flex-col gap-6 items-start'>
      <Input
        id={"fullName"}
        label={"Full Name"}
        autoComplete={`on`}
        type="text"
        className={` w-full `}
        inputFunc= {(e)=>setFullName(e.target.value)}
        value={fullName}
      />
      <div className=" w-full h-full flex flex-col sm:gap-2.5 lg:gap-5 md:flex-row gap-5">
        <Input
          id={"DOB"}
          label={"Date Of Birth"}
          autoComplete={`off`}
          type="date"
          className={` w-full `}
          inputFunc= {(e)=>setDOB(e.target.value)}
          value={DOB}
        />

        <Input
          id={"gender"}
          label={"Gender"}
          autoComplete={`off`}
          type="text"
          className={` w-full `}
          inputFunc= {(e)=>setGender(e.target.value)}
          value={gender}
        />
        <Select
          className={`select w-full ${ !races && "text-textColor" } `}
          placeholder="Race"
          options={races}
          handleChange={(e)=> handleSelectChange(e, "race")}
          id={`Race`}
          value={race.race}
        />
       
      </div>
      <div className=" w-full h-fit flex flex-col md:flex-row gap-5">
        <Input
          id={"email"}
          label={"Email"}
          autoComplete={`on`}
          type="text"
          className={` w-full `}
          inputFunc= {(e)=>setEmail(e.target.value)}
          value={email}
        />

        <Input
          id={"phoneNo"}
          label={"Phone Number"}
          autoComplete={`one`}
          type="text"
          className={` w-full `}
          inputFunc= {(e)=>setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div className=" w-full h-fit flex items-center justify-center ">
        <Button
          className={` add-btn w-140 text-center rounded-xl `}
          type={`submit`}
          text={`Save`}
        />
      </div>
    </form>
  )
}

export default Aform