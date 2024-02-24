import React, { useState } from 'react'

function State() {

    const [name,setname]=useState("Mamoon")
  return (
    <div>
        <h1>{name}</h1>
      <button onClick={()=>setname("Muhammad Mamoon")}>Change Me</button>
    </div>
  )
}

export default State
