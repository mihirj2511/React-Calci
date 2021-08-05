import React from 'react'
import './OutputRow.css'
export const OutputRow = (props) => {
    return (
        <div>
            <input type="text" readOnly className="screen" style={props.textSize} value={props.value} />
        </div>
    )
}
