import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useData from '../../../hook/useData';
const PopulerInstructor = () => {
    const [allDatas] = useData();
    console.log(allDatas);
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
              allDatas.slice(0,6).map(singleClass => <SwiperSlide key={singleClass._id}
              singleClass={singleClass}
              ><img style={{height: '400px'}} src={singleClass.instructorImage} alt="" />
              </SwiperSlide>)
          }
        
        
      </Swiper>
    </>
    );
};

export default PopulerInstructor;