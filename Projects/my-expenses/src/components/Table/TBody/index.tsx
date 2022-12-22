import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import TBodyRow from "./TBodyRow";

const TBody = ({ tBodyData }: { tBodyData: IWalletItem[] }) => {
  return (
    <tbody>
      {tBodyData.map((item) => {
        return <TBodyRow key={item.id} data={item} />;
      })}
    </tbody>
  );
};

export default TBody;
