import React, {useEffect, useState} from 'react';
import Tile from "../Tile/Tile";
import './Tiles.css'






const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const Tiles = (props) => {

    let topURL = props.url;
    const [tiles, setTiles] = useState([]);
    // console.log('jayraj',props.url)
    // console.log(topURL)
    useEffect(() => {
        let res = [];
    if(props.ID==null) {
        fetch(topURL).then(res => res.json()).then(data => {
            data.results.forEach(topmovie => {
                const {id, name, title, poster_path, vote_average, release_date, genre_ids, overview} = topmovie;
                res.push(<Tile changeRoute={(routeName) => {
                    props.setId(id);
                    props.changeRoute(routeName);
                }} key={id} url={IMG_URL + poster_path} movieName={title == null ? name : title} overview={overview}/>);
            });
            setTiles(res);
            console.log(tiles)
        });
    }
    else{
        if(props.type=="m"){
            topURL= 'https://api.themoviedb.org/3/discover/movie?api_key=a86f1ad1d039e27d489a36607616522f&with_genres='+props.ID;
            fetch(topURL).then(res => res.json()).then(data => {
                data.results.forEach(topmovie => {
                    const {id, name, title, poster_path, vote_average, release_date, genre_ids, overview} = topmovie;
                    res.push(<Tile changeRoute={(routeName) => {
                        props.setId(id);
                        props.changeRoute(routeName);
                    }} key={id} url={IMG_URL + poster_path} movieName={title == null ? name : title} overview={overview}/>);
                });
                setTiles(res);
            });

        }
        else{
            topURL= 'https://api.themoviedb.org/3/discover/tv?api_key=a86f1ad1d039e27d489a36607616522f&with_genres='+props.ID;
            fetch(topURL).then(res => res.json()).then(data => {
                data.results.forEach(topmovie => {
                    const {id, name, title, poster_path, vote_average, release_date, genre_ids, overview} = topmovie;
                    res.push(<Tile changeRoute={(routeName) => {
                        props.setId(id);
                        props.changeRoute(routeName);
                    }} key={id} url={IMG_URL + poster_path} movieName={title == null ? name : title} overview={overview}/>);
                });
                setTiles(res);
            });

        }
    }
    }, [props.url])


    return (
        <div className="tiles-container">
            {tiles}
        </div>
    );
};

export default Tiles;