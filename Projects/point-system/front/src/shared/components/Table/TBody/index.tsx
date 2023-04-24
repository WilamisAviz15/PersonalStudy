import { TableHeadBodyInterface } from "../interfaces/table.interface";
import TBodyRow from "./TBodyRow";
import style from "./TBody.module.scss";
import Icon from "../../Icons";
import { MdEdit, MdRestoreFromTrash } from "react-icons/md";

const TBody = ({ tBodyData }: { tBodyData: TableHeadBodyInterface[] }) => {
  return (
    <tbody className={style.tbody}>
      {tBodyData.map((item) => {
        const values = Object.values(item);
        return (
          <>
            <div>
              {values.map((value) => (
                <TBodyRow key={item.id} value={value} />
              ))}
              <div>
                <Icon nameIcon={"MdEdit"} styles={{ cursor: "pointer" }} />
                <Icon nameIcon={"MdOutlineDelete"} styles={{ cursor: "pointer" }} />
              </div>
            </div>
          </>
        );
      })}
    </tbody>
  );
};

export default TBody;
