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
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
