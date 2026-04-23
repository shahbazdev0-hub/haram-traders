"use client"
import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export default function SubscibeForm(){
    const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target,
    'YOUR_PUBLIC_KEY'
  )
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });

  e.target.reset();

  Swal.fire({
    title: "Good job!",
    text: "Form successfully submitted",
    icon: "success"
  });
};
    return(
        <div className="dlab-subscribe style-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h2 className="title">Subscribe To Our Newsletter</h2>
                </div>
                <div className="col-lg-6">
                    <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                        <div className="dzSubscribeMsg"></div>
                        <div className="form-group">
                            <div className="input-group shadow">
                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address" />
                                <div className="input-group-addon">
                                    <button name="submit" value="Submit" type="submit" className="btn btn-primary gradient">
                                        <i className="las la-paper-plane scale4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}