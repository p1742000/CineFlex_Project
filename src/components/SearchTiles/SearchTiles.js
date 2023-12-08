import React from "react";
import Tiles from "../Tiles/Tiles";

const SearchTiles = (props) => {


    let htm =     <Tiles ID={props.ID} changeRoute={props.changeRoute} setId={props.setId} type={props.type} url={'https://api.themoviedb.org/3/search/movie?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&query='+props.srch+'&page=1&include_adult=false'}/>
    if(props.type=='t'){
        htm = <Tiles ID={props.ID} changeRoute={props.changeRoute} setId={props.setId} type={props.type} url={'https://api.themoviedb.org/3/search/tv?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&query='+props.srch+'&page=1&include_adult=false'}/>

    }




    return(
        <>
            {htm}

        </>
    )
}

export default SearchTiles;