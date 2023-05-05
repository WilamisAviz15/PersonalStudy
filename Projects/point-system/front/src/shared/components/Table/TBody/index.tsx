import React from "react";

import { TableHeadBodyInterface } from "../interfaces/table.interface";
import TBodyRow from "./TBodyRow";
import style from "./TBody.module.scss";
import Icon from "../../Icons";

const TBody = ({ tBodyData }: { tBodyData: TableHeadBodyInterface[] }) => {
  return (
    <tbody className={style.tbody}>
      {tBodyData.map((item, i) => {
        const values = Object.values(item);
        return (
          <React.Fragment key={item[i]}>
            <tr>
              {values.map((value) => (
                <TBodyRow key={value} value={value} />
              ))}
              <td>
                <Icon nameIcon={"MdEdit"} styles={{ cursor: "pointer" }} />
                <Icon nameIcon={"MdOutlineDelete"} styles={{ cursor: "pointer" }} />
              </td>
            </tr>
          </React.Fragment>
        );
      })}
    </tbody>
  );
};

export default TBody;
