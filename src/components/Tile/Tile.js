import React from 'react';
import './Tile.css'
const Tile = ({ changeRoute, url, movieName, overview}) => {

    return (
        <div className="tile-container" style={{backgroundImage: `url('${url}')`}}>
            {
              overview!='Character'?<div className="tile-screen" onClick={()=>{changeRoute('spotlight')}} >
                  <div className="movie-name">{movieName}</div>
                  <div className="movie-overview">
                  Overview:
                  <br/>
                  <div>{overview.length>200?overview.substring(0,200)+'...':overview}</div>
                  </div>
              </div>: <div className="movie-name" style={{margin: '235px 10px', textShadow: '2px 2px 3px black'}}>{movieName}</div>

            }
        {/*<div className="tile-screen" onClick={()=>{changeRoute('spotlight')}} >*/}
        {/*    <div className="movie-name">{movieName}</div>*/}
        {/*    {*/}
        {/*        overview!='Character'?<div className="movie-overview">*/}
        {/*            Overview:*/}
        {/*            <br/>*/}
        {/*            <div>{overview.length>200?overview.substring(0,200)+'...':overview}</div>*/}
        {/*        </div>: <div></div>*/}

        {/*    }*/}
        </div>

    );
};

export default Tile;