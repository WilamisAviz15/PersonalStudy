import { doc, getDoc } from "firebase/firestore";
import { UserAuth } from "pages/auth/context/AuthProvider";

import { IUserData } from "shared/interfaces/IUserData.interface";
import { db } from "shared/util/firebase.config";

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

export function getUserData() {
  const { user } = UserAuth();
  return;
}
