import Carousel from "react-spring-3d-carousel";
import React, { useState, useEffect } from "react";
import Card from '../Card/Card'
import CardNavigator from '../CardNavigator/CardNavigator'
import { config } from "react-spring";
import {CARDS} from "../../constants"
import './Content.scss'

const createCardWithComponent = () => {
    return CARDS.map((card) => {
        return {...card, content: <Card label={card.label} img={card.img}/>}
    })
}

export default function Content(props) {
    const cardWithComponent = createCardWithComponent() 
    const table = cardWithComponent.map((element, index) => {
        return { ...element, onClick: () => { setGoToSlide(index)} };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0);
    const [cards] = useState(table);
    const cardsLength = CARDS.length;

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);


    useEffect(() => {
        const handleKeyPress = (event) => {
        if (event.key === "ArrowLeft") {
            // Left arrow key is pressed
            setGoToSlide((goToSlide-1+cardsLength)%cardsLength)
        } else if (event.key === "ArrowRight") {
            // Right arrow key is pressed
            setGoToSlide((goToSlide+1)%cardsLength)
        }
        };

        window.addEventListener("keydown", handleKeyPress);
        const intervalId = setInterval(() => {
            setGoToSlide((goToSlide+1)%cardsLength)
        }, 3000); 

        return () => {
        window.removeEventListener("keydown", handleKeyPress);
        clearInterval(intervalId);

        };
    }, [goToSlide, cardsLength]);

    return (
        <>
            <div className="carousel-header">
                <div className="featured">
                    Featured Products
                </div>
                <div className="description">
                    Explore and discover variety of products
                </div>
            </div>
            <div
                style={{ width: props.width, height: props.height, margin: props.margin }}
            >
                <Carousel
                    slides={cards}
                    goToSlide={goToSlide}
                    offsetRadius={offsetRadius}
                    showNavigation={showArrows}
                    animationConfig={config.gentle}
                />
            </div>
            <CardNavigator goToSlide={goToSlide} setGoToSlide={setGoToSlide} />
        </>
    );
}
