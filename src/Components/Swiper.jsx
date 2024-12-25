import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useParams } from 'react-router';
import allProjects from '../allProjects';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Technologies() {

  const { id } = useParams();
  const project = allProjects[id-1];
  let slides = 3;

  if(document.body.clientWidth < 500) {
    slides = 2;
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={slides}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {
          project.technologies.map(tech => (
              <div className="singleProject-tile">
                  <SwiperSlide key={id} className="swiper-slide">
                    <p>{tech}</p>
                  </SwiperSlide>
              </div>
          ))
      }
      ...
    </Swiper>
  );
};