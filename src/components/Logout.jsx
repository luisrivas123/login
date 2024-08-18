import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const Logout = () => {
  const navigate = useNavigate()
  const { setUser } = useUserContext()

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:3000/logout', {
        method: 'POST',
        credentials: 'include'
      })
      if (res.ok) {
        setUser(null)
        navigate('/')
      }
    } catch (error) {
      console.error('Error logout:', error)
    }
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default Logout
