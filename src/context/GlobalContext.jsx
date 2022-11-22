import { createContext, useRef } from 'react'

    const GlobalContext = createContext()

  
    export const ContextProvider = ({children}) => {

        
        const ref = useRef(null)

        const smoothScroller = () => {
        ref.current?.scrollIntoView({behaviour: 'smooth'});
        }
        


        return (
        // users prop takes in updated state.users array/ loading prop = updated state/updated boolean.
        <GlobalContext.Provider value={{smoothScroller, ref: ref}}>
            {children}
        </GlobalContext.Provider>
        )
    }
  
export default GlobalContext