import React, { useState } from 'react'
import { Button, Input } from '../Components'

const PForm = () => {

  const [currentPwd, setCurrentPwd] = useState("")
  const [newPwd, setNewPwd] = useState("")
  const [confirmNewPwd, setConfirmNewPwd] = useState("")


   const addDetails = (e) =>{
    e.preventDefault()
    let acctData= {
      currentPwd: currentPwd,
      newPwd : newPwd,
      confirmNewPwd : confirmNewPwd,
    }
    console.log(acctData)
    setCurrentPwd("")
    setNewPwd("")
    setConfirmNewPwd("")

   }

  return (
    <form onSubmit={addDetails} className=' w-full h-full flex flex-col gap-6 items-start'>
      <Input
        id={"currentPwd"}
        label={"Current Password"}
        autoComplete={`off`}
        type="password"
        className={` w-full lg:w-3/5 `}
        inputFunc= {(e)=>setCurrentPwd(e.target.value)}
        value={currentPwd}
      />
        <Input
          id={"newPwd"}
          label={"New Password"}
          autoComplete={`off`}
          type="password"
          className={` w-full lg:w-3/5 `}
          inputFunc= {(e)=>setNewPwd(e.target.value)}
          value={newPwd}
        />
        <Input
          id={"confirmNewPwd"}
          label={"Confirm Password"}
          autoComplete={`off`}
          type="password"
          className={`  w-full lg:w-3/5`}
          inputFunc= {(e)=>setConfirmNewPwd(e.target.value)}
          value={confirmNewPwd}
        />
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

export default PForm