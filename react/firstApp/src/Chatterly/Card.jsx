/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ title, image, date, author, img, like, comment }) => {
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
            <div className="like">
              <i
                className="fa-solid fa-heart"
                style={{ color: "#9fa0a3" }}
              />
              <p>
                <span
                  style={style}
                >
                  {like}
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
