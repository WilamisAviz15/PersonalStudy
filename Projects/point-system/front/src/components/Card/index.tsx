import React from "react";

import SimpleCard from "./components/SimpleCard";
import { IParamsDoubleCard, IParamsSimpleCard, TypeCard } from "./interfaces/card.interface";
import DoubleCard from "./components/DoubleCard";
import { isOfType } from "./typeguards";
import TextCard from "./components/TextCard";

const Card = ({ type, params }: { type: TypeCard; params: any }) => {
  switch (type) {
    case "simple":
      if (isOfType<IParamsSimpleCard>(params, ["title", "description"])) {
        return <SimpleCard title={params.title} description={params.description} />;
      }
    case "double":
      if (isOfType<IParamsDoubleCard>(params, ["title", "img"])) {
        return <DoubleCard title={params.title} img={params.img} />;
      }

    case "textCard":
      return <TextCard description={params.description} />;
    default:
      return <></>;
  }
};

export default Card;
