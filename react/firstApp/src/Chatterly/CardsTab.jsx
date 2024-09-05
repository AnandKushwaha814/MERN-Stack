import Header from "../Chatterly/Header";
import Card from "../Chatterly/Card"
import Title from "../Chatterly/Title"
import Footer from "../Chatterly/Footer"
import './CardTab.css'

function CardsTab() {
  const img1 = "../src/assets/free-images.jpg"
  const img2 = "../src/assets/tiger.jpg"
  const img3 = "../src/assets/Ai.jpg"
  const img4 = "../src/assets/nature.jpg"
  const img5 = "../src/assets/Article.png"
  const img6 = "../src/assets/3359736.jpg"
  const img7 = "../src/assets/lion.jpg"
  const img8 = "../src/assets/samsung.png"
  // const img9 = "../src/assets/nature.jpg"

  const ProfileLogo1 = "../src/assets/anand.jpg"
  const ProfileLogo2 = "../src/assets/Ellipse80.png"
  const ProfileLogo3 = "../src/assets/Oval.png"
  const ProfileLogo4 = "../src/assets/nature.jpg"
  const ProfileLogo5 = "../src/assets/lion.jpg"
  const ProfileLogo6 = "../src/assets/Ai.jpg"
  const ProfileLogo7 = "../src/assets/Oval.png"
  const ProfileLogo8 = "../src/assets/free-images.jpg"
  // const ProfileLogo9 = "../src/assets/3359736.jpg"
  return (
    <>
      <Header />
      <Title />
      <div className="container">
        <Card title="Nature Photography" date="Jan 10 2024" author="Anand" image={img1} img={ProfileLogo1} like={30} comment={50} />
        <Card title="Tiger" date="Apr 10 2003" author="Tony" image={img2} img={ProfileLogo2}like={100} comment={80} />
        <Card title="Artificial Inteligence" date="Dec 01 2020" author="Alen" image={img3} img={ProfileLogo3} like={275} comment={150} />
        <Card title="Natural Photography" date="Sep 21 2023" author="Harry" image={img4} img={ProfileLogo4} like={356} comment={250} />
        <Card title="Article" date="March 11 2022" author="Robert" image={img5} img={ProfileLogo5} like={352} comment={175} />
        <Card title="Ai & Ml" date="Nov 05 2021" author="Pitter" image={img6} img={ProfileLogo6} like={225} comment={125} />
        <Card title="Animal" date="Aug 15 2019" author="Alex" image={img7} img={ProfileLogo7} like={430} comment={200} />
        <Card title="Phones" date="July 31 2015" author="Jone" image={img8} img={ProfileLogo8} like={330} comment={225} />
        {/* <Card title="Trees" date="Feb 20 2017" author="Ajit" image={img9} img={ProfileLogo9} like={230} comment={149} /> */}

      </div>
      <Footer />

    </>
  );
}
export default CardsTab;