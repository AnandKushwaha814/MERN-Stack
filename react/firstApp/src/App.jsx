import "./App.css";
import CardsTab from "./Chatterly/CardsTab";

// import Cards from "./Card/Card"
// import Name from "./name/Name";

function App() {
  return (
    <>

    <CardsTab/>
      {/* <Cards />
      <Cards />
      <Cards />
      <Cards /> */}
      <Name name="Anand" color="Blue"/>
      <Name name="Prince" color="Red"/>
      <Name name="Ramesh" color="Green"/>
      <Name name="Rohan" color="darkRed"/>
      <Name name="Shohan" color="darkPink"/>
      <Name name="Ramu" color="yellow"/>

    </>
  );
}

export default App;
