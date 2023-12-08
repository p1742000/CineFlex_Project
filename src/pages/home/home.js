import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Tiles from "../../components/Tiles/Tiles";
import './home.css'

const Home = (props) => {
    props.setType("m");
    const [p, setP] = useState(2)
    let url= 'https://api.themoviedb.org/3/movie/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1';

    // const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1')
    let initialHTML = <Tiles setId={props.setId} changeRoute={props.changeRoute} url={url}/>
    const [htm, setHtm] = useState(initialHTML)

    const clickHandler = () => {
        let length = url.length;
        setP(p+1)

        let res = [htm];

        url = ('https://api.themoviedb.org/3/movie/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page='+(p));
        console.log(url)
        let temp = <Tiles setId={props.setId} changeRoute={props.changeRoute} url={url}/>
        res.push(temp);
        setHtm(res);
    }


    return (
        <div>

            {htm}
            <button className="load-more-btn" onClick={clickHandler}>Load More</button>

        </div>


    );
};

export default Home;