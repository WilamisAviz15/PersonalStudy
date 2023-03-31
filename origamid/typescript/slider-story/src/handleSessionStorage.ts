import IUser from "./interfaces/IUser";

sessionStorage.setItem("user", JSON.stringify({ id: 1, name: "Will" }));
sessionStorage.setItem("friends", JSON.stringify({ id: 2, name: "Origamid" }));

function getCurrentUser(): IUser | null {
  const currentUser = sessionStorage.getItem("user");
  if (currentUser) {
    return JSON.parse(currentUser);
  }
  return null;
}

function getFriends(): IUser | null {
  const currentFriends = sessionStorage.getItem("friends");
  if (currentFriends) {
    return JSON.parse(currentFriends);
  }
  return null;
}


export default function initSession(){
  return {
    currentUser: getCurrentUser(),
    friends: getFriends()
  }
}