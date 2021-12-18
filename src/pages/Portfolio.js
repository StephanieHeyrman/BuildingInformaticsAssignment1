import React, { useEffect, useState } from 'react'
import CarouselComponent from '../components/carousel/Carousel';
import classes from '../styles/Portfolio.module.scss'
import PortfolioLink from '../components/portfolioLink/PortfolioLink';
import aalst from "../assets/aalst.png";
import olijf from "../assets/olijf.png";
import wood from "../assets/wood.png";
import pluswonen from "../assets/pluswonen.png";
import arrow from "../assets/arrow.svg";
import * as api from "../api"

const Portfolio = () => {

    const [portfolioImages, setPortImg] = useState('')

    useEffect(() => {
        async function get(){
            let temp = await api.fetchData()
           setPortImg([temp.plus, temp.aalst, temp.olijf, temp.wood])
        }
        get()
    }, [])

    const portfolioItems = [
        { img: pluswonen, title: "PLUSWONEN", link: "#pluswonen" },
        { img: aalst, title: "ALLEMAAL AALST", link: "#aalst" },
        { img: olijf, title: "DIENSTCENTRUM DE GROENE OLIJF", link: "#olijf" },
        { img: wood, title: "WOODIFICATION", link: "#wood" },
    ]; 

    return (
        <div>
            <a className={classes.top} href="#top"><img className={classes.arrow} src={arrow} alt="arrow" /></a>
            <div className={classes.links}>
                {portfolioItems.map((portItem, i) => <PortfolioLink key={`${portItem.title}.${i}`} item={portItem}></PortfolioLink>)}
            </div>

            <div id="pluswonen" className={classes.portfolioContainer}>
                <div className={classes.titleHolder}>
                    <img className={classes.image} src={pluswonen} alt="icon" />
                    <h2>{portfolioItems[0].title}</h2>
                </div>
                {(portfolioImages[0]) && <CarouselComponent images={portfolioImages[0]} />}

                <div className={classes.textHolder}>
                    <div className={classes.info}>
                        <p><b>Jaar |</b> 2020 Voorbereidingsprogramma Ugent</p>
                        <p><b>Programma |</b> Atelier, woning & externe woning</p>
                        <p><b>Locatie |</b> Johan Daisestraat, Gent</p>
                        <p><b>Oppervlakte |</b> 200&#13217;</p>
                    </div>
                    <div className={classes.story}>
                        <h3>HET VERHAAL</h3>
                        <p>Dit project ging over het multifunctioneel wonen. Hoe kan een woning zo zijn aangepast dat het voor elk mogelijk gebruik of gezin kan voldoen. De uitdaging in dit project was het inpassen in de omgeving, de buren en de bestaande boom.
                         Het uiteindelijke resultaat is een woning die als een puzzelstukje werd aangepast aan de omgeving, zodat het ontwerp niet invasief werd voor de buurt. Daarnaast werd het behouden van de enorme boom een stukje groen dat werd teruggeven aan de omgeving.</p>
                    </div>
                </div>
            </div>

            <div id="aalst" className={classes.portfolioContainer}>
                <div className={classes.titleHolder}>
                    <img className={classes.image} src={aalst} alt="icon" />
                    <h2>{portfolioItems[1].title}</h2>
                </div>
                {(portfolioImages[1]) && <CarouselComponent images={(portfolioImages && portfolioImages[1])} />}
                <div className={classes.textHolder}>
                <div className={classes.info}>
                        <p><b>Jaar |</b>  2019 3e BACHELOR SEMESTER 1 SINT-LUCAS</p>
                        <p><b>Programma |</b> MASTERPLAN VOOR KEIZERSHALLEN  </p>
                        <p><b>Locatie |</b> Keizershallen, Aalst </p>
                        <p><b>Onderzoek en masterplan |</b> <a target='_blank' href='https://www.youtube.com/watch?v=vx8xK42PXIE'> VIDEOLINK </a> </p>
                        <p><b>Parkzone |</b> <a target='_blank' href='https://www.youtube.com/watch?v=wMKRa2EdJio'> VIDEOLINK </a> </p>
                    </div>
                    <div className={classes.story}>
                        <h3>HET VERHAAL</h3>
                        <p>Dit onderzoek ging over de parking van de keizershallen in Aalst. Hoe kan deze parking gebruikt worden voor verschillende functies zonder dat het parkeren verdwijnt. De eerste weken verliepen als een onderzoek van de omgeving en het informeel gebruik van de parking. De volgende weken het opbouw van het masterplan. Met een winkelzone, woonzone, parkeerzone</p>
                    </div>
                </div>
            </div>

            <div id="olijf" className={classes.portfolioContainer}>
                <div className={classes.titleHolder}>
                    <img className={classes.image} src={olijf} alt="icon" />
                    <h2>{portfolioItems[2].title}</h2>
                </div>
                {(portfolioImages[2]) && <CarouselComponent images={(portfolioImages && portfolioImages[2])} />}
                <div className={classes.textHolder}>
                    <div className={classes.info}>
                        <p><b>Jaar | </b>2021 VOORBEREIDINGSPROGRAMMA UGENT </p>
                        <p><b>Programma |</b> DIENSTENCENTRUM </p>
                        <p><b>Locatie |</b> Olijfstraat & Groendreef, Gent </p>   
                    </div>
                    <div className={classes.story}>
                        <h3>HET VERHAAL</h3>
                        <p>Het dienstencentrum is een plaats waar de buurt terecht kan voor te lezen, te eten, te baden en gemeentelijke diensten. Deze functies zijn geclusterd per deel. Dit is een renovatieproject waarbij de structuur zoveel mogelijk wordt behouden.
</p>
                    </div>
                </div>
            </div>

            <div id="wood" className={classes.portfolioContainer}>
                <div className={classes.titleHolder}>
                    <img className={classes.image} src={wood} alt="icon" />
                    <h2>{portfolioItems[3].title}</h2>
                </div>
                {(portfolioImages[3]) && <CarouselComponent images={(portfolioImages && portfolioImages[3])} />}
                <div className={classes.textHolder}>
                <div className={classes.info}>
                        <p><b>Jaar | </b>2021 1STE MASTER UGENT </p>
                        <p><b>Programma |</b> MUSEUM </p>
                        <p><b>Locatie | </b>Bankside, Londen </p>
                    </div>
                    <div className={classes.story}>
                        <h3>HET VERHAAL</h3>
                        <p>In deze studio werd een betonnen gebouw vertaald naar een houten gebouw. Deze vertaling werd niet letterlijk genomen maar ging meer over hoe hout de ruimte kan veranderen en welke invloed dit heeft op het structurele aspect van het gebouw. In dit project vertaalden we Tate Modern Switch House. Hierbij begonnen we van een leeg blad waarbij we elke week meer en meer complexiteit aan het project konden toevoegen zodat het uiteindelijke resultaat alle auras of belangrijke punten van het oorspronkelijke Switch House bezat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
