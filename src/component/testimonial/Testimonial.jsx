import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:"Tina Snow",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae quod pariatur odio libero, praesentium quas? Voluptas consequatur asperiores minus ullam explicabo, minima nobis culpa mollitia omnis possimus? Non, ratione."

  },
  {
    avatar:AVTR2,
    name:"Shatta Wale",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae quod pariatur odio libero, praesentium quas? Voluptas consequatur asperiores minus ullam explicabo, minima nobis culpa mollitia omnis possimus? Non, ratione."

  },
  {
    avatar:AVTR3,
    name:"Kwame Despite",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae quod pariatur odio libero, praesentium quas? Voluptas consequatur asperiores minus ullam explicabo, minima nobis culpa mollitia omnis possimus? Non, ratione."

  },
  {
    avatar:AVTR4,
    name:"Nana Ama McBrown",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae quod pariatur odio libero, praesentium quas? Voluptas consequatur asperiores minus ullam explicabo, minima nobis culpa mollitia omnis possimus? Non, ratione."

  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <SwiperSlide ket={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })   
        }
      </Swiper>
    </section>
  )
}

export default Testimonial