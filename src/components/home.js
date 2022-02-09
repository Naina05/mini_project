import React from 'react';
import Items from './items';
import Menu from './menu';
import Slider from './slider/Slider';

const Home = () => {
  return <div>
          <Slider />
          <Menu />

          <div className="headings">
            <h1>TRENDING NOW</h1>
          </div>

          <div className="item_MainContainer">
          <div className="itemContainer">
                <Items />
                <Items />
                <Items />
                <Items />
          </div>
          </div>
         
  </div>;
};

export default Home;
