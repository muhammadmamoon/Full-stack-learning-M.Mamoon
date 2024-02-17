import React from 'react'
import ParentProps from "../Props/parentProps"
import Mystate from '../state/Mystate'

function Center() {
  return (
    <div>
     <ParentProps/>
      <hr />
     <Mystate/>
      <hr />
    </div>
  )
}

export default Center
