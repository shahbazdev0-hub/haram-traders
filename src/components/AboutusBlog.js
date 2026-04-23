import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function AboutusBlog({ btnBlog }) {
    const features = [
        {
            id: 1,
            title: "Custom Solutions",
            desc: "Every business is unique, which is why we create personalized strategies tailored to your specific goals and challenges."
        },
        {
            id: 2,
            title: "Expert Team",
            desc: "Our consultants are industry veterans with deep expertise across AI, engineering, and modern software delivery."
        },
        {
            id: 3,
            title: "Results-Driven Approach",
            desc: "We don't believe in fluffy theories — our solutions are backed by data, metrics, and measurable outcomes."
        },
    ];

    return (
        <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head style-1 mb-4">
                    <h6 className="sub-title text-uppercase" style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', fontWeight: 600 }}>
                        ABOUT US
                    </h6>
                    <h2 className="title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                        Innovative AI Solutions for a Modern Business
                    </h2>
                    <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '32px' }}>
                        Ever feel like your business needs a fresh perspective? We're the team that's always looking at the bigger picture. Our mission is simple: to make your business run smarter, faster, and more successfully.
                    </p>
                </div>

                {/* Numbered Feature List */}
                <div>
                    {features.map((item, ind) => (
                        <div key={item.id}>
                            <div className="d-flex align-items-start" style={{ gap: '20px', padding: '18px 0' }}>
                                <span style={{
                                    fontSize: '22px',
                                    fontWeight: 800,
                                    color: '#bbb',
                                    minWidth: '30px',
                                    lineHeight: 1.3
                                }}>
                                    {item.id}
                                </span>
                                <div>
                                    <h5 style={{ fontWeight: 700, marginBottom: '4px', fontSize: '16px' }}>{item.title}</h5>
                                    <p style={{ color: '#666', marginBottom: 0, fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </div>
                            {ind < features.length - 1 && (
                                <hr style={{ margin: 0, borderColor: '#e8e8e8' }} />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div style={{ marginTop: '36px' }}>
                    <Link
                        href="/about-us"
                        className="btn btn-dark d-inline-flex align-items-center"
                        style={{
                            borderRadius: '50px',
                            padding: '12px 28px',
                            fontWeight: 600,
                            fontSize: '15px',
                            gap: '8px'
                        }}
                    >
                        More About Us
                        <i className="fa fa-arrow-up-right" style={{ fontSize: '13px', transform: 'rotate(0deg)' }} />
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div className="col-md-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="dz-media" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <Image
                        src={ThemeImage.AboutImage4}
                        className="move-1"
                        alt="About Us"
                        style={{ borderRadius: '16px', width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
}