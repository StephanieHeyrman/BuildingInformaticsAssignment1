import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.scss'

const CarouselComponent = (props) => {

    return (
        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false}>
            {props.images.map((img, i) => {
                return <div key={`carouselImage.${i}`} className={classes.carouselHolder}>
                    <div className={classes.carouselImage}>
                        <img src={img} alt="portfolioImage" />
                    </div>
                </div>
            })}
        </Carousel>
    )
}

export default CarouselComponent

