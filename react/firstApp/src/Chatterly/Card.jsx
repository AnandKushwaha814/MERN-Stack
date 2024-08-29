/* eslint-disable react/prop-types */
import "./Card.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Card = ({ title, image, date, author, img, comment }) => {
  const [likes,setLikes]=useState(0)
  const [colors,setColors]=useState(false)
  const handleLike = () => {
    setLikes(likes + 1)
    setColors(!colors)
  }

  const style = {
    color: "#9fa0a3",
    marginLeft: 4,

  }
  return (
    <div className="container">
      <div className="shop-item">
        <div
          className="box-img"
          style={{ backgroundImage: `url('${image || ""}')` }}
        />
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
              {colors ?<FaHeart color='red' size={20}/> : <CiHeart size={20}/> }
              <p>
                <span
                  style={style} 
                >
                  {likes}
                </span>
              </p>
            </div>
            <div className="comment">
              <i
                className="fa-solid fa-comment-dots"
                style={{ color: "#9fa0a3" }}
              />
              <p>
                <span
                  style={style}
                >
                  {comment}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
