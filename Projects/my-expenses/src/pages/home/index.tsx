import { useContext, useEffect } from "react";

import styles from "./Home.module.scss";
import Dialog from "components/Dialog";
import Sidebar from "components/Sidebar";
import Wallet from "components/Wallet";
import Transaction from "components/Transaction";
import WalletContext from "store/wallet-context";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import { IUserData } from "shared/interfaces/IUserData.interface";
import { UserAuth } from "pages/auth/context/AuthProvider";
import { getUser } from "./Home.service";

const Home = () => {
  const { user } = UserAuth();
  const currentUser: IUserData = {
    id: user?.uid,
    name: user?.displayName!,
    email: user?.email!,
    photoURL: user?.photoURL!,
  };
  console.log(currentUser);
  const walletsContext = useContext(WalletContext);
  useEffect(() => {
    getUser(walletsContext);
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
          />
        )}
      </div>
    </main>
  );
};

export default Home;
