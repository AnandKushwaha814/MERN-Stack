import "./Header.css";
const Header = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Project 1</title>
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <header>
        <div className="navbar">
          <div className="nav-img" />
          {/*---------------Logo---------------------------*/}
          <div className="nav-logo" />
          <div className="nav-title">
            <p>Anand</p>
            <i className="fa-solid fa-caret-down" />
          </div>
        </div>
        {/*-----------------------------Nav Section 2 for User Input -------------------------------------------------*/}
        <div className="nav-section">
          <div className="nav-filter">
            <p>Filter</p>
            <img src="img/Line2.png" alt="" />
            {/*-----------------------------------User---------------------------------------------------------------------------------*/}
            <div className="nav-info">
              <p className="user">Created By</p>
              <div className="nav-select">
                <input placeholder="All" className="nav-select1" />
                <i className="fa-solid fa-caret-down" />
              </div>
            </div>
            {/*----------------------------------Date----------------------------------------------------------------------------------*/}
            <div className="nav-info">
              <p className="user1">Published Date</p>
              <div className="nav-date">
                <input placeholder="Select date" className="nav-date1" />
                <i className="fa-solid fa-caret-down" />
              </div>
            </div>
            {/*-------------------------------------Search-------------------------------------------------------------------------------*/}
            <div className="nav-info">
              <p className="user2">Search</p>
              <div className="nav-search">
                <input placeholder="Type Here" className="nav-search1" />
                <i className="fa-solid fa-caret-down" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>

  );
}
export default Header;
