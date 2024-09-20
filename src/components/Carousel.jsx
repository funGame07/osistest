import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image, Text, Link, Flex } from '@chakra-ui/react';
import { imageOsis } from '../App';
import "./carousel.scss"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { BsInstagram } from "react-icons/bs";

function Carousel() {
    const {img, themes, colorMode} = useContext(imageOsis)

  return (
    <Box className="container" maxW={{base:"100%", lg:"70%"}} px={"0%"} h={{base: "530px", lg:"420px"}}>
      <Swiper
        style={{display:"flex", padding: "60px 0px"}}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        lazyPreloadPrevNext={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        >
            {
                img.map((image, idx) =>{
                    return <SwiperSlide className="swipercardsss" key={idx} >
                                <Content mode={themes[Math.round(Math.random()*4)]} img={image} colorMode={colorMode}/>
                            </SwiperSlide>
                })
            }
      </Swiper>
    </Box>
  );
}

function Content({img, mode, colorMode}){
    return (
        <div className="wrapper">
            <Box className={`clash-card ${mode}`}
            boxShadow={`-1px 15px 30px -12px ${colorMode =="light"? "black" : "gray.100"}`} 
            w={{base: "250px", lg: "201px"}} >
            <Box className={`clash-card__image clash-card__image--${mode}`} 
            height={{base: "155px", lg: "154px"}}
            mb={{base: "35px", lg: "23px"}} display={"flex"} justifyContent={"center"}>
                <Image src={img? img: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/${mode}.png`} h={"130%"} top={-10} loading='lazy'/>
            </Box>
            <Box className={`clash-card__level clash-card__level--${mode}`}
                fontSize={{base: "12px", lg: "8px"}}
                mb={{base:"3px", lg:"2px"}}
                >
                    Ketua Osis
            </Box>
            <Box className="clash-card__unit-name"
                fontSize={{base: "26px", lg: "17px"}} 
                mb={{base: "0px", lg: "3px"}}>
                    Nico
            </Box>
            <Box className="clash-card__unit-description"
            mb={{base: "5px", lg: "6px"}}
            fontSize={{base:"sm", lg:"10px"}}
            color={"black"}>
                Halo, saya bendahara Osis tahun 2024/2025. Tugas saya menjaga uang kas OSIS 
            </Box>

            <div className={`clash-card__unit-stats clash-card__unit-stats--${mode} clearfix`}>
                <Box className="one-third"
                py={{base:"8px", lg: "7px"}}
                px={{base: "15px", lg: "10px"}}>
                    <Box className="stat"
                    fontSize={{base: "24px", lg: '16px'}}
                    mb={{base: "6px", lg: "6px"}}>
                        <Image src="osis.png" rounded={"full"} maxW={"60%"}/>
                    </Box>
                    <Box className="stat-value"
                    fontSize={{base: "10px", lg: "8px"}}>Anggota</Box>
                </Box>

                <Box className="two-third no-border"
                py={{base:"10px", lg: "11px"}}
                px={{base: "15px", lg: "10px"}}
                display={"flex"} flexDir={"column"}>
                    <Flex className="stat" gap={"10px"} >
                        <Box maxW={{base: "30", lg: "20px"}} maxH={"20px"} justifyContent={"start"}>
                            <BsInstagram size={"80%"} style={{background: "linear-gradient(45deg, red, red, blue)", borderRadius: "30%"}}/>
                        </Box>
                        <Link to={"/"} fontSize={{base:"sm", lg: "10px"}} bgGradient={"linear(to-br, red, blue.800)"} bgClip={"text"}>@ellbrtt</Link>
                    </Flex>
                    <Text mt={{base: "10px", lg:"6.5px"}}
                    fontSize={{base:"10px", lg: "8px"}} className='stat-value'>Follow my Instagram</Text>
                </Box>

            </div>

            </Box>
        </div>
    )
}

export default Carousel;

