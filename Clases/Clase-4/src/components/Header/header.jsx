import React from 'react'
import "./header.css";
import img from "../../assets/escudoVelez.jpg"

const header = (props) => {
    console.log(props);
  return (
    <div className='Header' style={{backgroundColor: props.bgColor}}>
        <img className='velez' src = {img} alt = "velez" />
        <h1>
        {props.title}
        </h1>
        <h2>
            {props.subtitle}
        </h2>
    </div>
  )
}

export default header

