import React from 'react'

function Childprops(props) {

    const{name,Description,price}=props
  return (
    <div>
      <h1>My Online Shope</h1>
      <h3>Product: {name}</h3>
      <p>Details: {Description}</p>
      <p>RS: {price}</p>
    </div>
  )
}

export default Childprops
