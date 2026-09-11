import React from "react";
import { buyCake } from "../redux/cakes/cakeAction";
import { useState } from "react";
import { connect } from 'react-redux'
 

function PayloadContainer(props) {
    const[number, setNumber] = useState();

    return (
        <>
        <h2>Payload Number of cakes - {props.numOfCakes}</h2>
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} /> 
        <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </>
    )
}

//
const mapStateToProps = state =>{
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: number =>{
            dispatch(buyCake(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayloadContainer);