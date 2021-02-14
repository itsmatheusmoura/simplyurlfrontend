import React, { useState } from 'react';
import { SliderData } from './sliderdata';
import './styles.css';

const ImagemSlider  = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const changeSlide = setInterval(() => {
        nextSlide();
        clearInterval(changeSlide);
    }, 5000*2);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return(
        <section className="slider">
            {
                SliderData.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            { index === current && (<img src={slide.image} alt="frases" className="image"/>) }   
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ImagemSlider;