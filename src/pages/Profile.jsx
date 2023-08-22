import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/user/actions'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Profile() {
  const [formField, setFormField] = useState({
    name: "",
    role: "",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setUser(formField))
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormField({
      ...formField,
      [name]: value
    })
  }

  return (
    <>
      <div className="card">
        <p>
          Input your information here
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='name' onChange={handleChange} />
          <br />
          <input type="text" name="role" placeholder='role' onChange={handleChange} />
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

