import { doc, getDoc, setDoc } from "firebase/firestore";

import { IUserData } from "shared/interfaces/IUserData.interface";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import { db } from "shared/util/firebase.config";
import { IWalletContext } from "store/interfaces/IWalletContext.interface";

export async function getUser(walletsContext: any) {
  const user = JSON.parse(localStorage.getItem("user")!) as IUserData;
  const docRef = doc(db, "users", user.id!);
  const docSnap = await getDoc(docRef);
  const userData = docSnap.data() as IUserData;

  if (userData === undefined) {
    localStorage.clear();
    // return <Navigate to="/auth" />;
  }
  walletsContext.handleSetWallets(userData.wallets!);
}

export async function handleSaveOrUpdateWallet(
  walletsContext: IWalletContext,
  wallet: IWalletItem
) {
  walletsContext.handleSaveOrUpdateNewWallet(wallet);
  const user = JSON.parse(localStorage.getItem("user")!) as IUserData;
  user.wallets = walletsContext.wallets;
  await setDoc(doc(db, "users", user.id!), user);
}
