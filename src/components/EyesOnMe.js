// Code EyesOnMe Component Here
import React from "react";
function handleOnFocus () {
    console.log("Good!")
}
function handleOnBlur () {
    console.log("Hey! Eyes on me!")
}
function EyesOnMe () {
    return(
        <button onFocus={handleOnFocus} onBlur={handleOnBlur}>Eyes on me</button>
    )
}
export default EyesOnMe