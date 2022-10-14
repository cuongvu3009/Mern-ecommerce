import React from 'react';

import {
  Announcement,
  Categories,
  Navbar,
  Slider,
  Newsletter,
  Footer,
  Products,
} from '../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
