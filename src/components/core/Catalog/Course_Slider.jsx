import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

import Course_Card from './Course_Card';

const Course_Slider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25} // Updated from 200 to 25
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, FreeMode, Pagination, Navigation]} // Included FreeMode
          className="max-h-[30rem]" // Updated className to match the first component
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {Courses.map((course, index) => (
            <SwiperSlide key={index}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p> // Updated text styling to match the first component
      )}
    </>
  );
};

export default Course_Slider;
