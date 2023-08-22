import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'

function App() {
  const about = useSelector(state => state.about.value)
  const user = useSelector(state => state.user)

  useEffect(() => {
    // console.log(user);
  }, [user])
  
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Outlet />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        User name : {user.name}
        <br />
        User role : {user.role}
        <br />
      </p>
      <p className="read-the-docs">
        About akan tampil dibawah :
        <br />
        {about}
      </p>
    </>
  )
}

export default App
