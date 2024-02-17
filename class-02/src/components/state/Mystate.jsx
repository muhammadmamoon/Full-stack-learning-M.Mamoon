import React, { useState } from 'react'

function Mystate() {

    const [name,setname]=useState("Muhammd Mamoon")
  return (
    <div>
        <p>This is  useState Steps</p>
      <h3>{name}</h3>
    </div>
  )
}

export default Mystate
