import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation,  Autoplay } from 'swiper/modules';

const testimonialData = [
    {
        imageName:  ThemeImage.TestimonialPic5,
        title : "James Walker"
    },
    {
        imageName:  ThemeImage.TestimonialPic2,
        title : "Elan Rose"
    },
];

export default function TestimonialBlog(){    
    return(        
        <Swiper className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-shadow owl-btn-center"                
            loop={true}            
            autoplay={{
                delay: 1500,
            }}
            navigation={{
                prevEl : '.owl-prev',
                nextEl : '.owl-next'
            }}
            speed={3000}
            slidesPerView={1}                
            modules={[ Navigation, Autoplay]} 
        >                
            {testimonialData.map((item, ind)=>(                    
                <SwiperSlide className="item wow fadeInUp" key={ind} data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>What sets Haram Traders apart is their clear, business-focused eCommerce strategy. They didn’t just advise — they helped us implement solutions that improved revenue, reduced cart abandonment, and scaled our online operations confidently.</p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="clearfix">
                                <strong className="testimonial-name">{item.title}</strong> 
                                <span className="testimonial-position">Client </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                
            ))} 
            <div className="owl-nav">
                <div className="owl-prev"><i className="fa fa-arrow-left"/></div>
                <div className="owl-next"><i className="fa fa-arrow-right"/></div>
            </div>
        </Swiper>
    )
}