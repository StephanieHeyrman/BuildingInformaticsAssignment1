import React, { useState } from 'react'
import classes from '../styles/Contact.module.scss'
import ik1 from '../assets/ik1.png'
import woonplaats from '../assets/woonplaats.png'
import mail from '../assets/mail.png'
import telefoon from '../assets/telefoon.png'

const Contact = () => {

  const [email] = useState(atob('c3RlcGhhbmllLmhleXJtYW5AaG90bWFpbC5jb20='))
  const [tel] = useState(atob('MDQ4Ny80Ni44OC45Mw=='))
  const [adres] = useState(atob('R2VudHNld2VnIDkxMjAgQmV2ZXJlbg=='))

  return (
    <div>
      <img className={classes.ik1} src={ik1} alt="ik1" />
      <div className={classes.rectangle}>
        <div className={classes.smallrectangle}></div>
        <div className={classes.square1}></div>
        <div className={classes.square2}></div>
        <h1>Stephanie Heyrman</h1>
        <div className={classes.iconholder}>
          <img className={classes.icon} src={woonplaats} alt="woonplaats" />
          <p>{adres}</p>
        </div>
        <div className={classes.iconholder}>
          <img className={classes.icon} src={mail} alt="mail" />
          <p>{email}</p>
        </div>
        <div className={classes.iconholder}>
          <img className={classes.icon} src={telefoon} alt="telefoon" />
          <p>{tel}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
