import React from 'react'
import { OutputRow } from './OutputRow'

export const Output = (props) => {
    return (
        <div>
            <OutputRow value={props.answer} textSize={{fontsize: '20px'}}/>
            <OutputRow value={props.user} />
        </div>
    )
}
