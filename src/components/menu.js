import React from 'react';
import { HomeOutlined, MoreHoriz, PersonRounded, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
const Menu = () => {
  return <div>
      <div className="menu_container">
           <HomeOutlined className="menuIcon" />
           <SearchRounded  className="menuIcon" />
           <ShoppingCartRounded className="menuIcon" />
           <PersonRounded className="menuIcon" />
           <MoreHoriz className="menuIcon" />
         </div>
  </div>;
};

export default Menu;
