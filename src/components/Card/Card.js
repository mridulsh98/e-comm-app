import React from "react"
import "./Card.scss"

const Card =(props) => {
    return(
        <div>    
            <img
            src={props.img}
            alt="1"
            style={{
                height: 500,
                width: 500,
                borderRadius: 10
            }}
            />
            <div className="image-label">
                {props.label}
            </div>
        </div>
    )
}

export default Card