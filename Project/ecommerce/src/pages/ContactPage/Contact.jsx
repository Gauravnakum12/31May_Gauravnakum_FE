import React, { useState } from "react";
import GoogleMap from "../../components/Sidebar/GoogleMap";
import PageHeader from "../../components/PageHeader";
import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "https://img.freepik.com/free-vector/meeting-point-location-pin-illustration_25030-78536.jpg?t=st=1715974394~exp=1715977994~hmac=a6f1954d60a8e9bd4c16131346ed015a043113700b59c6f41b90dd247440511b&w=360",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "https://img.freepik.com/free-vector/flat-design-person-making-complain_23-2148958467.jpg?t=st=1715974527~exp=1715978127~hmac=2efb831bf0d56ce2623ea69e11de79d1da083fca23b74b1badbd5fc32e6087e5&w=740",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+91 8980171270",
  },
  {
    imgUrl: "https://img.freepik.com/free-vector/open-email-envelope_1020-530.jpg?t=st=1715974013~exp=1715977613~hmac=92a50db4c86bcea5cfb8fcd13619f3c757037db0803319db39ec7ef78d6563e4&w=740",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "gauravnakum2002@gmail.com",
  },
  {
    imgUrl: "https://img.freepik.com/free-vector/global-network-system-vector-concept-illustration-with-satellites-around-globe_8130-2321.jpg?t=st=1715974735~exp=1715978335~hmac=1787ba345cce15e9b50bd352b1523cd612f0b23eb863b72cd53265ff1419fefd&w=740",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];
const sendEmail = (event) => {
  event.preventDefault()
  Swal.fire({
    title: "Data submit Successfully",
    icon: "success"
  });
  emailjs.sendForm('service_5535jef', 'template_rosmkqf', event.target, '8g7fJzeKenEnu9egq');
}
const Contact = () => {
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })

  }
  return (
    <div>
      <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((val, i) => (
                    <div className="contact-item" key={i}>
                      <div className="contact-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name *" required onChange={changeHandler} value={formState.name} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email *" required onChange={changeHandler} value={formState.email} />
              </div>
              <div className="form-group">
                <input type="tel" name="number" placeholder="Mobile Number *" required onChange={changeHandler} value={formState.number} />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Your Subject *" required onChange={changeHandler} value={formState.subject} />
              </div>
              <div className="form-group w-100">
                <textarea rows="8" name="TextArea" type="text" placeholder="Your Message" required onChange={changeHandler} value={formState.TextArea} ></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
