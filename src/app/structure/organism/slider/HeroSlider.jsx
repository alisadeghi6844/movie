"use client"
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Rating,RoundedStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'swiper/css/effect-cards';
import { Thumbs, Autoplay,EffectCards } from 'swiper/modules';
import Typography from "@/app/structure/components/typography/Typography";
import Image from "@/app/structure/components/image";

const HeroSliderOrg = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const customStyles = {
        itemShapes: RoundedStar,
        activeFillColor: '#E5DB22',
        inactiveFillColor: 'rgba(229,219,34,0.24)',
    };

    return (
        <div dir="ltr" className="relative w-full h-full">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper}}
                modules={[Thumbs, Autoplay]}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                className="mySwiper2 h-[85vh] relative"
            >
                <SwiperSlide>
                    <img src="/images/Image1.png" className="w-[75%] h-full right-0 absolute"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/Property274.png" className="w-[75%] h-full right-0 absolute"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/Property274.png" className="w-[75%] h-full right-0 absolute"/>
                </SwiperSlide>
                <div
                    className="absolute bottom-[-48px] right-[-24px] w-full h-[100px] z-20 bg-[#EBFAFF] filter blur-[16px]"/>
                <div
                    className="absolute right-0 top-0 z-20 w-full h-full bg-gradient-to-r from-[#E7F6FC] to-[rgba(231,246,252,0.06)] [background:linear-gradient(84deg,#E7F6FC_29.88%,rgba(231,246,252,0.06)_55.92%)] filter blur-[25px]"/>
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                effect={'cards'}
                grabCursor={true}
                modules={[Thumbs,EffectCards]}
                className="mySwiper absolute bottom-[200px] flex justify-center h-[300px] !pt-8 -right-[30%] z-30 w-[280px] !rounded-2xl"
            >
                {[2, 3,2].map((imageNumber, index) => (
                    <SwiperSlide
                        key={index}
                        style={{border: "0.5px solid #006486FC"}}
                        //className="!w-[170px] rounded-2xl !h-[122px] relative slide-item"
                        className="slide-item rounded-2xl !h-[250px] relative mx-12"
                    >
                        <img
                            src={`/images/Image${imageNumber}.png`}
                            className="w-full rounded-2xl h-full absolute"
                        />
                        <div className="slide-overlay"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute bottom-[280px] left-[6%] z-20 w-[550px]">
                <Typography tag="h1">ماموریت غیر ممکن</Typography>
                <Typography tag="h4">حساب مرده (قسمت اول)</Typography>
                <Typography tag="p">جان ویک، هیت مرد افسانه ای، با قیمت بالای سرش، مبارزه خود را با جدول جهانی بالا می
                    برد و به دنبال قدرتمندترین بازیکنان دنیای اموات، از نیویورک تا پاریس، ژاپن و برلین می
                    گردد.</Typography>
                <div>
                    <div><Rating style={{ maxWidth: 120 }} readOnly itemStyles={customStyles} value={4} /></div>
                    <div>
                        <Image src="/images/IMDB.png" alt="IMDB"/>
                        <Typography tag="p">7.7</Typography>
                    </div>
                    <Image src="/images/download.png"/>
                </div>
            </div>
        </div>
    );
};

export default HeroSliderOrg;
