import React from "react";

export default function SlideShow(props) {
    const currSlide = props.slides[props.index];
    //console.log(props.index);
        return (
            <div>
                <div>
                    <button 
                        data-testid="button-restart"
                        onClick={props.resetSlide}
                        disabled={props.index === 0}>Restart</button>
                    <button 
                        data-testid="button-prev"
                        onClick={props.prevSlide}
                        disabled={props.index === 0}>Prev</button>
                    <button 
                        data-testid="button-next"
                        onClick={props.nextSlide}
                        disabled={props.index === props.slides.length - 1}>Next</button>
                </div>
                <div>
                    <h1 data-testid="title">{ currSlide.title }</h1>
                    <p data-testid="text">{ currSlide.text }</p>
                </div>
            </div>
        );
}