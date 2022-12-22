import { useContext, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

import styles from "./Pages.module.scss";
import Dialog from "components/Dialog";
import Sidebar from "components/Sidebar";
import Wallet from "components/Wallet";
import Transaction from "components/Transaction";
import WalletContext from "store/wallet-context";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import { db } from "shared/util/firebase.config";
import { IUserData } from "shared/interfaces/IUserData.interface";

const Home = () => {
  const walletsContext = useContext(WalletContext);
  console.log(walletsContext.wallets);

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

  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        <Wallet
          data={walletsContext.wallets}
          onOpenWalletDialog={(value: boolean, currentWallet?: IWalletItem) =>
            walletsContext.handleWalletDialog(value, currentWallet)
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
            onCloseDialog={(value: boolean) =>
              walletsContext.handleWalletDialog(value)
            }
            saveNewWallet={(wallet: IWalletItem) =>
              walletsContext.handleSaveOrUpdateNewWallet(wallet)
            }
            isValueAddBalance={walletsContext.transaction.isValueAddBalance}
            updateBalanceOnWallet={walletsContext.handleUpdateBalanceOnWallet}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
