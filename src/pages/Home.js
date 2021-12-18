import React from 'react'
import classes from '../styles/Home.module.scss'

const Home = () => {
    return (
        <div>
            <div className={classes.detail}>
                <div></div>
            </div>
            <div className={classes.intro}>
                <h1>Hallo,</h1>
                <div className={classes.introRect}></div>
                <div className={classes.introText}>
                    <p>MIJN NAAM IS <span className={classes.steph}>Stephanie</span></p>
                    <p className={classes.title}>STUDENT BURGERLIJK INGENIEUR-ARCHITECT</p>
                </div>
            </div>
            <div className={classes.ontdek}></div>
        </div>
    )
}

export default Home
