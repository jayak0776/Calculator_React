import React from 'react'
import OutputRow from "./OutputRow"

function Output(props) {
  return (
    <div>
        <OutputRow value={props.answer} textSize={{fontSize:"90px"}}/>
        <OutputRow value={props.user} textSize={{fontSize:"90px"}}/>
    </div>
  )
}

export default Output