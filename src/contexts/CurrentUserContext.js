import axios from 'axios'
import { set } from 'msw/lib/types/context'
import { createContext, useContext, useEffect, useState } from 'react'

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUserContext = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try{
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data)
    } catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    handleMount();
  }, [])

  return (
    
<CurrentUserContext.Provider value={currentUser}>
  <SetCurrentUserContext.Provider value={setCurrentUser}>
    {children}
  </SetCurrentUserContext.Provider>
</CurrentUserContext.Provider>
)
  
}