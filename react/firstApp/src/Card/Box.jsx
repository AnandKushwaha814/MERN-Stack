/* eslint-disable react/prop-types */
import "./Box.css";

function Box({ title, image, desc, price, description }) {
    return (
        <div className="container">
            <div className="cards">
                <p className="title">{title}</p>
                <img src={image} alt={title} className="image" />
                <div className="desc">
                    <p>{desc[0]}</p>
                    <p>{desc[1]}</p>
                </div>

                <div className="line"></div>
                <div className="description">
                    <p className="desc">{description}</p>
                    <p className="price">{price}</p>
                    <div className="discount">

                        {price > 1000 ? <p>Discount 10%</p> : <p>Discount 5%</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
