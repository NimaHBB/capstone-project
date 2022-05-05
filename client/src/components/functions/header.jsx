const imagesPath="https://nimahabibi.de/shop/image/";
const Header=()=>{
  
    return(
        <>
         <div className="App-header">
        <h4>Nitto Shop</h4>
        <form onSubmit={""}>
          <input
            type="text"
            className="search"
            placeholder="search here..."
            autofocus
            required
          ></input>
          <button id="searchBtn">&#10132;</button>
        </form>
        <img className="basketMenue" 
        src={imagesPath+"icon/basket2.svg"}
        alt="Shopping Bag Icon"
        ></img>
      </div>
        </>
    )
}

export default Header