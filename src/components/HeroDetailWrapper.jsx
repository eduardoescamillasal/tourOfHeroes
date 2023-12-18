import React from "react";
import {useParams} from "react-router-dom";
import HeroDetail from "./HeroDetail";

const HeroDetailWrapper = () => {
  const {id} = useParams();

  return <HeroDetail id={id} />;
};

export default HeroDetailWrapper;
