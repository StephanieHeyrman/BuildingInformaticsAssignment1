import React from 'react'
import classes from './OpleidingItem.module.scss'


const OpleidingItem = (props) => {

    return (
        <div className={classes.opleiding}>
            <div className={classes.timeHolder}>
                <p>{props.time.start}</p>
                <p>-</p>
                <p>{props.time.end}</p>
            </div>
            <div className={classes.textHolder}>
                {props.text.map((line, i) => { return <p key={`oplLine.${i}`}> {line}</p> })}
            </div>
        </div >
    )
}

export default OpleidingItem

