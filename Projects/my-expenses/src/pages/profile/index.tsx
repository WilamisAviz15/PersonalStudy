import styles from "./Profile.module.scss";
import Sidebar from "components/Sidebar";
import Card from "components/Card";
import InputText from "components/Input/InputText";
import { UserAuth } from "pages/auth/context/AuthProvider";
import { useEffect, useState } from "react";

interface IUserProfile {
  id: string;
  username: string;
  email: string;
}

const Profile = () => {
  const { user } = UserAuth();
  const [currentUser, setCurrentUser] = useState<IUserProfile>();
  useEffect(() => {
    setCurrentUser({
      id: user?.uid!,
      email: user?.email!,
      username: user?.displayName!,
    });
  }, [user]);

  const handleSetName = (value: string) => {
    setCurrentUser((currentUser) => ({
      id: currentUser?.id!,
      email: currentUser?.email!,
      username: value,
    }));
  };

  const handleSetEmail = (value: string) => {
    setCurrentUser((currentUser) => ({
      id: currentUser?.id!,
      email: value,
      username: currentUser?.username!,
    }));
  };

  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        <Card>
          <article className={styles.profile}>
            <header className={styles.profile__header}>
              <div className={styles.profile__header__title}>
                <h2>Your Profile</h2>
              </div>
            </header>
            <main className={styles.profile__content}>
              <div className={styles.flex}>
                <label>uuid: </label>
                <InputText
                  value={currentUser?.id!}
                  readonly={true}
                  customStyles={{ backgroundColor: "#141414" }}
                />
              </div>
              <div className={styles.flex}>
                <label>Username: </label>
                <InputText
                  value={currentUser?.username!}
                  setValue={(value: string) => handleSetName(value)}
                  customStyles={{ backgroundColor: "#141414" }}
                />
              </div>
              <div className={styles.flex}>
                <label>E-mail: </label>
                <InputText
                  value={currentUser?.email!}
                  setValue={(value: string) => handleSetEmail(value)}
                  customStyles={{ backgroundColor: "#141414" }}
                />
              </div>
            </main>
            <footer className={styles.profile__footer}>
              <button>Cancel</button>
              <button>Save</button>
            </footer>
          </article>
        </Card>
      </div>
    </main>
  );
};

export default Profile;
