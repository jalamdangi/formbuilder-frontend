import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Dynamic from './Dynamic'
import Formheader from './Formheader'

const Createform = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [anotherfield, setAnotherfield] = useState([])
  const addanother = () => {
    // alert('add another invoked')
    setAnotherfield([...anotherfield, <Dynamic></Dynamic>])
    ReactDOM.render(anotherfield, document.getElementById('addmorefields'))
  }
  const addForm = async () => {
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    // localStorage.setItem('user', JSON.stringify(result))
    // console.log(result)
    if (result) {
      navigate('/login')
    }
  }
  return (
    <div className="container">
      <Formheader></Formheader>
      <Dynamic></Dynamic>
      <div id="addmorefields"></div>
      <button className="btn btn-danger mt-1" onClick={() => addForm()}>Generate Form</button>
      <button className="btn btn-success add" onClick={() => addanother()}>+</button>
    </div>
  )
}

export default Createform
