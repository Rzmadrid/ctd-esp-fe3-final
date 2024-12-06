import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const Context = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [favs, setFavs] = useState(lsFavs);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        //console.log(favs)
        localStorage.setItem("favs", JSON.stringify(favs));
      }, [favs]);

      useEffect(() => {
        axios(url)
          .then((res) => {
            console.log(res.data);
            setUsers(res.data);
           
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <div>
        <UserStates.Provider value={{ favs, users, setFavs }}>
         {children}
        </UserStates.Provider>
    </div>
  )
}

export default Context

export const useUserStates = () => useContext(UserStates);