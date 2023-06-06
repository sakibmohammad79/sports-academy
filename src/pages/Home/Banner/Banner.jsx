import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='text-center'>
        <div>
            <img className='' src="https://i.postimg.cc/mhxKyHkM/badminton-player-serving-shuttlecock-2021-08-27-18-28-17-utc-copy1-800x533.jpg" />
        </div>
        <div>
            <img src="https://i.postimg.cc/fyTTx13m/shuttlecock-on-green-badminton-playing-court-2022-04-08-12-50-00-utc-copy-1024x683.png" />
        </div>
        <div>
            <img src="https://i.postimg.cc/MHmwr5Bx/pexels-oleksandr-pidvalnyi-12969082.png" />
        </div>
    </Carousel>
    );
};

export default Banner;