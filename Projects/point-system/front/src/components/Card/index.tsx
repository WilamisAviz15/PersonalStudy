import React from "react";

import SimpleCard from "./components/SimpleCard";
import { IParamsDoubleCard, IParamsSimpleCard, TypeCard } from "./interfaces/card.interface";
import DoubleCard from "./components/DoubleCard";
import { isOfType } from "./typeguards";
import TextCard from "./components/TextCard";
import CustomCard from "./components/CustomCard";
import { CustomStyles } from "./interfaces/custom-style.interface";

const Card = ({
  type,
  params,
  children,
  styles,
}: {
  type: TypeCard;
  params?: any;
  children?: JSX.Element | JSX.Element[];
  styles?: CustomStyles;
}) => {
  switch (type) {
    case "simple":
      if (isOfType<IParamsSimpleCard>(params, ["title", "description"])) {
        return <SimpleCard title={params.title} description={params.description} styles={styles} />;
      }

    case "double":
      if (isOfType<IParamsDoubleCard>(params, ["title", "img"])) {
        return <DoubleCard title={params.title} img={params.img} styles={styles} />;
      }

    case "textCard":
      return <TextCard description={params.description} styles={styles} />;

    case "customCard":
      return <CustomCard children={children} styles={styles} />;

    default:
      return <></>;
  }
};

export default Card;
