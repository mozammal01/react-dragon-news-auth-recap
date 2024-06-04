import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

  const { _id, title, rating, total_view, author, thumbnail_url, image_url, details, others_info, category_id } = news;

  return (
    <div className="card w-full p-5 bg-base-100 rounded-none border-b-2 mb-16">
      <h2 className="card-title mb-5">{title}</h2>
      <figure><img src={image_url} alt="Shoes" /></figure>
      <div className="card-body">
        {/* <p>{details}</p> */}
        {
          details.length > 200 ?
            <p>{details.slice(0, 200)}
              <Link
                to={`/news/${_id}`}
                className='text-red-500 font-bold'
              > Read More...
              </Link>
            </p> :
            <p>{details}</p>
        }
        <hr className='m-5' />
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.array
};

export default NewsCard;