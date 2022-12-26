import { doc, setDoc } from "firebase/firestore";
import { IUserData } from "shared/interfaces/IUserData.interface";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import { db } from "shared/util/firebase.config";

export async function saveWallet(item: IWalletItem) {
  // const userData: IUserData = {
  //   name: userResult.user.displayName!,
  //   email: userResult.user.email!,
  //   photoURL: userResult.user.photoURL!,
  //   wallets: [],
  // };
  // await setDoc(doc(db, "users", userResult.user.uid), userData);
}
