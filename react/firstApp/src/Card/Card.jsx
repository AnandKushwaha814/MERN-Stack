import Box from "./Box";

import iphone from "../assets/iphone.png"
import imag from "../assets/samsung.png"
import google from "../assets/google.png"
function Card() {
    return (
        <div className="container">
            <Box title="Iphone" image={iphone} desc={["Powerful Beautiful.","Latest "]}
                description="Buy Iphone" price={5000}
            />
            <Box title="Sumsang" image={imag} desc={["check out recent launches.","S23 Ultra"]}
                description="Buy Sumsang" price={300}
            />
            <Box title="Google" image={google} desc={["Make magic happen with Pixel.","New Updates"]}
                description="Buy Google" price={1500}

            />
        </div>
    )
}
export default Card;
