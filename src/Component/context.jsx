import React, { useContext,useReducer} from 'react'
import  reducer  from './reducer';

const AppContext =React.createContext();

const intialState ={
    name:"",
    Image:""
}



const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer,intialState);
    const updateHomePage = () =>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                name:"kathiriya dhaval",
                image:"../images/hero.svg"
            }
        })
    }
    
    const updateAboutPage = () =>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"About Page",
                image:"../images/about.svg"
            }
        })  
    }

    // return <AppContext.Provider value={{fname:"dhaval",Age:25}}>{children}</AppContext.Provider>
    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
        {children}
        </AppContext.Provider>
    }


// global custom hooks
const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}