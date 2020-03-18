import React from "react";

const NASACard = props => {
    return (
        <div>
            <h1>NASA Astronomy Photo of the Day</h1>
            <img alt="NASA's Astronomy Photo of the Day" src={props.imgURL} />
            <h3>{props.imgTitle} ({props.imgDate})</h3>
            <p>{props.imgExplanation}</p>
        </div>
    )
}

export default NASACard;