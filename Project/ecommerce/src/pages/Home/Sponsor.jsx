// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';


const sponsorList = [
    {
        imgUrl: 'https://i.ibb.co/MsQL7FY/01.png',

    },
    {
        imgUrl: 'https://i.ibb.co/QYLNZt4/02.png',

    },
    {
        imgUrl: 'https://i.ibb.co/Fg14Lyj/03.png',

    },
    {
        imgUrl: 'https://i.ibb.co/BCHNrb1/04.png',

    },
    {
        imgUrl: 'https://i.ibb.co/d5DPjkB/05.png',

    },
    {
        imgUrl: 'https://i.ibb.co/QfVT1kY/06.png',

    },
]


const Sponsor = () => {
    return (
        <div className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={'true'}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5.5,
                                },
                            }}
                        >
                            {sponsorList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="sponsor-iten">
                                        <div className="sponsor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsor;