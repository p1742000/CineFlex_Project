import React from "react";
import './Swipes.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useState} from "react";
import Tile from "../Tile/Tile";
import {useEffect} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function Swipes(props){
    let topURL = props.url;
    const [tiles, setTiles] = useState([]);




    useEffect(() => {

        let res = [];
        fetch(topURL).then(res => res.json()).then(data => {
            data.results.forEach(topmovie => {
                const {id, name, title, poster_path, vote_average, release_date, genre_ids, overview} = topmovie;
                res.push(<Tile changeRoute={(routeName) => {
                    console.log("kair",id)

                    props.setId(id);
                    props.changeRoute(routeName);
                }} key={id} url={IMG_URL + poster_path} movieName={title == null ? name : title} overview={overview}/>);
            });
            setTiles(res);


        });
    }, [props.id]);






    return (
        <>
            <Swiper style={{width: "95vw"}}
                // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={25}
                    slidesPerView={5}
                    navigation={true}
                    initialSlide={props.xp}


                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
            >



                {
                    tiles.map( (x) => {
                        {return <SwiperSlide>{x}</SwiperSlide>}
                    })
                }
            </Swiper>

        </>
    );
}

export default Swipes;