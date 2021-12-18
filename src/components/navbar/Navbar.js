import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
import classes from './Navbar.module.scss'
import mail from '../../assets/mail.png'
import telefoon from '../../assets/telefoon.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/insta.png'

const NavbarComponent = () => {

    const [email] = useState(atob('c3RlcGhhbmllLmhleXJtYW5AaG90bWFpbC5jb20='))
    const [tel] = useState(atob('MDQ4NzQ2ODg5Mw=='))

    return (
        <nav id="top">
            <img className={classes.image_logo} src={logo} alt="logo" />
            <div className={classes.navItems}>
                <Link className={classes.navItem} to='/'>HOME</Link>
                <Link className={classes.navItem} to='/aboutme'>ABOUT ME</Link>
                <Link className={classes.navItem} to='/portfolio'>PORTFOLIO</Link>
                <Link className={classes.navItem} to='/contact'>CONTACT</Link>
            </div>
            <div className={classes.socials}>
                <a href={"tel:" + tel}>
                    <img className={classes.icon} src={telefoon} alt="telefoon" />
                </a>
                <a href={"mailto:" + email}>
                    <img className={classes.icon} src={mail} alt="mail" />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/stephanie.heyrman.75"
                >
                    <img className={classes.icon} src={facebook} alt="facebook" />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/stephanieheyrman/"
                >
                    <img className={classes.icon} src={linkedin} alt="linkedin" />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/stephanieheyrman/"
                >
                    <img className={classes.icon} src={insta} alt="insta" />
                </a>
            </div >
        </nav >
    )
}

export default NavbarComponent

