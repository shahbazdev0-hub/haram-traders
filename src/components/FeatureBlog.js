import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function FeatureBlog() {
    return (
        <div className="row align-items-center" style={{ gap: '0' }}>
            {/* Left Content */}
            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s"
                style={{ paddingRight: '48px' }}>

                <p style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    color: '#888',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                }}>
                    WHY CHOOSE US?
                </p>

                <h2 style={{
                    fontSize: 'clamp(32px, 5vw, 52px)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: '32px',
                    color: '#111'
                }}>
                    Your Trusted Partner in AI & Software
                </h2>

                <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '20px', fontSize: '15px' }}>
                    With <strong>years of hands-on experience in AI and software development</strong>, we are committed to helping businesses build, grow, and scale through intelligent, modern technology solutions.
                </p>

                <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '20px', fontSize: '15px' }}>
                    We believe every business is unique — that's why we deliver{' '}
                    <strong>tailored AI-powered solutions</strong> designed specifically around your goals, challenges, and target audience. From strategy and product architecture to deployment and optimization, our approach is practical, data-driven, and results-focused.
                </p>

                <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '20px', fontSize: '15px' }}>
                    Our <strong>proven success</strong> speaks for itself. We've delivered production-grade systems across fintech, healthcare, and SaaS — while our expert consultation services have helped numerous businesses achieve measurable growth across <strong>global markets</strong>.
                </p>

                <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '40px', fontSize: '15px' }}>
                    Partner with us to turn your vision into sustainable, scalable success.
                </p>

                <Link
                    href="/contact-us"
                    className="btn btn-dark d-inline-flex align-items-center"
                    style={{
                        borderRadius: '50px',
                        padding: '14px 32px',
                        fontWeight: 600,
                        fontSize: '15px',
                        gap: '10px',
                        backgroundColor: '#111',
                        border: 'none'
                    }}
                >
                    Contact Us
                    <i className="fa fa-arrow-up-right" style={{ fontSize: '13px' }} />
                </Link>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 wow fadeInRight d-none d-lg-block" data-wow-duration="2s" data-wow-delay="0.4s">
                <div style={{ borderRadius: '16px', overflow: 'hidden', height: '600px', position: 'relative' }}>
                    <Image
                        src={ThemeImage.AboutPic1}
                        alt="Why Choose Us"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                    />
                </div>
            </div>
        </div>
    );
}