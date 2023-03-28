import { TTemporaryData, ITransaction } from "./interfaces/Itransaction";
import axios from "axios";
import transformData from "./transformData";

export default async function httpGet(
  url: string
): Promise<ITransaction[] | null> {
  try {
    const data = await axios
      .get<TTemporaryData[]>(url)
      .then((response) => response.data);
    return transformData(data);
  } catch (err) {
    return null;
  }
}