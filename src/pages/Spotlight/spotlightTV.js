import React, {useEffect, useState} from 'react';
import './Spotlight.css'
import Navbar from "../../components/Navbar/Navbar";

const Spotlight = ({id, changeGen, changeRoute, type}) => {

    const idle = null;
    const [bannerData, setBannerData] = useState(idle);

    const bannerMovieURL = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US';
    useEffect(() => {
            fetch(bannerMovieURL).then(res => res.json()).then(data => {
                console.log(data);
                setBannerData(data);
            })
        }
        , []);


    function giveGenre(i) {
        if (i < bannerData.genres.length) return bannerData.genres[i].name;
        else return "";
    }

    function giveGenreID(i) {
        if (i < bannerData.genres.length) return bannerData.genres[i].id;
        else return "";
    }


    let htm;
    if (bannerData == null) {
        htm = <div>Loading</div>
    } else {
        htm = <div className="htm">

            <div className="banner-img">
                <img src={"https://image.tmdb.org/t/p/w500" + bannerData.backdrop_path} alt={bannerData.title}/>
            </div>

            <div className="banner-container">
                <div className="title-container">
                    <div className="movie-title">
                        <h1>${bannerData.title}</h1>
                    </div>
                    <h2 style={{marginTop: "10px", color: "grey"}}>{bannerData.tagline}</h2>
                    <div className="release-date">Release Date: {bannerData.release_date}</div>
                    {/*<span className="language">{bannerData.production_countries[0].name} ({bannerData.original_language.toUpperCase()})</span>*/}
                </div>
                <div className="about-movie">
                    <div className="rating">
                        <img src="res/imdb.png" alt=""/>
                        {/*<span className="val" style="color: ${getColor(bannerData.vote_average)}">${bannerData.vote_average.toFixed(1)}</span>*/}
                    </div>


                    <div className="category">
                        Category:
                        <a onClick={() => {
                            changeGen(giveGenreID(0));
                            changeRoute('genre');
                        }} href="#">{giveGenre(0)}</a>
                        <a onClick={() => {
                            changeGen(giveGenreID(1));
                            changeRoute('genre');
                        }} href="#">{giveGenre(1)}</a>
                        <a onClick={() => {
                            changeGen(giveGenreID(2));
                            changeRoute('genre');
                        }} href="#">{giveGenre(2)}</a>
                        <a onClick={() => {
                            changeGen(giveGenreID(3));
                            changeRoute('genre');
                        }} href="#">{giveGenre(3)}</a>
                        <a onClick={() => {
                            changeGen(giveGenreID(4));
                            changeRoute('genre');
                        }} href="#">{giveGenre(4)}</a>
                    </div>


                </div>
            </div>
        </div>
    }





    return (
        <>


            <div className="banner">{htm}</div>


        </>

    );
};

export default Spotlight;