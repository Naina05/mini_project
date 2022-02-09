import React from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
const Header = () => {
    // const [style, setStyle] = useState("cont");
  
    // const changeStyle = () => {
    //   console.log("you just clicked");
    
    //   setStyle("cont2");
    // };
  return <header>
      <div className="toggleMenu">
         <BarChart className="toggleIcon" />
     </div>
      <img src={process.env.PUBLIC_URL + "/images/images.jpg"} alt="" className="logo"/>

     <div  className='inputbox'>
         <SearchRounded className='searchIcon'/>
         <input type="text" placeholder="Search" />
     </div>

     <div className="shopingCart">
         <ShoppingCartRounded className="cart" />
         <div className="cart_content">
             <p>2 </p>
         </div>
     </div>
     <div className="profileContainer">
         <div className="imgBox">
             <img src="" alt="" />
         </div>

         <h2 className="username"> Sumer kumar</h2>
     </div>
     
  </header>
};

export default Header;
