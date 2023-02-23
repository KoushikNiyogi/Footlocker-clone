import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initState = {
    isAuth : false,
    username : "",
}
const reducer = (state,{type,payload})=>{
  switch(type){
    case "LoginUser" : return{
      ...state,
      isAuth : true,
      username : payload
    }
    case "LogoutUser" : return{
        ...state,
        isAuth : false,
        username: ""
    }
    default : return state
  }
}
export default function AuthContextProvider({children}){
    const [state,dispatch] = useReducer(reducer,initState)
    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
