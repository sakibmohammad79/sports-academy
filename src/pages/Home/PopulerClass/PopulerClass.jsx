
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useData from '../../../hook/useData';


const PopulerClass = () => {
    const [allDatas] = useData();
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
                ><img src={singleClass.classImage} alt="" />
                <p className="text-pink-700 -mt-24 text-center text-3xl font-bold uppercase">{singleClass.className}</p>
                </SwiperSlide>)
            }
          
          
        </Swiper>
      </>
    );
};

export default PopulerClass;