import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reduce";

const UserStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favs: lsFavs,
  users: [],
  theme: "",
};

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
   
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs));
      }, [state.favs]);

      useEffect(() => {
        axios(url)
          .then((res) => {
            console.log(res.data);
            dispatch({ type: "GET_USERS", payload: res.data });
           
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    useEffect(() => {

        document.body.setAttribute('class', state.theme);
    
    }, [state.theme]);
    
  return (
    <div>
        <UserStates.Provider value={{ state, dispatch }}>
         {children}
        </UserStates.Provider>
    </div>
  )
}

export default Context

export const useUserStates = () => useContext(UserStates);