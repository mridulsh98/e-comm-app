import React from "react";
import {CARDS} from "../../constants"
import './CardNavigator.scss'

export default function CardNavigator(props) {

    let goToSlide = props.goToSlide
    const setGoToSlide = props.setGoToSlide
   
    return (
            <div className="card-position">
                {/* left arrow */}
                <div className="left-arrow" onClick={() => {setGoToSlide((goToSlide-1+CARDS.length)%CARDS.length)}}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75021 10.5H21.6289V13.5H8.75021L13.6895 18.4393L11.5682 20.5606L3.00757 12L11.5682 3.4393L13.6895 5.56062L8.75021 10.5Z" fill="#D3D2D2"/>
                    </svg>
                </div>
                {/* card navigation */}
                {CARDS.map((_, index) => {
                    return ( 
                        <div 
                            key={index}
                            className={`dot${index === goToSlide ? "-active" : ""}`}
                            onClick={() => setGoToSlide(index)}
                        />
                    )
                })}

                {/* right arrow */}
                <div className="right-arrow"  onClick={() => {setGoToSlide((goToSlide+1)%CARDS.length)}}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1069 13.557H3.55322V10.443H16.1069L11.2922 5.31595L13.36 3.11401L21.7046 12L13.36 20.886L11.2922 18.6841L16.1069 13.557Z" fill="#D3D2D2"/>
                    </svg>
                </div>

            </div>
    );
}
