import { useContext, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import styles from "./Pages.module.scss";
import Dialog from "../../components/Dialog";
import Sidebar from "../../components/Sidebar";
import Wallet from "../../components/Wallet";
import { IWalletItem } from "../../shared/interfaces/IWalletItem.interface";
import { db } from "../../shared/util/firebase.config";
import Transaction from "../../components/Transaction";
import { UserAuth } from "../auth/context/AuthProvider";
import { IUserData } from "../../shared/interfaces/IUserData.interface";
import WalletContext from "../../store/wallet-context";

const Home = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const walletsContext = useContext(WalletContext);

  console.log(walletsContext.wallets);

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const user = JSON.parse(localStorage.getItem("user")!) as IUserData;
      const docRef = doc(db, "users", user.id!);
      const docSnap = await getDoc(docRef);

      const userData = docSnap.data() as IUserData;
      walletsContext.handleSetWallets(userData.wallets!);
      console.log(userData);
    };
    setTimeout(() => {
      getUser();
    }, 2000);
  }, []);

  const handleWalletDialog = (value: boolean, currentWallet?: IWalletItem) => {
    if (currentWallet) {
      walletsContext.editing.setIsIdEditing(currentWallet);
    } else {
      walletsContext.editing.setIsIdEditing(undefined);
    }
    walletsContext.transaction.setIsValueAddBalance(undefined);
    walletsContext.dialog.setOpenWalletDialog(value);
  };

  const handleUpdateBalanceOnWallet = (value: string, idWallet: number) => {
    walletsContext.updateTransactions(value, idWallet);
    handleWalletDialog(false);
  };

  const verifyIndex = (idWallet: string) => {
    return walletsContext.wallets.findIndex((wallet) => wallet.id === idWallet);
  };

  const handleSaveOrUpdateNewWallet = (wallet: IWalletItem) => {
    const isEditing = walletsContext.wallets.find(
      (wallets) => wallets.id === wallet.id
    );

    if (isEditing) {
      console.log("editing:", isEditing);
      walletsContext.updateItem(wallet, verifyIndex(wallet.id));
      walletsContext.editing.setIsIdEditing(undefined);
    } else {
      walletsContext.addItem(wallet);
    }
    handleWalletDialog(false);
  };
  return (
    <main className={styles.container}>
      <Sidebar logout={handleSignOut} />
      <div className={styles.container__content}>
        <Wallet
          data={walletsContext.wallets}
          onOpenWalletDialog={(value: boolean, currentWallet?: IWalletItem) =>
            handleWalletDialog(value, currentWallet)
          }
        />
        <Transaction data={walletsContext.wallets} />
        {walletsContext.dialog.openWalletDialog && (
          <Dialog
            title={
              walletsContext.editing.isIdEditing
                ? "Edit a wallet"
                : walletsContext.transaction.isValueAddBalance
                ? "Add a value"
                : "Create a wallet"
            }
            wallet={walletsContext.editing.isIdEditing}
            onCloseDialog={(value: boolean) => handleWalletDialog(value)}
            saveNewWallet={(wallet: IWalletItem) =>
              handleSaveOrUpdateNewWallet(wallet)
            }
            isValueAddBalance={walletsContext.transaction.isValueAddBalance}
            updateBalanceOnWallet={handleUpdateBalanceOnWallet}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
