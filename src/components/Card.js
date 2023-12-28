import React from "react";
import Path from "../avatar.jpg";
const Card = (props)=>{
    return(
        <div className="content">
            <img src={Path} className="filmCover"></img>
            <p>{props.cardTitle}</p>
            <button class="btn btn-intermediate" onClick={()=>props.click()}>Alert me!</button>
        </div>
        
    )
}
export default Card;