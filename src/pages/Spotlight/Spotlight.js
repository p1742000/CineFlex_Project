import React, {useEffect, useState} from 'react';
import './Spotlight.css'
import Navbar from "../../components/Navbar/Navbar";
import Swipes from "../../components/Swipes/Swipes";
import ratingLogo from'../../res/imdb.png'
import Cast from "../../components/Cast/Cast";




const Spotlight = ({id, changeGen, changeRoute, type, setId, setType}) => {



        let tvurl='https://api.themoviedb.org/3/tv/'+id+'/similar?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'
        let murl= 'https://api.themoviedb.org/3/movie/'+id+'/similar?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'
        let tvCredURL = 'https://api.themoviedb.org/3/tv/'+ id +'/aggregate_credits?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'
    let mvCredURL = 'https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'

    const idle = null;

    const [bannerData, setBannerData] = useState(idle);
        let htm;
        let bannerMovieURL = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US';
        if(type=="t"){
            bannerMovieURL = 'https://api.themoviedb.org/3/tv/' + id + '?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US';
        }
        useEffect(() => {
                fetch(bannerMovieURL).then(res => res.json()).then(data => {
                    console.log(data);
                    setBannerData(data);
                    window.scrollTo({top: 61, behavior: 'smooth'});
                    tvurl='https://api.themoviedb.org/3/tv/'+id+'/similar?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'
                    murl= 'https://api.themoviedb.org/3/movie/'+id+'/similar?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'
                    // tvCredURL  = 'https://api.themoviedb.org/3/tv/'+ id +'/aggregate_credits?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'

                })
            }
            , [id]);

        if(type=="m")
        {function giveGenre(i) {
            if (i < bannerData.genres.length) return bannerData.genres[i].name;
            else return "";
        }

        function giveGenreID(i) {
            if (i < bannerData.genres.length) return bannerData.genres[i].id;
            else return "";
        }
            function getColor(vote){
                if(vote>=8) return 'lime';
                else if(vote>=5) return 'orange';
                else return 'red';
            }




        if (bannerData == null) {
            htm = <div>Loading</div>
        } else {
            htm =<>
                <div className="htm">

                <div className="banner-img">
                    <img src={"https://image.tmdb.org/t/p/w500" + bannerData.backdrop_path} alt={bannerData.title}/>
                </div>

                <div className="banner-container">
                    <div className="title-container">
                        <div className="movie-title">
                            <h1>{bannerData.title}</h1>
                        </div>
                        <h2>{bannerData.tagline}</h2>
                        <div className="release-date">Release Date: {bannerData.release_date}</div>
                        <span className="language">{(bannerData.production_countries.length>0)?bannerData.production_countries[0].name:""} ({bannerData.original_language.toUpperCase()})</span>
                    </div>
                    <div className="about-movie">
                        <div className="rating">
                            <img src={ratingLogo} alt=""/>
                            <span className="val" style={{color: getColor(bannerData.vote_average)}}>{bannerData.vote_average.toFixed(1)}</span>
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
                <div className="ocast">


                    <div className="overview">
                        <div className="overview-title">Overview:</div>
                        <div className="overview-content" id="overview-content">
                            {bannerData.overview}
                        </div>
                    </div>
                    <div className="castOP">

                        <div className="cast-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cast:</div>

                        <Cast setId={setId} id={id} changeRoute={changeRoute} url={mvCredURL}/>


                    </div>

                </div>

                <div className="related-heading">
                    <h3>Related Movies</h3>
                </div>


                <Swipes setId={setId} id={id} xp={0} changeRoute={changeRoute} setType={setType} url={murl}/>

            {/*    just dont pass id attribute if you dont want to change swiper on reloading of spotlight*/}

            </>
        }}
        else{
            function giveGenre(i) {
                if (i < bannerData.genres.length) return bannerData.genres[i].name;
                else return "";
            }

            function giveGenreID(i) {
                if (i < bannerData.genres.length) return bannerData.genres[i].id;
                else return "";
            }
            function getColor(vote){
                if(vote>=8) return 'lime';
                else if(vote>=5) return 'orange';
                else return 'red';
            }



            if (bannerData == null) {
                htm = <div>Loading</div>
            } else {
                htm =<>
                    <div className="htm">

                    <div className="banner-img">
                        <img src={"https://image.tmdb.org/t/p/w500" + bannerData.backdrop_path} alt={bannerData.title}/>
                    </div>

                    <div className="banner-container">
                        <div className="title-container">
                            <div className="movie-title">
                                <h1>{bannerData.name}</h1>
                            </div>
                            <h2>{bannerData.tagline}</h2>
                            <div className="release-date">Release Date: {bannerData.first_air_date}</div>
                            <span className="language">{(bannerData.production_countries.length>0)?bannerData.production_countries[0].name:""} ({bannerData.original_language.toUpperCase()})</span>
                        </div>
                        <div className="about-movie">
                            <div className="rating">
                                <img src={ratingLogo} alt=""/>
                                <span className="val" style={{color: getColor(bannerData.vote_average)}}>{bannerData.vote_average.toFixed(1)}</span>
                            </div>
                             {/*getColor(bannerData.vote_average*/}


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
                    <div className="ocast">


                <div className="overview">
                    <div className="overview-title">Overview:</div>
                    <div className="overview-content" id="overview-content">
                        {bannerData.overview}
                    </div>
                </div>
                        <div className="castOP">

                            <div className="cast-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cast:</div>

                            <Cast setId={setId} id={id} changeRoute={changeRoute} url={tvCredURL}/>


                        </div>

                    </div>

                    <div className="related-heading">
                        <h3>Related TV Shows</h3>
                    </div>

                    <Swipes setId={setId} id={id} xp={0} changeRoute={changeRoute} setType={setType} url={tvurl}/>



                </>
            }

        }





return (
        <>


            <div className="banner">{htm}</div>

        </>

    );
};

export default Spotlight;