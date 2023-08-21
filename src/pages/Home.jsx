import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCounter } from '../store/actions'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(setCounter(counter + 1))}>
          count is {counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => navigate("/about")}>
          Edit About
        </button>
      </div>
    </>
  )
}