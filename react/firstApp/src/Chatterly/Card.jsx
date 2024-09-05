import PropTypes from 'prop-types'; // Optional but recommended for prop validation
import "./Card.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Card = ({ title, image, date, author, img, comment }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
  };

  const style = {
    color: "#9fa0a3",
    marginLeft: 4,
  };

  return (
    <div className="container">
      <div className="shop-item">
        <div className="box-img">
          <img src={image} alt={title} />
        </div>
        <div className="box-content">
          <h3>{title}</h3>
          <div
            className="box-logo"
            style={{ backgroundImage: `url('${img || ""}')` }}
          >
            <div className="nav-signin">
              <p className="author">{author}</p>
            </div>
            <div className="add-icon">
              <p className="add-second">{date}</p>
            </div>
            <div className="like" onClick={handleLike}>
              {liked ? <FaHeart color="red" size={20} /> : <CiHeart size={20} />}
              <p>
                <span style={style}>{likes}</span>
              </p>
            </div>
            <div className="comment">
              <i className="fa-solid fa-comment-dots" style={{ color: "#9fa0a3" }} />
              <p>
                <span style={style}>{comment}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string,
  comment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Card.defaultProps = {
  img: "",
  comment: 0,
};

export default Card;
