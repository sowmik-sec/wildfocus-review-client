import React from "react";
import Banner from "../Banner/Banner";
import FeaturedReview from "../FeaturedReview/FeaturedReview";
import FeaturedServices from "../FeaturedServices/FeaturedServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedServices />
      <FeaturedReview />
    </div>
  );
};

export default Home;
