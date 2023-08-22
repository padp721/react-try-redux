import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCounter, setAbout } from '../store/actions'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function About() {
  const [formAbout, setFormAbout] = useState("")
  const counter = useSelector(state => state.counter.value)
  const about = useSelector(state => state.about.value)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setAbout(formAbout))
  }

  useEffect(() => {
    setFormAbout(about)
  }, [])
  
  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(setCounter(counter + 1))}>
          count is {counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <form onSubmit={handleSubmit}>
          <textarea value={formAbout} rows={5} cols={100} onChange={e => setFormAbout(e.target.value)} />
          <br />
          <button type="submit">Simpan</button>
        </form>
        <br />
        <button onClick={() => navigate("/")}>
          Go to Main Page
        </button>
      </div>
    </>
  )
}

