import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import styles from "./Pages.module.scss";
import Dialog from "../../components/Dialog";
import Sidebar from "../../components/Sidebar";
import Wallet from "../../components/Wallet";
import { setIndex } from "../../services/app.service";
import { IWalletItem } from "../../shared/interfaces/IWalletItem.interface";
import { db } from "../../shared/util/firebase.config";
import Transaction from "../../components/Transaction";
import { UserAuth } from "../auth/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../../shared/interfaces/IUserData.interface";

const Home = () => {
  const [isIdEditing, setIsIdEditing] = useState<IWalletItem>();
  const [isValueAddBalance, setIsValueAddBalance] = useState<number>();
  const [openWalletDialog, setOpenWalletDialog] = useState(false);
  const [walletData, setWalletData] = useState<IWalletItem[]>([]);
  const { logOut } = UserAuth();

  const navigate = useNavigate();
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

      const userWalletsData = docSnap.data() as IUserData;
      console.log(userWalletsData);
    };

    getUser();
  }, []);

  const handleWalletDialog = (value: boolean, currentWallet?: IWalletItem) => {
    if (currentWallet) {
      setIsIdEditing(currentWallet);
    } else {
      setIsIdEditing(undefined);
    }
    setIsValueAddBalance(undefined);
    setOpenWalletDialog(value);
  };

  const handleDeleteWallet = (id: number) => {
    console.log(id);
    setWalletData((oldWalletData) => {
      oldWalletData = oldWalletData.filter(
        (walletData) => +walletData.id !== id
      );
      return oldWalletData;
    });
  };

  const handleAddBalanceOnWallet = (id: number) => {
    setIsValueAddBalance(id);
    setOpenWalletDialog(true);
  };

  const handleUpdateBalanceOnWallet = (value: string, id: number) => {
    setWalletData((oldWalletData) => {
      const oldBalance = +oldWalletData[id].balance;
      const newValue = oldBalance + +value;
      oldWalletData[id].balance = newValue.toString();
      oldWalletData[id].transactions.push({
        name: oldWalletData[id].title,
        amount: value,
        currentBalance: oldWalletData[id].balance,
        date: new Date().toLocaleDateString(),
        description: "test",
      });
      return oldWalletData;
    });
    handleWalletDialog(false);
  };

  const handleSaveOrUpdateNewWallet = (wallet: IWalletItem) => {
    const isEditing = walletData.find((wallets) => wallets.id === wallet.id);

    if (isEditing) {
      console.log("editing:", isEditing);
      setWalletData((oldWalletData) => {
        oldWalletData[+wallet.id] = wallet;
        return oldWalletData;
      });
      setIsIdEditing(undefined);
    } else {
      const { title, description, color, balance } = wallet;
      const newWallet: IWalletItem = {
        id: setIndex().toString(),
        title,
        description,
        color,
        balance,
        transactions: [],
      };

      setWalletData((oldWalletData) => [...oldWalletData, newWallet]);
    }
    handleWalletDialog(false);
  };
  return (
    <main className={styles.container}>
      <Sidebar logout={handleSignOut} />
      <div className={styles.container__content}>
        <Wallet
          data={walletData}
          onOpenWalletDialog={(value: boolean, currentWallet?: IWalletItem) =>
            handleWalletDialog(value, currentWallet)
          }
          onDeleteWallet={(id: number) => handleDeleteWallet(id)}
          onAddBalanceOnWallet={(id: number) => handleAddBalanceOnWallet(id)}
        />
        <Transaction data={walletData} />
        {openWalletDialog && (
          <Dialog
            title={
              isIdEditing
                ? "Edit a wallet"
                : isValueAddBalance
                ? "Add a value"
                : "Create a wallet"
            }
            wallet={isIdEditing}
            onCloseDialog={(value: boolean) => handleWalletDialog(value)}
            saveNewWallet={(wallet: IWalletItem) =>
              handleSaveOrUpdateNewWallet(wallet)
            }
            isValueAddBalance={isValueAddBalance}
            updateBalanceOnWallet={handleUpdateBalanceOnWallet}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
