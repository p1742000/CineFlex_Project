import React from "react";
// import './Swipes.css'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, EffectFlip } from 'swiper';
import './Cast.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-flip";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useState} from "react";
import Tile from "../Tile/Tile";
import {useEffect} from "react";
// import {findAllByDisplayValue} from "@testing-library/react";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function Cast(props){
    let topURL = props.url;
    const [tiles, setTiles] = useState([]);




    useEffect(() => {

        let res = [];


        fetch(topURL).then(res => res.json()).then(data => {
            console.log(data)

            data.cast.forEach(topmovie => {
                const {id, character, original_name, profile_path} = topmovie;



                // const { birthday} = cast_data;
                // console.log(cast_data)
                let damp = character==null?'':' as '+ character;
                res.push(<Tile changeRoute={(routeName) => {
                    console.log("kair",id)
                    props.setId(id);
                    props.changeRoute(routeName);

                }} key={id} url={IMG_URL + profile_path} movieName={original_name + damp} overview={'Character'}/>);
            });
            console.log(res)
            setTiles(res);


        });
    }, [props.id]);






    return (
        <>
            <Swiper style={{width: '239px'}}
                // install Swiper modules
                    effect={"flip"}
                    modules={[Navigation, Pagination, EffectFlip, Autoplay]}
                    // spaceBetween={25}
                    // slidesPerView={5}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    navigation={true}

                    className="mySwiper"
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

export default Cast;