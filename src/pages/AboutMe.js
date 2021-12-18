import React from 'react'
import classes from '../styles/AboutMe.module.scss'
import ik3 from "../assets/ik3.jpg";
import gent from "../assets/gent.png";
import arrow from "../assets/arrow.svg";
import OpleidingItem from '../components/opleidingItem/OpleidingItem';

const AboutMe = () => {

    const opleidingen = [
        { time: { end: "2021", start: "..." }, text: ["UGent | Jozef Plateaustraat 22, 9000 Gent", "end Master of Science Ingenieurswetenschappen: Architectuur", "Afstudeerrichting: architectuurontwerp en bouwtechniek"] },
        { time: { end: "2020", start: "2021" }, text: ["UGent | Jozef Plateaustraat 22, 9000 Gent", "Voorbereidingsprogramma Master of Science", "Ingenieurswetenschappen: Architectuur"] },
        { time: { end: "2017", start: "2020" }, text: ["KULeuven, Sint-Lucas | Hoogstraat 51, 9000 Gent", "Diploma Bachelor in de Architectuur ", "[ Onderscheiding ]"] },
        { time: { end: "2012", start: "2017" }, text: ["Stedelijke Academie voor Schone Kunsten", "9100 Sint-Niklaas | Diploma middelbare graad", "&", "Sint - Maarten Bovenschool | 9120 Beveren", "Diploma middelbare graad ASO wetenschappen wiskunde"] }
    ];

    return (
        <div>
            <div className={classes.welkomHolder}>
                <img className={classes.ik3} src={ik3} alt="ik" />
                <div className={classes.rectangle}>
                    <div className={classes.titleRect}></div>
                    <div className={classes.square1}></div>
                    <div className={classes.square2}></div>
                    <h1>Welkom op mijn website!</h1>
                    <p>
                        Mijn naam is Stephanie, ik woon in Beveren en ik ben een gemotiveerde
                        student aan de UGent.
                    </p>
                    <p>
                        Momenteel zit ik in mijn eerste master Burgerlijk Ingenieur-Architect.
                        Naast mijn studie is architectuur, ontwerpen en kunst ook mijn passie.
                    </p>
                    <p>
                        Ondertussen ben ik 22 jaar en kan ik niet wachten om aan de slag te
                        gaan als ingenieur!
                    </p>
                    <div className={classes.buttonholder}>
                        <a href="#opleiding" className={classes.more}>MEER OVER MIJ</a>
                        <img className={classes.arrow} src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div id="opleiding" className={classes.opleidingHolder}>
                <div className={classes.opleidingIntro}>
                    <h1>Opleiding</h1>
                    <div className={classes.rect}></div>
                    <img className={classes.gent} src={gent} alt="gent" />
                    <div className={classes.imageRect}></div>
                    <div className={classes.bar}></div>
                </div>
                <div className={classes.opleidingen}>
                    {opleidingen.map((opl, i) => <OpleidingItem key={`${opl.time.start}.${i}`} time={opl.time} text={opl.text}></OpleidingItem>)}
                </div>
            </div>
        </div>
    )
}

export default AboutMe
