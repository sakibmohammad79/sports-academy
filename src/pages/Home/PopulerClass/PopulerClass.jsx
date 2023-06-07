import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const PopulerClass = () => {
    const [populerClass, setPopulerClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data => setPopulerClass(data))
    },[])
    return (
        <>
        <SectionTitle heading={'populer Classes'} subHeading={'join us'}></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
            {
                populerClass.map(singleClass => <SwiperSlide key={singleClass._id}
                singleClass={singleClass}
                ><img src={singleClass.classImage} alt="" /></SwiperSlide>)
            }
          
          
        </Swiper>
      </>
    );
};

export default PopulerClass;