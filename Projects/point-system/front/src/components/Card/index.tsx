import React from "react";

import SimpleCard from "./components/SimpleCard";
import { IParamsDoubleCard, IParamsSimpleCard, ParamsTypeCard, TypeCard } from "./interfaces/card.interface";
import DoubleCard from "./components/DoubleCard";
import { isOfType } from "./typeguards";

const Card = ({ type, params }: { type: TypeCard; params: any }) => {
  console.log(params);
  switch (type) {
    case "simple":
      if (isOfType<IParamsSimpleCard>(params, Object.keys(params))) {
        return <SimpleCard title={params.title} description={params.description} />;
      }
    case "double":
      if (isOfType<IParamsDoubleCard>(params, Object.keys(params))) {
        return <DoubleCard title={params.title} img={params.img} />;
      }
    default:
      return <></>;
  }
};

export default Card;
