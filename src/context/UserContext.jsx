import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const UserContext = createContext()

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  // const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    const unsuscribe = async () => {
      try {
        const res = await fetch('http://localhost:3000/check-auth', {
          method: 'GET',
          credentials: 'include' // Asegura que las cookies se envían con la solicitud
        })

        const data = await res.json()

        if (res.ok) {
          // setIsAuthenticated(true)
          setUser(data)
        }
        // else {
        //   setIsAuthenticated(false)
        // }
      } catch (error) {
        console.error('Error checking authentication:', error)
        // setIsAuthenticated(false)
      }
    }
    // return unsuscribe
    unsuscribe()
  }, [])

  if (user === false) return <p>Loading app...</p>

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
