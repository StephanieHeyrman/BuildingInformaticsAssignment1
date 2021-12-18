import React, { useState } from 'react'
import classes from './PortfolioLink.module.scss'
import arrow from "../../assets/arrow.svg";

const PortfolioLink = (props) => {

    const [item] = useState(props.item)

    return (
        <div className={classes.container}>
            <div className={classes.rightCorner}></div >
            <div className={classes.leftCorner}></div >

            <div className={classes.content}>
                <a href={item.link}>
                    <div className={classes.title}>{item.title}</div >
                    <img className={classes.image} src={item.img} alt="icon" />
                    <img className={classes.arrow} src={arrow} alt="arrow" />
                </a>
            </div >

        </div >
    )
}

export default PortfolioLink

