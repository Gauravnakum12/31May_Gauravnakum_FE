import React from 'react'
import PageHeader from '../../components/PageHeader';
const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";
const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
    {
        imgUrl: 'https://i.ibb.co/Xp3VxSs/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Skilled Instructors',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'https://i.ibb.co/wz6rq46/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'All Certificate brand',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'https://i.ibb.co/HBJyn4T/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: '24 x 7 customer service',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]

const About = () => {
    return (
        <div>
            <PageHeader title={'About Our Brand'} curPage={'About'} />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="https://5.imimg.com/data5/QS/ZS/ZV/GLADMIN-80792313/a-500x500.png" alt="about" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About