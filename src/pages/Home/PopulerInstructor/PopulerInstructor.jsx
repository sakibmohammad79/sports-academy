
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { EffectCoverflow, Pagination } from "swiper";
import useData from '../../../hook/useData';
const PopulerInstructor = () => {
    const [allDatas] = useData();
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
            allDatas.map(instructor => <SwiperSlide key={instructor._id}
            instructor={instructor}>
                <img style={{height: '400px', width: '600px'}} src={instructor.instructorImage} />
              </SwiperSlide>)
        }
      </Swiper>
    </div>
    );
};

export default PopulerInstructor;