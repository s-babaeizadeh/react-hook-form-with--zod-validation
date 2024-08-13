import React, { useState } from 'react'

const App = () => {
  const[email.setEmail] = useState("");
  const[password,setPassword]= useState("");
  const[errors,setErrors]= useState<{email:string, password:string}>({
    email:"",
    password:""
  })
  return (
    <div>App</div>
  )
}

export default App