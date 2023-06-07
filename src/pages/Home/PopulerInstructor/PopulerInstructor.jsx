import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { EffectCoverflow, Pagination } from "swiper";
const PopulerInstructor = () => {
    const [populerInstructor, setPopulerInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data => setPopulerInstructor(data))
    },[])
    console.log(populerInstructor)
    return (
        <div className=''>
            <SectionTitle heading={'our best instructor'} subHeading={'best output'}></SectionTitle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        {
            populerInstructor.map(instructor => <SwiperSlide key={instructor._id}
            instructor={instructor}>
                <img style={{height: '400px', width: '600px'}} src={instructor.instructorImage} />
              </SwiperSlide>)
        }
      </Swiper>
    </div>
    );
};

export default PopulerInstructor;