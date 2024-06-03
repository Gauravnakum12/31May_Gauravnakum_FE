
import { Link } from "react-router-dom";

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
        imgUrl: 'https://img.freepik.com/premium-psd/mid-shot-blogger-holding-mock-up-paper_23-2148769940.jpg?w=826',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 3,
        imgUrl: 'https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346662.jpg?t=st=1715973499~exp=1715977099~hmac=6dc0a4ee34eec8f47a7fb24b1242325dd19f857fdada7216a14822a832da62c2&w=740',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 4,
        imgUrl: 'https://img.freepik.com/free-photo/front-view-smiley-woman-ordering-items-sale-using-tablet-credit-card_23-2148695602.jpg?t=st=1715934339~exp=1715937939~hmac=02b0b5c4f721426f7bbc6c7ee1f6af8d2358bcf7b3711228fb6a10a000fd35e2&w=740',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
]

const PopularPost = () => {
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
    );
}

export default PopularPost;