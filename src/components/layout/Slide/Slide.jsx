// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import boliche from "../../../assets/images/2024-09-03 1.png"
import bannerlogo from '../../../assets/images/pyaa_Mesa_de_trabajo_1.png'
import boliche2 from "../../../assets/images/2020-03-05 2.png"
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../Slide/Slide.css"

export default () => {
return (
    <>
    

    <div className='banner_img'>
        <img src={bannerlogo} alt="" />
    </div> 


    <div className='text-container'>
        <h1>DESTACADOS</h1>
        <h3>Los lugares mas visitados</h3>
    </div>

    <div className='btn-1'>

    <Link to={`/bareslist`}>
        <button>Ver Todo</button>
    </Link>
        <p>Arrastra y Desliza...</p>
    </div>

<div className='slide'>


    <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={-150}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >

    

    <SwiperSlide>
        <img src={boliche} alt="" />

    <div className='contenedor'>
        <div className='info'>
        <h3>Moscu</h3>
        <h3>Desde - $5000</h3>
        <h3>Zona Norte</h3>
        </div>

    <div className='btn'>
        <button>Ver Mas</button>
    </div>
    </div>

    </SwiperSlide>


    <SwiperSlide>   
        <img src={boliche} alt="" />

        <div className='contenedor'>
        <div className='info'>
        <h3>Moscu</h3>
        <h3>Desde - $5000</h3>
        <h3>Zona Norte</h3>
        </div>

    <div className='btn'>
        <button>Ver Mas</button>
    </div>
    </div>
        
        



    </SwiperSlide>

    <SwiperSlide>

        <img src={boliche} alt="" />
        

        <div className='contenedor'>
        <div className='info'>
        <h3>Moscu</h3>
        <h3>Desde - $5000</h3>
        <h3>Zona Norte</h3>
        </div>

    <div className='btn'>
        <button>Ver Mas</button>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide><img src={boliche} alt="" /></SwiperSlide>
    <SwiperSlide><img src={boliche} alt="" /></SwiperSlide>

    </Swiper>
</div>
    

   
        </>
);
};