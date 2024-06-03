import React from 'react'
import { Link } from 'react-router-dom';
const title = "Most Popular Post";
const postList = [
    {
        id: 1,
        imgUrl: 'https://i.ibb.co/x3s2wq3/women-looking-smartphone-man-23-2147688986.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 2,
        imgUrl: 'https://img.freepik.com/free-photo/happy-couple-after-successful-shopping_329181-1743.jpg?t=st=1715973365~exp=1715976965~hmac=0005d689285fe1d9f983e412ca69adbe74bc380d066ffd17cf492678959ce989&w=740',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 3,
        imgUrl: 'https://img.freepik.com/premium-psd/mid-shot-blogger-holding-mock-up-paper_23-2148769940.jpg?w=826',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 4,
        imgUrl: 'https://img.freepik.com/free-photo/smiling-couple-pointing-holding-blank-card_23-2148303815.jpg?t=st=1715973430~exp=1715977030~hmac=b051c0567d03e044bfa49d78353960da769c36b2d069453145580fcfc8cb2e7e&w=740',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
]

const MostPopularPost = () => {
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {postList.map((blog, i) => (
                    <li className="d-flex flex-wrap justify-content-between" key={i}>
                        <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}><img src={`${blog.imgUrl}`} alt={`${blog.imgAlt}`} /></Link>
                        </div>
                        <div className="post-content">
                            <Link to={`/blog/${blog.id}`}><h6>{blog.title}</h6></Link>
                            <p>{blog.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MostPopularPost