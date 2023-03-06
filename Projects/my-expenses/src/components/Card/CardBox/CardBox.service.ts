import { doc, setDoc } from "firebase/firestore";

import { IUserData } from "shared/interfaces/IUserData.interface";
import { db } from "shared/util/firebase.config";
import { IWalletContext } from "store/interfaces/IWalletContext.interface";

export async function deleteWallet(walletsContext: IWalletContext, id: string) {
  walletsContext.removeItem(id);
  const user = JSON.parse(localStorage.getItem("user")!) as IUserData;
  user.wallets = walletsContext.wallets;
  await setDoc(doc(db, "users", user.id!), user);
}
