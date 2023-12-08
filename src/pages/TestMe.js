import React from "react";
import Swipes from "../components/Swipes/Swipes";
import Cast from "../components/Cast/Cast";

function TestMe(props){
    let castID=209276;
    return (
        <>
            <Cast setId={props.setId} changeRoute={props.changeRoute} url={'https://api.themoviedb.org/3/movie/'+ castID+'/credits?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'}/>
        </>
    );
}

export default TestMe;