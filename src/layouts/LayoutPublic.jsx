import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserContextProvider from '../context/UserContext'

const LayoutPublic = () => {
  const navigation = useNavigation()
  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === 'loading' && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <UserContextProvider>
          <Outlet />
        </UserContextProvider>
      </main>
      <footer className="container text-center">Este es el Footer</footer>
    </>
  )
}

export default LayoutPublic
