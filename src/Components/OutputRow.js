import React from "react";
import "./OutputRow.css"
const OutputRow = (props) =>{
    return(
        <div>
            <input type="text" readOnly className="screen" style={props.textSixze} value={props.value}/>
        </div>
    )
}
export default OutputRow