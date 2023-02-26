import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initState = {
    isAuth : false,
    username : "",
    brand : "",
    total : "",
    quantity : "",
    cartid : [],
    payment : false
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
    case "brand" : return{
      ...state,
      brand : payload
    }
    case "total" : return{
      ...state,
      total : payload
    }
    case "quantity" : return{
      ...state,
      quantity : payload
    }
    case "cartid" : return{
      ...state,
      cartid : [...payload]
    }
    case "payment" : return{
      ...state,
      payment : payload
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
