"use client"
import Image from "next/image";
import Link from "next/link";

import Header from "../../components/Header";
import { ThemeImage } from "@/data/ThemeImage";

// component
import ClientSlider from "../../components/ClientSlider";
import AwesomeServiceBlog from "../../components/AwesomeServiceBlog";
import AboutusBlog from "../../components/AboutusBlog";
import CounterBlog from "../../components/CounterBlog";
import FeatureBlog from "../../components/FeatureBlog";
import PortfolioBlog from "../../components/PortfolioBlog";
import Newslatter from "../../components/Newslatter";
import TeamSlider from "../../components/TeamSlider";
import PricningBlog from "../../components/PricingBlog";
import TestimonialBlog from "../../components/TestimonialBlog";
import BlogSlider from "../../components/BlogSlider";
import Footer from "../../components/Footer";
import GetInTouch from "@/components/GetInTouch";
import { awesomeServices } from "@/data/services";



export default function HomePage() {    
    const selectedServices = awesomeServices.filter(service => [1,2,3,4,5].includes(service.id));
    return(
        <>
            <Header  headstyle={"header-transparent text-black"}/>
            <div className="page-content bg-white">		
                <div className="banner-one" 
                    style={{backgroundImage: `url('${ThemeImage.SliderBnr2.src}')`}}
                >
                    <div className="container">
                        <div className="banner-inner">
                            <div className="img1"><Image src={ThemeImage.SliderBnr3} alt=""/></div>
                            <div className="img2"><Image src={ThemeImage.SliderBnr4} alt=""/></div>
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="banner-content">
                                        {/* <h6 data-wow-duration="1s" data-wow-delay="0.5s" className="wow fadeInUp sub-title">WE CREATE IDEAS</h6> */}
                                       <h2 
    data-wow-duration="1.2s" 
    data-wow-delay="1s" 
    className="wow fadeInUp"
    style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.15, fontWeight: 800 }}
>
    Start Your <br />
    <span className="text-primary"> E-commerce Journey </span>Today
</h2>
                                        <p  data-wow-duration="1.4s" data-wow-delay="1.5s" className="wow fadeInUp m-b30">Our team of experts helps businesses scale through actionable strategies, market insights, and operational improvements.</p>
                                        <a  data-wow-duration="1.6s" data-wow-delay="2s" className="wow fadeInUp btn btn-primary" href="about-us-2.html" >Contact Us<i className="fa fa-angle-right m-l10"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-5">
    <div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s">
        <Image 
            className="move-1" 
            src={ThemeImage.SliderBnr5} 
            alt="slider_5"
            style={{ 
                width: '70%', 
                height: 'auto',
                margin: '0 auto',
                display: 'block'
            }}
        />
    </div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
<section style={{ 
    background: 'linear-gradient(135deg, #1a6ef5 0%, #6c3bea 100%)',
    padding: '60px 0'
}}>
    <div className="container">
        <CounterBlog />
    </div>
</section>
                <section className="content-inner" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg19.src}')`, backgroundSize: "100%"}}
                >
                    <div className="container">
                        <AboutusBlog  btnBlog={true}/>
                    </div>                   
                </section> 
               
                <section style={{ backgroundImage: `url('${ThemeImage.BackBg1.src}')`, backgroundSize: "100%" }}>
    <div className="content-inner-2">
        <div className="container-fluid px-lg-5">
             <div className="section-head style-1 text-center">
                                <h6 className="sub-title">Consultation Services</h6>
                                <h4 className="title">Helping You Build a Successful E-Commerce Business</h4>
                            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                {selectedServices.map((service, i) => (
                    <div className="col" key={i}>
                        <AwesomeServiceBlog
                            cardStyle={service.cardStyle}
                            iconName={service.iconName}
                            title={service.title}
                            desc={service.desc}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>
                 
                
              
                 <section className="content-inner-2">
                    <div className="container">
                        <FeatureBlog />
                    </div>
                </section>
                
                <section className="content-inner bgl-primary" >
                    <div className="container">                       
                        <div className="row testimonials-wraper-1 align-items-center">
                            <div className="col-lg-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.8s">
	        					<div className="section-head style-1">
                                    <h6 className="sub-title">TESTMONIAL</h6>
                                    <h2 className="title m-b10">Results that speak for themselves</h2>
                                    <p>Nunc vel ligula ut erat scelerisque vehicula sit amet porttitor magna. Donec malesuada quis diam quis pellentesque.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <TestimonialBlog />
                            </div>
                        </div>
                    </div>
                </section>	
               
                <section style={{
    background: 'linear-gradient(135deg, #1a2a2a 0%, #0d1f1f 50%, #1a2a2a 100%)',
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden'
}}>
    {/* Subtle grid overlay */}
    <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(21, 24, 216, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none'
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
            <div className="col-lg-7 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <h2 style={{
                    fontSize: 'clamp(36px, 5vw, 58px)',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.2,
                    marginBottom: '24px'
                }}>
                    Start your journey<br />toward success
                </h2>

                <p style={{
                    fontSize: '17px',
                    color: 'rgba(255,255,255,0.65)',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    marginBottom: '40px',
                    maxWidth: '560px',
                    margin: '0 auto 40px'
                }}>
                    Don't wait to transform your business. Let's work together to turn your vision into reality. Contact today to schedule your consultation!
                </p>

                <Link
                    href="/contact-us"
                    className="d-inline-flex align-items-center"
                    style={{
                        background: '#2aa89a',
                        color: '#fff',
                        borderRadius: '50px',
                        padding: '16px 48px',
                        fontWeight: 600,
                        fontSize: '16px',
                        textDecoration: 'none',
                        gap: '10px',
                        transition: 'background 0.3s ease'
                    }}
                    onMouseOver={e => e.currentTarget.style.background = '#229688'}
                    onMouseOut={e => e.currentTarget.style.background = '#2aa89a'}
                >
                    Contact Us
                    <i className="fa fa-arrow-up-right" style={{ fontSize: '14px' }} />
                </Link>
            </div>
        </div>
    </div>
</section>             
            </div>
            <Footer />                          
        </>
    )
}