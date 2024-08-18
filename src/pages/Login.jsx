import { useState } from 'react'
import { useUserContext } from '../context/UserContext'
import { useRedirectActiveUser } from '../hooks/useRedirectActiveUser'
// import { login } from '../lib/userLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { user, setUser } = useUserContext()

  useRedirectActiveUser(user, '/dashboard')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // try {
    //   const credentialUser = await login({
    //     username: username,
    //     password: password
    //   })

    // } catch (error) {
    //   console.log(error)
    // }

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include' // Importante para enviar las cookies
    })

    const data = await response.json()
    if (response.ok) {
      setUser(data.user.username)
      // Puedes almacenar el username en el estado o en un contexto si lo necesitas
    } else {
      setError(data.message)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  )
}

export default Login
