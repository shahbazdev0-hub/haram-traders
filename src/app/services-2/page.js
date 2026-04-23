"use client"
import AwesomeServiceBlog from "@/components/AwesomeServiceBlog";
import ClientSlider from "@/components/ClientSlider";
import CommanTitle from "@/components/CommanTitle";
import FeatureBlog from "@/components/FeatureBlog";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Newslatter from "@/components/Newslatter";
import TeamSlider from "@/components/TeamSlider";
import TestimonialBlog from "@/components/TestimonialBlog";
import { awesomeServices} from "@/data/services";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";

export default function Services(){
    const selectedServices = awesomeServices.filter(service => [1,2,3,4,5,6].includes(service.id));
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"OUR SERVICES"} maintitle={"Home"} pagetitle={"Services"} />
             
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
            </div>
            <Footer />
        </>
    )
}